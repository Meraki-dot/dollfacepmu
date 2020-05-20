import React, { useState, useEffect } from 'react';
import './css/TOA.css';
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import { Animated } from "react-animated-css";
import Burger from '../general/Burger/Burger';
import Menu from '../general/Menu/Menu';

const TOA = () => {

    const [open, isOpen] = useState(false)

    useEffect(() => {
        isOpen(false);
    }, []);

    return (
        <Animated animationIn="fadeIn" animationInDuration="500" isVisible={true}>
            <div id="TOA-container">
                <Navbar />
                <div className="burger-container">
                    <Burger className="burger-menu" open={open} isOpen={isOpen} />
                </div>
                <Menu open={open} isOpen={isOpen} />
                <div id="TOA-title">
                    <h1>
                        POLICIES
                    </h1>
                </div>
                <div id="TOA-content">
                    <p>
                        <br></br>
                        <strong>When booking for services you must provide clear photos via text message of the procedure area.</strong>&nbsp;
                        Photos must be free of any makeup, taken in good lighting and with no filters. When booking for
                        eyebrow procedures, you must inform Dollface Permanent Makeup if you had any previous eyebrow procedures done
                        prior to coming to Dollface Permanent Makeup. A non-refundable $50 deposit will be required to book
                        your appointment and will be added towards to the full amount of the selected service(s) that day.
                        Deposits must be made via Venmo or PayPal to "DollfacePMU" only.
                        <br></br>
                        <ul>
                            <li>
                                <strong>Venmo</strong>: <a href="https://venmo.com/DollfacePMU" target="_blank" rel="noopener noreferrer">DollfacePMU</a>
                            </li>
                            <li>
                                <strong>PayPal</strong>: <a href="https://www.paypal.me/dollfacepmu" target="_blank" rel="noopener noreferrer">https://www.paypal.me/dollfacepmu</a>
                                <br></br>
                                (Please list as Gift/Friend to avoid transfer fees)
                            </li>
                        </ul>
                        Remaining balances will be due the day of your
                        appointment and can be paid with cash, Venmo, PayPal or all major credit cards. Any card transactions will
                        have a 3% transaction fee applied.

                        <br></br>
                        Deposits are not refundable and will automatically forfeited if the following occur:
                        <ul>
                            <li>
                                Rescheduling within 1 week of your appointment date
                            </li>
                            <li>
                                Clients are allowed only 2 reschedules
                            </li>
                            <li>
                                If you are rescheduling for your Required Touch Up, the date must not exceed 6 months from you initial procedure
                            </li>
                            <li>
                                Please reschedule if you are feeling unwell. Clients who come to their appointment sick will be sent back home and their deposit forfeited
                            </li>
                            <li>
                                Being 20 minutes late or later to arrive for your
                                appointment. This will also automatically cancel your appointment
                            </li>
                            <li>
                                Failure in booking the correct service may result in a loss of deposit (eg: booking for Ombré <em>virgin brows</em> when client needs a Correction instead).
                            </li>
                            <li>
                                No shows.
                            </li>
                        </ul>
                        Please be mindful of our "No Guest(s)"
                        Policy, as the environment is not ideal for children or waiting guests due to the lengthy procedure time which
                        can be uncomfortable and distracting for your guest(s) and for myself as the artist. If an exception must be
                        made please contact me directly.
                        <div id="TOA-sub-title">
                            <h1>
                                DISCLAIMERS
                            </h1>
                        </div>
                        We will be working together to create a shape that fits to your unique facial structure.
                        Please be mindful that faces are naturally asymmetrical, we ask all clients carefully examine and
                        approve each predraw before starting all tatooting procedures. Results may vary dependent on the client's
                        skin, lifestyle, age, sun exposure, diet, health and/or aftercare. We are not responsible and/or liable for
                        any changes in shape or color once you leave our studio. Permanent makeup is an Art and results are never
                        guaranteed (if you require touchup(s) prices will be based accordingly). Photos, videos and audios taken
                        before, during or after your procedure will be owned by Dollface Permanent Makeup and may be used for
                        promotional/marketing services on our social media, websites or other business related platforms. Prices
                         and promotions are subject to change at any time. Since this is a service, all transactions will be final.
                         There will be no refunds. We reserve the right to refuse service to anyone.

                        <div id="TOA-sub-title">
                            <h1>
                                INELIGIBLITY
                            </h1>
                        </div>
                         Those who have the following will be ineligible for Permanent Makeup:
                         <ul>
                            <li>
                                Being under the age of 18 years old
                             </li>
                            <li>
                                Pregnant and nursing
                             </li>
                            <li>
                                Diabetic (insulin dependent)
                             </li>
                            <li>
                                Being on anticoagulants / blood thinners
                                (long term use of aspirin or ibuprofen)
                             </li>
                            <li>
                                Having and/or being at risk of autoimmune disease, blood disorders, heart conditions, prone to keloids and
                                post inflammatory hyper pigmentation
                             </li>
                            <li>
                                Using of Accutane / Retin A
                             </li>
                            <li>
                                History of poor reactions to prior tattoos
                             </li>
                            <li>
                                Having open wounds, rashes or any other skin conditions on the procedure area
                             </li>
                            <li>
                                Undergoing or scheduled for chemotherapy
                             </li>
                            <li>
                                Prone to fainting
                             </li>
                             <li>Allergies to pigments or topical anesthetics.</li>
                        </ul>
                        Your safety is my priority. You know your health better than anyone. If you have any medical issues that you feel
                         might be a contraindication, then we suggest you get clearance from your physicican prior to getting any procedures.
                </p>
                </div>
                <div id="toa-footer">
                    <Footer />
                </div>
            </div>
        </Animated>
    );
}

export default TOA;