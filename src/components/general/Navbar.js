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
            <div id="nav-item-container">
                <Link className="nav-item" to="/toa">POLICIES</Link>
                <Link className="nav-item" to="/about-me">ABOUT ME</Link>
                <Link className="nav-item" to="/preparation">PREP & AFTERCARE</Link>
                <Link className="nav-item" to="/services">SERVICES</Link>
                <Link className="nav-item" to="/appointments">APPOINTMENTS</Link>
                <a className="nav-item" href="https://www.instagram.com/dollfacepmu/?hl=en" target="_blank" rel="noopener noreferrer">
                    GALLERY
            </a>
            </div>
        </div>
    );
}

export default Navbar;