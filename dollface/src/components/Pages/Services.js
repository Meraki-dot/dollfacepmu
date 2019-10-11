import React from 'react';
import './css/Services.css';
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';

const Services = () => {
    return (
        <div id="services-container">
            <Navbar />
            <div id="services-title">
                <h1>SERVICES</h1>
            </div>
            <div id="sub-title">
                <h2>EYEBROWS</h2>
            </div>
            <div id="eyebrow-services">
                <a href="/services/ombre">
                    <div id="ombre">
                        <h1>OMBRE</h1>
                    </div>
                </a>
                <a href="/services/microblading">
                    <div id="microblading">
                        <h1>MICRO BLADING</h1>
                    </div>
                </a>
                <a href="/services/removal-lightening">
                    <div id="removal">
                        <h1>REMOVAL/LIGHTENING</h1>
                    </div>
                </a>
            </div>
            <div id="services-title-2">
                <h1>OTHER SERVICES</h1>
            </div>
            <div id="other-services">
                <a href="/services/skin-needling">
                    <div id="skin-needling">
                        <h1>SKIN NEEDLING</h1>
                    </div>
                </a>
                <a href="/services/lash-lift">
                    <div id="lash-lift">
                        <h1>LASH LIFT</h1>
                    </div>
                </a>
                <a href="/services/lip-blush">
                    <div id="lip-blush">
                        <h1>LIP BLUSH</h1>
                    </div>
                </a>
            </div>
            <div id="services-footer">
                <Footer />
            </div>
        </div>
    );
}

export default Services
    ;