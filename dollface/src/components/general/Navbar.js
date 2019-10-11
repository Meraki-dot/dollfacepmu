import React from 'react';
import './css/Navbar.css'
import { ReactComponent as Logo } from '../images/dollface.svg';

const Navbar = () => {

    return (
        <div id="nav-container">
            <span id="top-logo">
                <a href="/"><Logo /></a>
            </span>
            <span>
                <a href="/toa">Terms of Agreement</a>
            </span>
            <span>
                <a href="/preparation">How to Prepare</a>
            </span>
            <span>
                <a href="/services">Services</a>
            </span>
            <span>
                Appointments
            </span>
            <span>
                <a href="https://www.instagram.com/dollfacepmu/?hl=en" target="_blank" rel="noopener noreferrer">
                    Gallery
                </a>
            </span>
        </div>
    );
}

export default Navbar;