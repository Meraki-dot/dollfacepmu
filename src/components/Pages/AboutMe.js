import React, { useState, useEffect } from "react";
import "./css/AboutMe.css";
import Navbar from "../general/Navbar";
import Footer from "../general/Footer";
import { Animated } from "react-animated-css";
import Burger from "../general/Burger/Burger";
import Menu from "../general/Menu/Menu";

const AboutMe = () => {
  const [open, isOpen] = useState(false);

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
          <img
            id="profile"
            src={require("../images/steph_profile.JPG")}
            alt="Dollface Permanent Makeup owner Stephanie smiling."
          />
          <div id="about-me-content">
            <br></br>
            <p>
              Founder and artist of Dollface Permanent Makeup. A licensed
              Cosmetic Tattoo Artist since 20017. Certified 5 times by well
              respected Masters within the industry, Stephanie advances her
              artistry through deliberate and constant practice, as she's eager
              to always add to her evergrowing education. With a sharp eye for
              details and design, she continues to refine her techniques to
              provide the finest services for her clients.
            </p>
          </div>
        </div>
        <div id="about-me-footer">
          <Footer />
        </div>
      </div>
    </Animated>
  );
};

export default AboutMe;
