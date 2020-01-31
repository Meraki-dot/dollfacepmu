import React, { useState, useEffect } from 'react';
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import './css/Appointment.css';
import { Animated } from "react-animated-css";
import PoliciesModal from './AppointmentsModal/PoliciesModal';
import PrepareModal from './AppointmentsModal/PrepareModal';
import Burger from '../general/Burger/Burger';
import Menu from '../general/Menu/Menu';

const Appointment = () => {

    const [agreed, setAgreed] = useState(false)

    const onClick = () => {
        setAgreed(!agreed)
    }

    useEffect(() => {
        let checkAgree = document.getElementById("schedulista-button")
        if (agreed === false) {
            checkAgree.style.display = "none"
        }
        else if (agreed === true) {
            checkAgree.style.display = "inline-block"
        }
    })

    const [open, isOpen] = useState(false)

    useEffect(() => {
        isOpen(false);
    }, []);

    return (
        <Animated animationIn="fadeIn" animationInDuration="2000" isVisible={true}>
            <div id="appointment-container">
                <Navbar />
                <div className="burger-container">
                    <Burger className="burger-menu" open={open} isOpen={isOpen} />
                </div>
                <Menu open={open} isOpen={isOpen} />
                <h1 id="appointment-title">BEFORE BOOKING AN APPOINTMENT PLEASE LOOK AT THESE FIRST</h1>
                <div id="pre-reading">
                    <span id="prep-preread">
                        <PrepareModal />
                    </span>
                    <span id="services-preread">
                        <h2><a href="/services" rel="noopener noreferrer">SERVICES</a></h2>
                    </span>
                </div>
                <div id="agreement-container">
                    <div id="statement">
                        <div className="checkbox-container">
                            <input type="checkbox" id="checkbox_1" value="value2" onClick={onClick} />
                            <label for="checkbox_1"></label>
                                <p>AGREE TO THE<PoliciesModal /></p>
                        </div>
                    </div>
                </div>
                <div id="redirect-schedulista">
                    <a href="/schedule">
                        <button id="schedulista-button">
                            <h2>BOOK</h2>
                        </button>
                    </a>
                </div>
                <div id="appointment-footer">
                    <Footer />
                </div>
            </div>
        </Animated>
    );
}

export default Appointment;