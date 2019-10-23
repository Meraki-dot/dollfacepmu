import React from 'react';
import './css/TOA.css';
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';
import { Animated } from "react-animated-css";


const TOA = () => {
    return (
        <Animated animationIn="fadeIn" animationInDuration="2000" isVisible={true}>
            <div id="TOA-container">
                <Navbar />
                <div id="TOA-title">
                    <h1>
                        TERMS OF AGREEMENT
                </h1>
                </div>
                <div id="TOA-content">
                    <p>
                        <br></br>
                        When booking for services you must provide clear photos via text message of the procedure area.
                        Photos must be free of any makeup, taken in good lighting and with no filters. When booking for
                        eyebrow procedures, you must inform Dollface Permanent Makeup if you had any previous eyebrow procedures done
                        prior to coming to Dollface Permanent Makeup. A non-refundable $50 deposit will be required to book
                        your appointment and will be added towards to the full amount of the selected service(s) that day.
                        Deposits must be made via Venmo to "DollfacePMU" only. Remaining balances will be due the day of your
                        appointment and can be paid with cash, Venmo or all major credit cards. Any card transactions will
                        have a 3% tranascation fee applied.
                    <br></br>
                    <br></br>
                        Deposits are not refundable and will automatically forfeited if the following occur: Canceling / Rescheduling
                        within one week of your appointment - rescheduling your touch up must not exceed 6 months of your initial
                        procedure and two reschedules are allowed per client -, being 20 minutes late or later to arrive for your
                        appointment will automatically cancel your appointment, and no shows. Please be mindful of our "No Guest(s)"
                        Policy, as the environment is not ideal for children or waiting guests due to the lengthy procedure time which
                        can be uncomfortable and distracting for your guest(s) and for myself as the artist. If an exception must be
                        made please contact me directly.
                    <br></br>
                    <br></br>
                        DISCLAIMER - We will be working together to create a shape that fits to your unique facial structure.
                        Please be mindful that all faces are not symmerical, so we ask that all clients carefully examine and
                        approve each predraw before starting all tatooting procedures. Results may vary dependent on the client's
                        skin, lifestyle, age, sun exposure, diet, health and/or aftercare. We are not responsible and/or liable for
                        any changes in shape or color once you leave our studio. Permanent makeup is an Art and results are never
                        guaranteed (if you require touchup(s) prices will be based accordingly). Photos, videos and audios taken
                        before, during or after your procedure will be owned by Dollface Permanent Makeup and may be used for
                        promotional/marketing services on our social media, websites or other business related platforms. Prices
                         and promotions are subject to change at any time. Since this is a service, all transactions will be final.
                         There will be no refunds. We reserve the right to refuse service to anyone.
                     <br></br>
                     <br></br>
                        CONTRAINDICATIONS - Those who have the following will not be eligible for Permanent Makeup: Being under the
                         age of 18 years old, pregnant and nursing, diabetic (insulin dependent), being on anticoagulants / blood thinners
                          (long term use of aspirin or ibuprofen), autoimmune disease, blood disorders, heart conditions, prone to keloids,
                          post inflammatory hyper pigmentation, use of Accutane / Retin A, poor reactions to prior tattoos, having open
                           wounds, rashes, or any skin conditions on the procedure area, undergoing or scheduled for chemotherapy, prone
                            to fainting and allergies to pigments or topical anesthetics.
                         <br></br>
                         <br></br>
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