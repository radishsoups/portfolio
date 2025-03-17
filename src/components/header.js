import React from "react";
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div>
            <header className="min-w-screen p-3 my-[2em] mx-[10%] flex flex-row content-center items-center justify-center">
                <Link to="/"><h1 className="flex row content-center w-full mt-2 ml-[2em] font-extrabold">claire kim</h1></Link>
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



