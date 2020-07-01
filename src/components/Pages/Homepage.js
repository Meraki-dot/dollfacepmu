import React, { useState, useEffect } from 'react';
import './css/Homepage.css'
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import { Animated } from "react-animated-css";
import { ReactComponent as Logo } from '../images/dollface.svg';
import Burger from '../general/Burger/Burger';
import Menu from '../general/Menu/Menu';
import { Link } from 'react-router-dom';
import InstaGrid from '../general/InstaGrid';

const Homepage = () => {

    const [open, isOpen] = useState(false)

    return (
        <Animated animationIn="fadeIn" animationInDelay="400" animationInDuration="500" isVisible={true}>
            <div id="home-container">
                <span id="navbar-container"><Navbar /></span>
                <div class="burger-container">
                    <Burger className="burger-menu" open={open} isOpen={isOpen} />
                </div>
                <Menu open={open} isOpen={isOpen} />
                <div id="mobile-logo"><Logo /></div>
                <div id="hero-panel">
                    <div id="hero-left">
                        <h1 id="hero-message">
                            DOLLFACE
                        </h1>
                        <h1 id="hero-message-2">PERMANENT MAKEUP</h1>
                        <Link to="/appointments">
                            <button id="homepage-schedule">
                                <span>
                                    BOOK AN APPOINTMENT
                            </span>
                                <span>
                                    <p id="arrow">&#8594;</p>
                                </span>
                            </button>
                        </Link>
                    </div>
                    <div id="hero-right">
                        <InstaGrid account="dollfacepmu" numberOfMediaElements={9} id="instafeed" />
                    </div>
                    <Link to="/appointments" id="homepage-schedule-mobile">
                        <button id="homepage-schedule-mobile-button">
                            <span>
                                BOOK AN APPOINTMENT
                            </span>
                        </button>
                    </Link>
                </div>
                <div id="footer-container">
                    <Footer />
                </div>
            </div>
        </Animated>
    );
}

export default Homepage;