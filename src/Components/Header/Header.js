// Importing Navlink and CSS
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    // Default Active Menu Style Function
    const navActive = {
        borderBottom: '2px solid #ff6492'
    }
    return (
        <div>
            {/* Header Starts Here */}
            <header className="head py-7">
                <div className="container mx-auto">
                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                        <div className="logo">
                            {/* Logo Here */}
                            <h3 className="text-white font-bold text-2xl">CO<span className="text-textPink">DE</span>RS CA<span className="text-textPink">MP</span></h3>
                        </div>
                        <div className="navigation">
                            {/* Navigation Bar */}
                            <nav className="text-right text-base uppercase text-white font-semibold">
                                <NavLink activeStyle={navActive} className="p-2 m-2" to="/home">Home</NavLink>
                                <NavLink activeStyle={navActive} className="p-2 m-2" to="/about">About</NavLink>
                                <NavLink activeStyle={navActive} className="p-2 m-2" to="/services">Services</NavLink>
                                <NavLink activeStyle={navActive} className="p-2 m-2" to="/contact">Contact</NavLink>
                            </nav>
                        </div>
                    </div>

                </div>
            </header>
        </div>
    );
};

export default Header;