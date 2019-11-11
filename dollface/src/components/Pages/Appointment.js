import React, { useState, useEffect } from 'react';
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import './css/Appointment.css';
import { Animated } from "react-animated-css";

const Appointment = () => {

    const [agreed, setAgreed] = useState(false)

    const onClick = (e) => {
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

    return (
        <Animated animationIn="fadeIn" animationInDuration="2000" isVisible={true}>
            <div id="appointment-container">
                <Navbar />
                <h1 id="appointment-title">BEFORE BOOKING AN APPOINTMENT PLEASE LOOK AT THESE FIRST</h1>
                <div id="pre-reading">
                    <span id="prep-preread">
                        <h2><a href="/preparation" rel="noopener noreferrer">PREPARE</a></h2>
                    </span>
                    <span id="services-preread">
                        <h2><a href="/services" rel="noopener noreferrer">SERVICES</a></h2>
                    </span>
                </div>
                <div id="agreement-container">
                    <div id="statement">
                        <div class="custom-control form-control-lg custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1" onClick={onClick} />
                            <label class="custom-control-label" for="customCheck1">BY CHECKING THE BOX, YOU ARE AGREEING TO THE <a href="/toa">POLICIES</a></label>
                        </div>
                    </div>
                </div>
                <div id="redirect-schedulista">
                    <a href="/schedule">
                        <button id="schedulista-button">
                            <h2>NEXT</h2>
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