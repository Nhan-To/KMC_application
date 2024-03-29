// App.js

import React, { useState } from 'react';
import MenuBar from './components/MenuBar';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HistoryLog from './components/HistoryLog';
import Home from './components/Home';
import Purchase from './components/Purchase';
import Sell from './components/Sell';
import axios from 'axios';
import './assets/App.css';

function App() {
  const [displayData, setDisplayData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://kmc-backend.onrender.com/items");
      setDisplayData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Router>
        <div className='sidebar-wrapper'>
          <MenuBar />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home fetchData={fetchData} displayData={displayData} />}
            />
            <Route path="/history" element={<HistoryLog />} />
            <Route path="/purchase" element={<Purchase fetchData={fetchData} displayData={displayData} />} />
            <Route path="/sell" element={<Sell />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
