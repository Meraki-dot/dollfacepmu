import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './css/Homepage.css'
import { googleCall } from "../../actions/index";
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';

const Homepage = () => {

    const dispatch = useDispatch();

    const onClick = (e) => {
        e.preventDefault();
        dispatch(googleCall())
    }

    return ( 
        <div id="home-container">
            <Navbar />
            <div id="hero-panel">
                <div id="hero-left">
                    <h1 id="hero-message">
                        BRUH, MY EYES ARE DOWN HERE
                    </h1>
                    <button>
                        SCHEDULE AN APPOINTMENT
                    </button>
                </div>
                <div id="hero-right">
                    <div id="transparent-link">
                        <a href="https://www.instagram.com/dollfacepmu/?hl=en" target="_blank" rel="noopener noreferrer"></a>
                    </div>
                </div>
            </div>
            <div id="footer-container">
                <Footer />
            </div>
        </div>
     );
}
 
export default Homepage;