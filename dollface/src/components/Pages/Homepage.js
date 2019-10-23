import React from 'react';
import './css/Homepage.css'
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import Instafeed from 'instafeed.js';
import { Animated } from "react-animated-css";

const Homepage = () => {

    var feed = new Instafeed({
        get: 'user',
        userId: '7601234475',
        accessToken: '7601234475.1677ed0.b8899fa0e21347c8b91daea60166211e',
        limit: 9,
        sortBy: "most-recent",
        template: '<div class="gallery col-lg-4 instaimg"><a href="{{link}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid" /></a></div>'
    });
    feed.run();

    return (
        <Animated animationIn="fadeIn" animationInDelay="1000" animationInDuration="2000" isVisible={true}>
            <div id="home-container">
                <Navbar />
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
                        <div id="instafeed" class="row">

                        </div>
                    </div>
                </div>
                <div id="footer-container">
                    <Footer />
                </div>
            </div>
        </Animated>
    );
}

export default Homepage;