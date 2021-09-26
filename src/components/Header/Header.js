import React from 'react';
import './Header.css'

// This is Header function, call from App.js
const Header = () => {
    return (
        <div className="header container">
            <h1 className="mx-auto header-title">Legendary Programmers Team</h1>
            <h5>Make it work, make it right, make it fast. Simplicity is the soul of efficiency.</h5>
            <h1>Total Budget: 5000 Million</h1>
        </div>
    );
};

export default Header;