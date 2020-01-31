import React, { useState, useEffect } from 'react';
import Navbar from '../general/Navbar';
import './css/Preparation.css';
import Footer from '../general/Footer';
import { Animated } from "react-animated-css";
import Burger from '../general/Burger/Burger';
import Menu from '../general/Menu/Menu';

const Preparation = () => {

    const [open, isOpen] = useState(false)

    useEffect(() => {
        isOpen(false);
    }, []);

    return (<Animated animationIn="fadeIn" animationInDuration="2000" isVisible={true}>
        <div id="preparation-container">
            <Navbar />
            <div className="burger-container">
                <Burger className="burger-menu" open={open} isOpen={isOpen} />
            </div>
            <Menu open={open} isOpen={isOpen} />
            <div id="page-title-1">
                <h1>PREPARATION</h1>
            </div>
            <div className="prep-row" id="prep-row-1">
                <ol>
                    <li>
                        Ex fugiat nulla esse occaecat commodo ea quis velit mollit aliqua velit.
                    </li>
                    <li>
                        Ex fugiat nulla esse occaecat commodo ea quis velit mollit aliqua velit.
                    </li>
                    <li>
                        Ex fugiat nulla esse occaecat commodo ea quis velit mollit aliqua velit.
                    </li>
                    <li>
                        Ex fugiat nulla esse occaecat commodo ea quis velit mollit aliqua velit.
                    </li>
                </ol>
                <img id="first-image" src={require("../images/dollface3.JPG")} alt="undone eyebrows" />
            </div>
            <div id="page-title-2">
                <h1>WHAT TO EXPECT</h1>
            </div>
            <div className="prep-row" id="prep-row-2">
                <ol>
                    <li>
                        Ex fugiat nulla esse occaecat commodo ea quis velit mlilit aliqua velit.
                    </li>
                    <li>
                        Ex fugiat nulla esse occaecat commodo ea quis velit mlilit aliqua velit.
                    </li>
                    <li>
                        Ex fugiat nulla esse occaecat commodo ea quis velit mlilit aliqua velit.
                    </li>
                    <li>
                        Ex fugiat nulla esse occaecat commodo ea quis velit mlilit aliqua velit.
                    </li>
                </ol>
                <img id="second-image" src={require("../images/dollface2.JPG")} alt="done eyebrows" />
            </div>
            <div id="page-title-3">
                <h1>AFTERCARE</h1>
            </div>
            <div className="prep-row" id="prep-row-3">
                <ol>
                    <li>
                        Ex fugiat nulla esse occaecat commodo ea quis velit mlilit aliqua velit.
                    </li>
                    <li>
                        Ex fugiat nulla esse occaecat commodo ea quis velit mlilit aliqua velit.
                    </li>
                    <li>
                        Ex fugiat nulla esse occaecat commodo ea quis velit mlilit aliqua velit.
                    </li>
                    <li>
                        Ex fugiat nulla esse occaecat commodo ea quis velit mlilit aliqua velit.
                    </li>
                </ol>
                <img id="third-image" src={require("../images/dollface1.JPG")} alt="woman" />
            </div>
            <div id="prep-footer">
                <Footer />
            </div>
        </div>
    </Animated>
    );
}

export default Preparation;