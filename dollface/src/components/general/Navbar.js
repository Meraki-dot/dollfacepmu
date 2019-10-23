import React from 'react';
import './css/Navbar.css'
import { ReactComponent as Logo } from '../images/dollface.svg';

const Navbar = () => {

    return (
        <div id="nav-container">
            <span id="top-logo">
                <a href="/"><Logo /></a>
            </span>
            <span id="nav-item">
                <a href="/toa">Terms of Agreement</a>
            </span>
            <span id="nav-item">
                <a href="/about-me">About Me</a>
            </span>
            <span id="nav-item">
                <a href="/preparation">How to Prepare</a>
            </span>
            <span id="nav-item">
                <a href="/services">Services</a>
            </span>
            <span id="nav-item">
            <a href="/appointments">Appointments</a>
            </span>
            <span id="nav-item">
                <a href="https://www.instagram.com/dollfacepmu/?hl=en" target="_blank" rel="noopener noreferrer">
                    Gallery
                </a>
            </span>
        </div>
    );
}

export default Navbar;