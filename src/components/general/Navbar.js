import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import { ReactComponent as Logo } from '../images/dollface.svg';

const Navbar = () => {

    return (
        <div id="nav-container">
            <span id="top-logo">
                <Link to="/"><Logo /></Link>
            </span>
            <span id="nav-item">
                <Link to="/toa">Policies</Link>
            </span>
            <span id="nav-item">
                <Link to="/about-me">About Me</Link>
            </span>
            <span id="nav-item">
                <Link to="/preparation">Prep & Aftercare</Link>
            </span>
            <span id="nav-item">
                <Link to="/services">Services</Link>
            </span>
            <span id="nav-item">
                <Link to="/appointments">Appointments</Link>
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