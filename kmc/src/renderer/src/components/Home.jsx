// Home.js

import React, { useEffect } from "react";
import ItemTable from "./DataTable.jsx";

function Home({ fetchData, displayData }) {
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <>
        <ItemTable data={displayData || []} />
        </>
    );
}

export default Home;
