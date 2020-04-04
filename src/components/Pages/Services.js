 import React, { useState, useEffect, useRef } from 'react';
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
//images
import Ombre from '../images/Ombre.JPG';
import Microblading from '../images/Microblading.JPG';
import Microshading from '../images/Microshading.JPG';
import Touch_Up from '../images/Touch_Up.JPG';
import CorrectionImage from '../images/Correction.JPG';
import Lashes from '../images/Lashes.JPG';


const Services = () => {

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
    // General scroll to element function

    const lipRef = useRef(null)
    const lashRef = useRef(null)
    const eyebrowRef = useRef(null)

    const lipScroll = () => scrollToRef(lipRef)
    const lashScroll = () => scrollToRef(lashRef)
    const eyebrowScroll = () => scrollToRef(eyebrowRef)

    const [open, isOpen] = useState(false)

    useEffect(() => {
        isOpen(false);
    }, []);

    return (
        <Animated animationIn="fadeIn" animationInDelay="300" animationInDuration="2000" isVisible={true}>
            <div id="services-container">
                <Navbar />
                <div className="burger-container">
                    <Burger className="burger-menu" open={open} isOpen={isOpen} />
                </div>
                <Menu open={open} isOpen={isOpen} />
                <div id="sidebar-container">
                    {/* <a onClick={lipScroll}>LIPS</a> */}
                    &emsp; &emsp;
                    <a onClick={lashScroll}>LASHES</a>
                    &emsp; &emsp;
                    <a onClick={eyebrowScroll}>EYEBROWS</a>
                </div>
                <div ref={eyebrowRef} id="eyebrows" className="ind-services first">
                    <div className="services-info-container">
                        <div className='services-info'>
                            <h1>OMBRE</h1>
                            <p className="subtext service-category">EYEBROW SERVICES</p>
                            <p className="subtext"><em>3 - 4 hours | $400</em></p>
                            <OmbreModal />
                        </div>
                    </div>
                    <div className="img-box first">
                        <img src={Ombre} />
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
                        <img src={Microblading} />
                    </div>
                </div>
                <div id="eyebrows" className="ind-services">
                    <div className="services-info-container">
                        <div className='services-info'>
                            <h1>MICROSHADE</h1>
                            <p className="subtext service-category">EYEBROW SERVICES</p>
                            <p className="subtext"><em>3 - 4 hours | $450</em></p>
                            <MicroShade />
                        </div>
                    </div>
                    <div className="img-box">
                        <img src={Microshading} />
                    </div>
                </div>
                <div id="eyebrows" className="ind-services">
                    <div className="services-info-container">
                        <div className='services-info'>
                            <h1>TOUCH UP</h1>
                            <p className="subtext service-category">EYEBROW SERVICES</p>
                            <p className="subtext"><em>2 hours | price in details</em></p>
                            <TouchUp />
                        </div>
                    </div>
                    <div className="img-box">
                        <img src={Touch_Up} />
                    </div>
                </div>
                <div id="eyebrows" className="ind-services">
                    <div className="services-info-container">
                        <div className='services-info'>
                            <h1>CORRECTION</h1>
                            <p className="subtext service-category">EYEBROW SERVICES</p>
                            <p className="subtext"><em>3 - 4 hours | selected style +$50</em></p>
                            <Correction />
                        </div>
                    </div>
                    <div className="img-box">
                        <img src={CorrectionImage} />
                    </div>
                </div>
                <div ref={lashRef} id="lashes" className="ind-services">
                    <div className="services-info-container">
                        <div className='services-info'>
                            <h1>LASH LIFT</h1>
                            <p className="subtext service-category">LASH SERVICES</p>
                            <p className="subtext"><em>1 hour | $80</em></p>
                            <LashLift />
                        </div>
                    </div>
                    <div className="img-box">
                        <img src={Lashes} />
                    </div>
                </div>
                {/* <div ref={lipRef} id="lips" className="ind-services">
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
                </div> */}
                <div id="services-footer">
                    <Footer />
                </div>
            </div>
        </Animated>
    );
}

export default Services
    ;