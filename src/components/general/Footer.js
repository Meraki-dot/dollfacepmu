import React from 'react';
import './css/Footer.css';
import { ReactComponent as Instagram } from '../images/instagram.svg';
import { ReactComponent as Facebook } from '../images/facebook.svg';
import { ReactComponent as Yelp } from '../images/yelp.svg';

const Footer = () => {
    return (
        <div id="footer-wrapper">
            <div id="address">
                <a href="https://bit.ly/2UTTiOz" target="_blank" rel="noopener noreferrer">
                    <p>
                        1671 West Katella Ave ste 240 Anaheim, CA 92802
                    </p>
                </a>
            </div>
            <div id="number">
                <a href="sms:7149499495">714.949.9495</a>
            </div>
            <div id="social-icons">
                <span id="insta">
                    <a className="social-icon" href="https://www.instagram.com/dollfacepmu/?hl=en" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                </span>
                <span id="fb">
                    <a className="social-icon" href="https://www.facebook.com/dollfacePMU" target="_blank" rel="noopener noreferrer"><Facebook /></a>
                </span>
                <span id="yelp">
                    <a className="social-icon" href="https://www.yelp.com/biz/dollface-permanent-makeup-anaheim" target="_blank" rel="noopener noreferrer"><Yelp /></a>
                </span>
            </div>
        </div>
    );
}

export default Footer;