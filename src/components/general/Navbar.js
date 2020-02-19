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
            <ul>
                <li id="nav-item">
                    <Link to="/toa">POLICIES</Link>
                </li>
                <li id="nav-item">
                    <Link to="/about-me">ABOUT ME</Link>
                </li>
                <li id="nav-item">
                    <Link to="/preparation">PREP & AFTERCARE</Link>
                </li>
                <li id="nav-item">
                    <Link to="/services">SERVICES</Link>
                </li>
                <li id="nav-item">
                    <Link to="/appointments">APPOINTMENTS</Link>
                </li>
                <li id="nav-item">
                    <a href="https://www.instagram.com/dollfacepmu/?hl=en" target="_blank" rel="noopener noreferrer">
                        GALLERY
                </a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;