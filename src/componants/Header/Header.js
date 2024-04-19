import React from 'react';
import logo from'../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
             <img src={logo}alt="" />
             <div >
                <a href="">Shop</a>
                <a href="">Orders</a>
                <a href="">About</a>
                <a href="">Inventory</a>
                <a href="">Login</a>
             </div>
        </nav>
    );
};

export default Header;