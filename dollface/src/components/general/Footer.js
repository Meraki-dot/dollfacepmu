import React from 'react';
import './css/Footer.css';
import { ReactComponent as Instagram} from '../images/instagram.svg';
import { ReactComponent as Facebook} from '../images/facebook.svg';
import { ReactComponent as Yelp} from '../images/yelp.svg';

const Footer = () => {
    return ( 
        <div id="footer-wrapper">
            <span id="address">
                <a href="https://www.shorturl.at/lqRZ3" target="_blank" rel="noopener noreferrer">1671 West Katella Ave ste 240
                Anaheim, CA 92802</a>
            </span>
            <span id="number">
                714.949.9495
            </span>
            <span id="insta">
                <a href="https://www.instagram.com/dollfacepmu/?hl=en" target="_blank" rel="noopener noreferrer"><Instagram /></a>
            </span>
            <span id="fb">
                <a href="https://www.shorturl.at/fhjwU" target="_blank" rel="noopener noreferrer"><Facebook /></a>
            </span>
            <span id="yelp">
                <a href="https://www.yelp.com/biz/dollface-permanent-makeup-anaheim" target="_blank" rel="noopener noreferrer"><Yelp /></a>
            </span>
        </div>
     );
}
 
export default Footer;