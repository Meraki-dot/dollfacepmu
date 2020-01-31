import React, { useState, useEffect } from 'react';
import './css/Services.css';
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import { Animated } from "react-animated-css";
import Burger from '../general/Burger/Burger';
import Menu from '../general/Menu/Menu';
import OmbreModal from './ServicesModals/OmbreModal';
import MicroModal from './ServicesModals/MicroModal';
import Removal from './ServicesModals/Removal';
import SkinNeedling from './ServicesModals/SkinNeedling';
import LashLift from './ServicesModals/LashLift';
import LipBlush from './ServicesModals/LipBlush';

const Services = () => {

    const [open, isOpen] = useState(false)

    useEffect(() => {
        isOpen(false);
    }, []);

    return (
        <Animated animationIn="fadeIn" animationInDuration="2000" isVisible={true}>
            <div id="services-container">
                <Navbar />
                <div className="burger-container">
                    <Burger className="burger-menu" open={open} isOpen={isOpen} />
                </div>
                <Menu open={open} isOpen={isOpen} />
                <div id="main-services-title">
                    <h1>EYEBROW SERVICES</h1>
                </div>
                <div id="eyebrow-services">
                    <OmbreModal />
                    <MicroModal />
                    <Removal />
                </div>
                <div id="services-title-2">
                    <h1>OTHER SERVICES</h1>
                </div>
                <div id="other-services">
                    <SkinNeedling />
                    <LashLift />
                    <LipBlush />
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