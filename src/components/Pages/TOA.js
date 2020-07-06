import React, { useState, useEffect } from "react";
import "./css/TOA.css";
import Navbar from "../general/Navbar";
import Footer from "../general/Footer";
import { Animated } from "react-animated-css";
import Burger from "../general/Burger/Burger";
import Menu from "../general/Menu/Menu";

const TOA = () => {
  const [open, isOpen] = useState(false);

  useEffect(() => {
    isOpen(false);
  }, []);

  useEffect(() => {
    document.getElementById("TOA-container").scrollIntoView();
    document.body.scrollTop = 0;
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
          <h1>POLICIES</h1>
        </div>
        <div id="TOA-content">
          <p>
            <br></br>
            <strong>
              Prior to booking, clients must provide clear photos of procedure
              area by text (714) 949-9495.
            </strong>
            <ul>
              <li>Photos must be free of makeup and/or filters</li>
              <li>Clear and taken in good lighting</li>
              <li>
                Be taken at multiple angles (left, right, straight forward)
              </li>
              <li>
                Dollface Permanent Makeup must also be informed if any prior
                work has been done on the area.
              </li>
            </ul>
            <ul>
              <li>
                A non-refundable deposit will be required to book your
                appointment and will be added towards to the full amount of the
                selected service(s) that day
              </li>
              <ul>
                <li>
                  <strong>Venmo</strong>:{" "}
                  <a
                    href="https://venmo.com/DollfacePMU"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DollfacePMU
                  </a>
                </li>
                <li>
                  <strong>PayPal</strong>:{" "}
                  <a
                    href="https://www.paypal.me/dollfacepmu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.paypal.me/dollfacepmu
                  </a>
                  <br></br>
                  (Please list as Gift/Friend to avoid transfer fees)
                </li>
              </ul>
            </ul>
            Remaining balances will be due the day of your appointment and can
            be paid with cash, Venmo, PayPal or all major credit cards. Any card
            transactions will have a 3% transaction fee applied.
            <br></br>
            <br></br>
            <strong>
              Deposits are not refundable and will automatically be forfeited if
              the following occur:
            </strong>
            <ul>
              <li>
                Clients who come in to their appointment sick will be sent home,
                their deposit forfeited, and appointment canceled. Please
                reschedule if you are feeling unwell.
              </li>
              <li>Clients are allowed only 2 reschedules</li>
              <li>
                If you are rescheduling for your Required Touch Up, the date
                must not exceed 6 months from you initial procedure.
              </li>
              <li>
                If you are more than 20 minutes late to your appointment, your
                appointment will automatically be cancelled for the day and your
                deposit will be forfeited. This rule will be strictly enforced.
                (Please consider traffic or any other problems that may occur.
                Tardiness leads to pushing back all of the day's appointments,
                and it is unfair to other clients. Please be considerate of
                everyone’s time.)
              </li>
              <li>
                Failure in booking the correct service may result in a loss of
                deposit (eg: booking for Ombré <em>virgin brows</em> when client
                needs a Correction instead).
              </li>
              <li>
                Clients who NO SHOW, or cancel within the same day, will
                automatically have their deposit forfeited, charged the full
                amount of the services booked, and will not be allowed to
                reschedule again.
              </li>
            </ul>
            Please be mindful of our "No Guest(s)" Policy, as the environment is
            not ideal for children or waiting guests due to the lengthy
            procedure time which can be uncomfortable and distracting for your
            guest(s) and for myself as the artist. If an exception must be made
            please contact me directly.
            <div id="TOA-sub-title">
              <h1>DISCLAIMERS</h1>
            </div>
            We will be working together to create a shape that fits your unique
            facial structure. Please be mindful that faces are naturally
            asymmetrical, we ask all clients to carefully examine and approve
            each predraw before starting all tattooing procedures. Results may
            vary depending on the client's skin, lifestyle, age, sun exposure,
            diet, health and/or compliance with precare and aftercare. We are
            not responsible and/or liable for any changes in shape or color once
            you leave our studio. Although we give our best efforts to provide
            you with optimal results, there are many factors that contribute to
            the overall look, healing process, and retention of tattoos, which
            can result in a less than desirable outcome. It is crucial for
            clients to follow Pre-Care and After Care Instructions to help
            produce the best results possible. Permanent makeup is an art and
            results are never guaranteed (if you require additional touchup(s),
            prices will be based accordingly). Photos, videos and audios taken
            before, during or after your procedure will be owned by Dollface
            Permanent Makeup and may be used for promotional/marketing services
            on our social media, websites or other business related platforms.
            Prices and promotions are subject to change at any time. Since this
            is a service, all transactions will be final. There will be no
            refunds. We reserve the right to refuse service to anyone.
            <div id="TOA-sub-title">
              <h1>INELIGIBLITY</h1>
            </div>
            Those who have the following will be ineligible for Permanent
            Makeup:
            <ul>
              <li>Under the age of 18</li>
              <li> Pregnant or nursing</li>
              <li>Diabetic (insulin dependent)</li>
              <li>
                Actively on anticoagulants, blood thinners, or long term use of
                aspirin, tylenol, and/ or ibuprofen.
              </li>
              <li>Autoimmune Disease</li>
              <li>Glaucoma</li>
              <li>Hyper pigmentation or hypo pigmentation</li>
              <li>Glaucoma</li>
              <li>Blood disorders</li>
              <li>Heart conditions</li>
              <li>Prone to keloids</li>
              <li>Allergies to Lidocaine or Epinephrine</li>
              <li>
                Botox/Facials/Peels/Microdermabrasions/Lasers within 1 month of
                procedure
              </li>
              <li>Post inflammatory hyperpigmentation</li>
              <li>Use of Accutane / Retin A within the last year</li>
              <li>Allergies to metal and/or color</li>
              <li>Poor reactions to prior tattoos</li>
              <li>
                Open wounds, rashes, and/or any skin conditions on the procedure
                area
              </li>
              <li>Undergoing / scheduled for Chemo</li>
              <li>Epilepsy / Prone to fainting</li>
              <li>Allergies to pigments or topical anesthetics</li>
              <li>Lupus</li>
              <li>Clients who have undergone organ transplant</li>
              <li>
                Clients with skin conditions (Eczema, dermatitis, rosacea,
                psoriasis, etc)
              </li>
            </ul>
            Ultimately your safety is my priority. If you have any medical
            issues that you feel might be a contraindication, then we suggest
            you receive clearance from your health care provider / physician
            prior to receiving any procedures. A Doctor's note will need to be
            provided.
          </p>
        </div>
        <div id="toa-footer">
          <Footer />
        </div>
      </div>
    </Animated>
  );
};

export default TOA;
