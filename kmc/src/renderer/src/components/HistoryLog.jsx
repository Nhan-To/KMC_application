import React, { useState, useEffect } from "react"
import axios from "axios"
import HistoryTable from "./HistoryTable.jsx"

function HistoryLog() {
    const [displayData, setDisplayData] = useState(null);

    useEffect(() => {
        fetchData(); 
    }, []); 

    const fetchData = async () => {
        try {
            const response = await axios.get("https://kmc-backend.onrender.com/soldItems?skip=0&limit=99");
            setDisplayData(response.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <>
            <HistoryTable data={displayData || []} /> 
        </>
    );
}

export default HistoryLog