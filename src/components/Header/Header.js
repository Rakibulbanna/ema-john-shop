import React from 'react';
import logo from '../../images/logo.png';
import '../Header/Header.css';
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt=""></img> 
            <nav>
                <a href="/shop" >shop</a>
                <a href="/orders">order review</a>
                <a href="/shop">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;