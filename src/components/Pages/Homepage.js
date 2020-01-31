import React, { useState, useEffect } from 'react';
import './css/Homepage.css'
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import Instafeed from 'instafeed.js';
import { Animated } from "react-animated-css";
import { ReactComponent as Logo } from '../images/dollface.svg';
import Burger from '../general/Burger/Burger';
import Menu from '../general/Menu/Menu';

const Homepage = () => {

    let feed = new Instafeed({
        get: 'user',
        userId: '7601234475',
        accessToken: '7601234475.1677ed0.b8899fa0e21347c8b91daea60166211e',
        limit: 9,
        sortBy: "most-recent",
        template: '<div class="gallery col-lg-4 instaimg"><a href="{{link}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid" /></a></div>'
    });

    const [open, isOpen] = useState(false)

    useEffect(() => {
        feed.run()
        // eslint-disable-next-line
    }, [])

    return (
        <Animated animationIn="fadeIn" animationInDelay="800" animationInDuration="2000" isVisible={true}>
            <div id="home-container">
                <span id="navbar-container"><Navbar /></span>
                <div class="burger-container">
                    <Burger className="burger-menu" open={open} isOpen={isOpen} />
                </div>
                <Menu open={open} isOpen={isOpen} />
                <span id="mobile-logo"><Logo /></span>
                <div id="hero-panel">
                    <div id="hero-left">
                        <h1 id="hero-message">
                            BRUH, MY EYES ARE DOWN HERE
                        </h1>
                        <a href="/appointments">
                            <button id="homepage-schedule">
                                <span>
                                    SCHEDULE AN APPOINTMENT
                            </span>
                                <span>
                                    <p id="arrow">🡢</p>
                                </span>
                            </button>
                        </a>
                    </div>
                    <div id="hero-right">
                        <div id="instafeed" className="row">
                        </div>
                    </div>
                    <a href="/appointments" id="homepage-schedule-mobile">
                        <button id="homepage-schedule-mobile-button">
                            <span>
                                SCHEDULE AN APPOINTMENT
                            </span>
                        </button>
                    </a>
                </div>
                <div id="footer-container">
                    <Footer />
                </div>
            </div>
        </Animated>
    );
}

export default Homepage;