import React from 'react';
import Navbar from "./Navbar/Navbar";

const AppBody = ({ children }) => {
    return (
        <div className="AppBody">
            {children}
        </div>
    );
}

export default AppBody;
