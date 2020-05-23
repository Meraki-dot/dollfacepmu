import React, {useState, useEffect} from 'react';
import './css/AboutMe.css';
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import { Animated } from "react-animated-css";
import Burger from '../general/Burger/Burger';
import Menu from '../general/Menu/Menu';

const AboutMe = () => {

    const [open, isOpen] = useState(false)

    useEffect(() => {
        isOpen(false);
    }, []);

    return (
        <Animated animationIn="fadeIn" animationInDuration="500" isVisible={true}>
            <div id="about-me-container">
                <Navbar />
                <div className="burger-container">
                    <Burger className="burger-menu" open={open} isOpen={isOpen} />
                </div>
                <Menu open={open} isOpen={isOpen} />
                <div id="about-me-title">
                    <h1>ABOUT THE ARTIST</h1>
                </div>
                <div id="profile-container">
                    <img id="profile" src={require("../images/steph_profile.JPG")} alt="Profile of Stephanie Gang" />
                    <div id="about-me-content">
                        <br></br>
                        <p>Stephanie G. is the owner and artist of Dollface Permanent Makeup.</p>
                        <p>Her mother swears that Stephanie was born with a crayon in her hand, since she’s always been drawn to any form of Art since she was a little girl.</p>
                        <p>With an extensive imagination, she has gained experience in numerous forms of art (painting, drawing, digital media, photography, culinary, crafts, and design). Her work has been featured in magazines, newspapers, and local galleries. Creativity has always been a huge part of her life.</p>
                        <p>Stephanie first stepped into the tattoo-beauty industry in 2017, where she learned and refined her tattoo skills by shadowing various Masters within the industry, earning her multiple certifications.</p>
                        <p>Equipped with her preexisting knowledge of color and design, she incorporates color theory, attention to detail and an eye for aesthetics into her business to help her clients look and feel their truest beauty everyday.</p>
                </div>
            </div>
                <div id="about-me-footer">
                    <Footer />
                </div>
            </div>
        </Animated>
    );
}

export default AboutMe;