import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import HistoryIcon from '@mui/icons-material/History';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import '../assets/MenuBar.css'

function MenuBar() {
    const [collapsed, setCollapsed] = useState(false);
    const [displayData, setDisplayData] = useState(null);

    const fetchData = async () => {
        try {
        const response = await axios.get("https://kmc-backend.onrender.com/items");
        console.log(response.data.data);
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    }

    const handleToggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Sidebar collapsed={collapsed} className='menuBar'>
            <Menu>
                <Link to="/">
                    <MenuItem icon={<Home />}>Tồn Kho</MenuItem>
                </Link>
                <Link to="/history">
                    <MenuItem icon={<HistoryIcon />}>Hàng Đã Bán</MenuItem>
                </Link>
                <Link to="/purchase">
                    <MenuItem icon={<ShoppingCartIcon />}>Nhập Hàng</MenuItem>
                </Link>
                <Link to="/sell">
                    <MenuItem icon={<AttachMoneyIcon />}>Bán Hàng</MenuItem>
                </Link>
                <div className="menu-icon-wrapper">
                    <MenuItem icon={<MenuIcon />} onClick={fetchData}>Menu</MenuItem>
                </div>
            </Menu>
        </Sidebar>
    );
}

export default MenuBar;
