import React from "react";
import Header from "../components/header";
import Character from "../assets/character.png"
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Header />
            <div className="flex flex-row content-center justify-center items-center">
                <div>
                    <h1 className="mt-[1.3em] font-bold text-sage text-7xl">안녕하세요.</h1>
                    <h1 className="font mt-5 font-bold text-sage text-7xl">hello !</h1>
                    <p className="mt-8 w-3/4">i'm <span className="font-bold">claire</span>, a nyc-based software engineer and artist looking to combine the left and right brain in technology.</p>
                    <p className="mt-5 w-3/4">current student at nyu and former intern @ cvs health</p>

                    <div className="mt-5 flex flex-row">
                        <Link to="https://www.linkedin.com/in/sunminkim6872/"><FiLinkedin /></Link>
                        <Link to="https://github.com/radishsoups"><FiGithub className="ml-5" /></Link>
                    </div>
                </div>
                <img src={Character} className="mt-[5em] w-auto h-[300px]" alt="Drawing of a girl"></img>
            </div>
        </div >
    );
};

export default Home;




