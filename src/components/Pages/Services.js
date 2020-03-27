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
import MicroShade from './ServicesModals/MicroShade';
import Correction from './ServicesModals/Correction';
import TouchUp from './ServicesModals/TouchUp';
import DollfaceEyebrow from '../images/dollface_eyebrow.JPG';

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
                <div id="sidebar-container">
                    <a href="#lips">LIPS</a>
                    <a href="#lashes">LASHES</a>
                    <a href="#eyebrows">EYEBROWS</a>
                </div>
                <div id="eyebrows" className="ind-services">
                    <div className="services-info-container">
                        <div className='services-info'>
                            <h1>OMBRE</h1>
                            <p className="subtext service-category">EYEBROW SERVICES</p>
                            <p className="subtext"><em>3 hours | $400</em></p>
                            <OmbreModal />
                        </div>
                    </div>
                    <div className="img-box">
                        <img src={DollfaceEyebrow} />
                    </div>
                </div>
                <div id="eyebrows" className="ind-services">
                    <div className="services-info-container">
                        <div className='services-info'>
                            <h1>MICROBLADE</h1>
                            <p className="subtext service-category">EYEBROW SERVICES</p>
                            <p className="subtext"><em>3 hours | $400</em></p>
                            <MicroModal />
                        </div>
                    </div>
                    <div className="img-box">
                        <img src={DollfaceEyebrow} />
                    </div>
                </div>
                <div id="eyebrows" className="ind-services">
                    <div className="services-info-container">
                        <div className='services-info'>
                            <h1>MICROSHADE</h1>
                            <p className="subtext service-category">EYEBROW SERVICES</p>
                            <p className="subtext"><em>3 hours | $400</em></p>
                            <MicroShade />
                        </div>
                    </div>
                    <div className="img-box">
                        <img src={DollfaceEyebrow} />
                    </div>
                </div>
                <div id="lashes" className="ind-services">
                    <div className="services-info-container">
                        <div className='services-info'>
                            <h1>LASH LIFT</h1>
                            <p className="subtext service-category">LASH SERVICES</p>
                            <p className="subtext"><em>one hour | $80</em></p>
                            <LashLift />
                        </div>
                    </div>
                    <div className="img-box">
                        <img src={DollfaceEyebrow} />
                    </div>
                </div>
                <div id="lips" className="ind-services">
                    <div className="services-info-container">
                        <div className='services-info'>
                            <h1>LIP BLUSH</h1>
                            <p className="subtext service-category">LASH SERVICES</p>
                            <p className="subtext"><em>one hour | $80</em></p>
                            <LipBlush />
                        </div>
                    </div>
                    <div className="img-box">
                        <img src={DollfaceEyebrow} />
                    </div>
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