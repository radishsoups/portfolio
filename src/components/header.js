import React from "react";
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div>
            <header className="p-3 mx-[12em] my-[2em] flex flex-row content-center justify-center">
                <Link to="/"><img src={logo} className="w-1/2 h-auto" alt="black circle"></img></Link>
                <nav className="flex row content-center ml-auto mt-2 font-bold">
                    <Link to="/work" className="ml-2 mr-5"><p>work</p></Link>
                    <Link to="/about" className="ml-2 mr-5"><p>about</p></Link>
                    <Link to="/contact" className="ml-2 mr-8"><p>contact</p></Link>
                </nav>
            </header >
        </div>
    );
};

export default Header;



