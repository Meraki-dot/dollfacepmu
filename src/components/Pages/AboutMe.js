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
                        <p>Hi! My name's Stephanie, and I'm the owner and artist of Dollface Permanent Makeup.</p>
                        <p>You know that friend that is super creative,(the total arsty-fartsy type) but is also a major perfectionist? Yep. That’s me. I have always had an obsession with minor details, and I really try to bring that passion for perfection to the front line of my work. I have gained experience in numerous forms of art (painting, drawing, digital media, photography, culinary arts, crafts, and design), and some of my work has been featured in magazines, newspapers, and local galleries! Creativity has always been a huge part of my life, and honestly, I believe that it makes life more beautiful and fun.</p>
                        <p>I first stepped into the tattoo-beauty industry in 2017, where I learned and refined my tattoo skills by shadowing various Masters and earning multiple certifications along the way. My biggest joy in this industry is seeing the happy faces of my satisfied clients. I love knowing that I helped make my clients feel as beautiful as I know they are. </p>
                        <p>
                        Equipped with my pre-existing knowledge of color and design, I incorporate color theory, attention to detail, and an eye for aesthetics into my business to help all of my clients look and feel their truest beauty everyday.
                        </p>
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