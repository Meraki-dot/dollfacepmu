import React from 'react';
import './css/Footer.css';
import { ReactComponent as Instagram } from '../images/instagram.svg';
import { ReactComponent as Facebook } from '../images/facebook.svg';
import { ReactComponent as Yelp } from '../images/yelp.svg';

const Footer = () => {
    return (
        <div id="footer-wrapper">
            <div id="address">
                <a href="https://www.shorturl.at/lqRZ3" target="_blank" rel="noopener noreferrer">
                    <p>
                        1671 West Katella Ave ste 240 Anaheim, CA 92802
                    </p>
                </a>
            </div>
            <div id="number">
                <p>714.949.9495</p>
            </div>
            <div id="social-icons">
                <span id="insta">
                    <a className="social-icon" href="https://www.instagram.com/dollfacepmu/?hl=en" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                </span>
                <span id="fb">
                    <a className="social-icon" href="https://www.shorturl.at/fhjwU" target="_blank" rel="noopener noreferrer"><Facebook /></a>
                </span>
                <span id="yelp">
                    <a className="social-icon" href="https://www.yelp.com/biz/dollface-permanent-makeup-anaheim" target="_blank" rel="noopener noreferrer"><Yelp /></a>
                </span>
            </div>
        </div>
    );
}

export default Footer;