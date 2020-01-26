import React from 'react';
import './css/Services.css';
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import { Animated } from "react-animated-css";

const Services = () => {
    return (
        <Animated animationIn="fadeIn" animationInDuration="2000" isVisible={true}>
            <div id="services-container">
                <Navbar />
                <div id="services-title">
                    <h1>EYEBROW SERVICES</h1>
                </div>
                <div id="eyebrow-services">
                    <a href="/services/ombre" className="flip-card">
                        <div id="ombre" className="flip-card-inner" >
                            <div className="flip-card-front">
                                <h1>OMBRE</h1>
                            </div>
                            <div className="flip-card-back">
                                <h3>Test run Test run Test run Test run Test run Test run</h3>
                            </div>
                        </div>
                    </a>
                    <a href="/services/microblading" className="flip-card">
                        <div id="microblading" className="flip-card-inner">
                            <div className="flip-card-front">
                                <h1>MICRO BLADING</h1>
                            </div>
                            <div className="flip-card-back">
                                <h3>Test run Test run Test run Test run Test run Test run</h3>
                            </div>
                        </div>
                    </a>
                    <a href="/services/removal-lightening" className="flip-card">
                        <div id="removal" className="flip-card-inner">
                            <div className="flip-card-front">
                                <h1>REMOVAL/<br></br>LIGHTENING</h1>
                            </div>
                            <div className="flip-card-back">
                                <h3>Test run Test run Test run Test run Test run Test run</h3>
                            </div>
                        </div>
                    </a>
                </div>
                <div id="services-title-2">
                    <h1>OTHER SERVICES</h1>
                </div>
                <div id="other-services" >
                    <a href="/services/skin-needling" className="flip-card">
                        <div id="skin-needling" className="flip-card-inner">
                            <div className="flip-card-front">
                                <h1>SKIN NEEDLING</h1>
                            </div>
                            <div className="flip-card-back">
                                <h3>Test run Test run Test run Test run Test run Test run</h3>
                            </div>
                        </div>
                    </a>
                    <a href="/services/lash-lift" className="flip-card">
                        <div id="lash-lift" className="flip-card-inner">
                            <div className="flip-card-front">
                                <h1>LASH LIFT</h1>
                            </div>
                            <div className="flip-card-back">
                                <h3>Test run Test run Test run Test run Test run Test run</h3>
                            </div>
                        </div>
                    </a>
                    <a href="/services/lip-blush" className="flip-card">
                        <div id="lip-blush" className="flip-card-inner">
                            <div className="flip-card-front">
                                <h1>LIP BLUSH</h1>
                            </div>
                            <div className="flip-card-back">
                                <h3>Test run Test run Test run Test run Test run Test run</h3>
                            </div>
                        </div>
                    </a>
                </div>
                <div id="services-footer">
                    <Footer />
                </div>
            </div>
        </Animated>
    );
}

export default Services
    ;