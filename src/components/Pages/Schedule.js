import React, { useState, useEffect } from 'react';
import './css/Schedule.css'
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import { Animated } from "react-animated-css";
import Burger from '../general/Burger/Burger';
import Menu from '../general/Menu/Menu';

const Schedule = () => {

    const [open, isOpen] = useState(false)

    useEffect(() => {
        isOpen(false);
    }, []);

    return (
        <Animated animationIn="fadeIn" animationInDuration="2000" isVisible={true}>
         <div className="burger-container">
                    <Burger className="burger-menu" open={open} isOpen={isOpen} />
                </div>
                <Menu open={open} isOpen={isOpen} />
        <div id="schedule-container">
            <Navbar />
            <iframe title="schedulista" id="schedulista-widget-00" src="https://www.schedulista.com/schedule/dollfacepermanentmakeup?mode=widget" allowtransparency="true" frameborder="0" scrolling="yes" width="100%" marginLeft="5%">
            </iframe>
            <div id="schedule-footer">
                <Footer />
            </div>
        </div>
        </Animated>
    );
}

export default Schedule;