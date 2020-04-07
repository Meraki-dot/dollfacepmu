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
            <div id="prep-container">
                <h1>PREP</h1>
                <ul className="left-list">
                    <li>
                        - Do not pick, tweeze, wax, thread, perform electrolysis before the procedure.
                    </li>
                    <li>
                        - Do not tan prior to the service, or have a sunburned face.
                    </li>
                    <li>
                        - Do not have any type of facial/injections prior to the procedure.
                    </li>
                    <li>
                        - Do not work out the day of the procedure.
                    </li>
                    <li>
                        - Do not take Fish Oil, Vitamin E, Asprin, Ibuprofen or pain relievers (they are blood thinners).
                    </li>
                    <li>
                        - Do not wax or tint your eyebrows prior to the procedure.
                    </li>
                    <li>
                        - Do not drink alcohol, tea, coffee, or energy drinks 24 - 48 hours before your appointment.
                    </li>
                </ul>
            </div>
            <div id="day-of-container">
                <h1>DAY OF</h1>
                <ul className="right-list">
                    <li>
                        - Please wear your make up when you arrive to your appointment, we will be taking plenty of before & after photos. Bring your makeup kit with you for touch ups, since I will be wiping your forehead often throughout the procedure.
                    </li>
                    <li>
                        - Please be mindful of our “No Guest(s)” Policy, as the environment is not ideal for children or waiting guests due to the lengthy procedure time which can be uncomfortable/distracting for your guest(s) and for myself as the artist.
                    </li>
                    <li>
                        - Please be on time to your appointment, be wary of any possible traffic on the way. Being late will result in loss of deposit.
                        Your ID will be required if this is your first visit to Dollface Permanent Makeup.
                    </li>
                    <li>
                        - Payments can be made via Cash, Venmo, Paypal, or (all major) credit cards, however, all card transactions will have an additional 3% transaction fee added to your total.
                    </li>
                    <li>
                        - Do not take Fish Oil, Vitamin E, Asprin, Ibuprofen or pain relievers (they are blood thinners).
                    </li>
                    <li>
                        - Do not wax or tint your eyebrows prior to the procedure.
                    </li>
                    <li>
                        - Do not drink alcohol, tea, coffee, or energy drinks 24 - 48 hours before your appointment.
                    </li>
                </ul>
            </div>
            <div id="after-container">
                <h1>AFTERCARE</h1>
                <p id="after-first-p">
                    All clients will be given an After Care Kit at the end of their sessions.
                    Kits will include detailed instructions, shower visors, and moisturizers that will help to properly care for the treated area(s).
                </p>
                <p className="sub-cat">
                    <strong>General rules of After Care (eyebrows):</strong>
                </p>
                <p>
                    Do not scratch, pick, or pull any of the scabs. Please allow the scabs to exfoliate naturally! It will generally taking anywhere from 7-14 days.
                    Do NOT partake in activities that will cause you to sweat during the healing process. Sweat will break down color pigments which will lead to poor retention, loss of color, and increase risk of an infection.
                    <br></br>
                    Avoid exposing your eyebrows to water, direct shower streams, saunas, steam, pools, salt water, and tubs.
                    Do not expose healing skin to the sun, tanning beds, pets, dust/dirt, smoke, or chemicals of any kind (ie: make up, toners, moisturizers, serums, etc) unless stated otherwise by the artist.
                    No Botox, Peels, Microdermabrasions, or Chemical Treatments for a minimum of 5 weeks.
                </p>
                <p className="sub-cat"><strong>What to Expect During the Healing Process:</strong></p>
                <p>
                    During the Healing & Peeling process (healing generally 7-14 days), your eyebrows will go through many phases as it sheds and develops your pigment.
                </p>
                <ul id="after-list">
                    <li>
                        - <strong>Day 1 - 3</strong> : After your procedure, your eyebrows will begin to oxidize, appearing darker, bolder, and possibly thicker. Minor swelling may occur but should disappear after the first 48 hours.
                    </li>
                    <li>
                        - <strong>Day 3 - 5</strong> : Your eyebrows may feel a little "tighter" or "harder" as your body is naturally absorbing and healing your brows by creating scabs. The tattoo may appear somewhat raised. *(Non-powdered) Oil Blotting Sheets may be used to gently absorb oil from your brows.
                    </li>
                    <li>
                        - <strong>Day 5 - 7 </strong>: Brows will begin to rapidly exfoliate and should shed evenly if left alone. The color underneath the exfoliating skin may appear very light but will resurface with more color as the weeks go by. Please be patient and give the color a couple weeks to develop.
                    </li>
                    <li>
                        - <strong>Day 8 - 14</strong> : The exfoliation process should be nearing an end. Continue to allow the eyebrows to naturally exfoliate and avoid pulling, picking, or scratching the scabs.
                    </li>
                </ul>
                <p>
                    * If you feel you are having a reaction or infection, please reach out to the artist and your physician. *
                </p>
                <p>
                    Please remember to book your Required Touch Up within 5-8 weeks of your initial session. Eyebrow Tattoos require 2 sessions to complete.
                </p>
            </div>
            <div id="prep-footer">
                <Footer />
            </div>
        </div>
    </Animated>
    );
}

export default Preparation;