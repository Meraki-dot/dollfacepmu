import React from 'react';
import './css/Schedule.css'
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import { Animated } from "react-animated-css";

const Schedule = () => {
    return (
        <Animated animationIn="fadeIn" animationInDuration="2000" isVisible={true}>
        <div id="schedule-container">
            <Navbar />
            <iframe id="schedulista-widget-00" src="https://www.schedulista.com/schedule/dollfacepermanentmakeup?mode=widget" allowtransparency="true" frameborder="0" scrolling="yes" width="100%" marginLeft="5%">
            </iframe>
            <div id="schedule-footer">
                <Footer />
            </div>
        </div>
        </Animated>
    );
}

export default Schedule;