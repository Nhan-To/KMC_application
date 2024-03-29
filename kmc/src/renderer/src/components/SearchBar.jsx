import React, { useState, useEffect, useRef } from 'react';
import TextField from "@mui/material/TextField";
import '../assets/SearchBar.css';
import axios from 'axios';
import DisplayData from './DisplayData'; // Import the DisplayData component

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [fetchedData, setFetchedData] = useState(null);
    const timeoutIdRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const key = e.key;
            if (/^[a-zA-Z0-9-]$/.test(key)) {
                clearTimeout(timeoutIdRef.current);
                const newQuery = query + key;
                setQuery(prevQuery => prevQuery + key);
                timeoutIdRef.current = setTimeout(() => {
                    if (newQuery.length > 0) {
                        fetchData(newQuery);
                        setQuery('');
                    }
                }, 200);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [query]);

    const fetchData = async (query) => {
        try {
            const response = await axios.get(`https://kmc-backend.onrender.com/items/${query}`);
            setFetchedData(response.data.data); // Store fetched data in state
            console.log(fetchedData)
            postDeleteData(response.data.data); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const deleteData = async (query) => {
        try {
            console.log("here")
            const response = await axios.delete(`https://kmc-backend.onrender.com/items/${query}`);
            console.log(response)
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    }

    const createPostData = (data) => {
        const currentDate = new Date(); // Get the current date
        const currentDateFormatted = currentDate.toLocaleDateString(); // Format date as required by the backend
    
        return {
            name: data.name,
            id: data.id,
            barcode: data.barcode,
            type: data.type,
            content: data.content,
            totalWeight: data.totalWeight,
            indiWeight: data.indiWeight,
            price: data.price,
            unitPrice: 0,
            revenue: 0,
            sellDate: currentDateFormatted,
            buyDate: data.buyDate
        };
    };
    
    const postDeleteData = async (data) => {
        try {
            for (const item of data) {
                const modifiedItem = createPostData(item);
                console.log(modifiedItem)
                const response = await axios.post(`https://kmc-backend.onrender.com/soldItems/`, modifiedItem);
                deleteData(modifiedItem.barcode);
            }
        } catch (error) {
            console.error("Error posting data:", error);
        }
    };
    
    

    return (
        <div className="page-container">
            <div className="search-bar-container">
                <form className="search-bar-container">
                    <TextField
                        type="text"
                        placeholder=""
                        value={query}
                        onChange={() => {}}
                        className="search-input"
                        size="small"
                    />
                </form>
            </div>
            <DisplayData data={fetchedData || []} />
        </div>
    );
}

export default SearchBar;
