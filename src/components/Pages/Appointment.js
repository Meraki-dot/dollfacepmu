import React, { useState, useEffect } from 'react';
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import './css/Appointment.css';
import { Animated } from "react-animated-css";
import Burger from '../general/Burger/Burger';
import Menu from '../general/Menu/Menu';
import { Link } from 'react-router-dom';

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
                <div>
                    <Navbar />
                </div>
                <div className="burger-container">
                    <Burger className="burger-menu" open={open} isOpen={isOpen} />
                </div>
                <Menu open={open} isOpen={isOpen} />
                <div id="appt-title-box">
                    <h1 id="appointment-title">BEFORE BOOKING AN APPOINTMENT PLEASE LOOK AT THESE FIRST</h1>
                </div>
                <div id="pre-reading">
                    <span id="prep-preread">
                    <h2><Link to="/preparation" rel="noopener noreferrer">PREPARE</Link></h2>
                    </span>
                    <span id="services-preread">
                        <h2><Link to="/services" rel="noopener noreferrer">SERVICES</Link></h2>
                    </span>
                </div>
                <div id="agreement-container">
                    <div id="statement">
                        <div className="checkbox-container">
                            <input type="checkbox" id="checkbox_1" value="value2" onClick={onClick} />
                            <label for="checkbox_1"></label>
                            <p>AGREE TO THE POLICIES & TO SEND BARE BROW PHOTOS.</p>
                        </div>
                    </div>
                </div>
                <div id="redirect-schedulista">
                    <Link to="/schedule">
                        <button id="schedulista-button">
                            <h2>BOOK</h2>
                        </button>
                    </Link>
                </div>
                <div id="appointment-footer">
                    <Footer />
                </div>
            </div>
        </Animated>
    );
}

export default Appointment;