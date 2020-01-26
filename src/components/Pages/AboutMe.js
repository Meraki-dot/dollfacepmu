import React from 'react';
import './css/AboutMe.css';
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import { Animated } from "react-animated-css";

const AboutMe = () => {
    return (
        <Animated animationIn="fadeIn" animationInDuration="2000" isVisible={true}>
            <div id="about-me-container">
                <Navbar />
                <div id="about-me-title">
                    <h1>ABOUT ME</h1>
                </div>
                <div id="profile-container">
                    <img id="profile" src={require("../images/steph_profile.jpg")} alt="Profile of Stephanie Gang" />
                </div>
                <div id="about-me-content">
                    Stephanie Gang is a 29-year-old personal trainer who enjoys stealing candy from babies, walking and hockey. She is exciting and entertaining, but can also be very cowardly and a bit impatient.
    
        She is Korean who defines herself as straight. She started studying sports science at college but never finished the course.
    
        Physically, Stephanie is in pretty good shape. She is average-height with light skin, blonde hair and blue eyes.
    
        She grew up in a middle class neighbourhood. She was raised by her father, her mother having left when she was young.
    
        She is currently in a relationship with Jimmy Oskar Jackson. Jimmy is the same age as her and works as a student.
    
        Stephanie's best friend is a personal trainer called Ivan Rogers. They are inseparable. She also hangs around with Tomas Doherty and Charles Moore. They enjoy planking together.
            </div>
                <div id="about-me-footer">
                    <Footer />
                </div>
            </div>
        </Animated>
    );
}

export default AboutMe;