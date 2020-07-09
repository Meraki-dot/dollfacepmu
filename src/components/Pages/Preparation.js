import React, { useState, useEffect } from "react";
import Navbar from "../general/Navbar";
import "./css/Preparation.css";
import Footer from "../general/Footer";
import { Animated } from "react-animated-css";
import Burger from "../general/Burger/Burger";
import Menu from "../general/Menu/Menu";

const Preparation = () => {
  const [open, isOpen] = useState(false);

  useEffect(() => {
    isOpen(false);
  }, []);

  useEffect(() => {
    document.getElementById("preparation-container").scrollIntoView();
    document.body.scrollTop = 0;
  }, []);

  return (
    <Animated animationIn="fadeIn" animationInDuration="500" isVisible={true}>
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
              Please do not forget to submit photos of your bare brows to (714)
              949-9495 if you have not already done so. Failure to comply will
              result in a forfeit of deposit and cancelation of appointment.
            </li>
            <li>
              Once your appointment has been booked, clients will receive an
              email a few days prior to the appointment that contains important
              instructions and details. It is the client's responsibility to
              read it in its entirety.
            </li>
            <li>
              If you are feeling sick or unwell, please notify us immediately.
            </li>
            <li>
              Do not pick, tweeze, wax, thread, perform electrolysis before the
              procedure.
            </li>
            <li>Do not tan prior to the service, or have a sunburned face.</li>
            <li>
              Avoid any types of facials/botox/injections one month prior to
              your appointment.
            </li>
            <li>Do not work out the day of the procedure.</li>
            <li>
              Do not take Fish Oil, Vitamin E, Asprin, Ibuprofen or pain
              relievers (they are blood thinners).
            </li>
            <li>Do not wax or tint your eyebrows prior to the procedure.</li>
            <li>
              Do not drink alcohol, tea, coffee, or energy drinks 24 - 48 hours
              before your appointment.
            </li>
          </ul>
        </div>
        <div id="day-of-container">
          <h1>DAY OF</h1>
          <ul className="right-list">
            <li>
              <strong>
                Please bring a valid form on ID if this is your first visit to
                Dollface Permanent Makeup
              </strong>
            </li>
            <li>
              Please wear your makeup when you come for your appointment, as we
              will be taking plenty of Before & After photos. This helps provide
              an idea (for your artist) of how you like to style your eyebrows.
              It is advised to bring your makeup kit with you, as your artist
              will be wiping your brows/forehead often, it may be beneficial to
              "touch up" your makeup prior to getting your After photos taken.
            </li>
            <li>
              Payments can be made via Cash, Venmo, Paypal, Zelle or (all major)
              credit cards, however, all card transactions will have an
              additional 3% transaction fee added to your total.
            </li>
            <li>
              Please arrive in a timely manner to your appointment. Be wary of
              possible traffic on the way, being late will result in a loss of
              deposit, and will require a reschedule. (Policies can be viewed on
              our website).
            </li>
            <li>
              Please be mindful of our "No Guest(s)" Policy, as the environment
              is not ideal for children, pets, or waiting guests due to the
              lengthy procedure time, which can be uncomfortable/distracting for
              your guest(s) and for your artist.
            </li>
            <li>
              <strong>
                Clients will be required to fill out Health / Consent forms
                prior to every procedure. If a translator is required, it is the
                client's responsibility to bring a translator who can help
                assist in interpreting the forms (Please inform your artist
                ahead of time if you must bring a guest).
              </strong>
            </li>
            <h2>
              <strong>DUE TO ADDITIONAL SAFETY MEASURES</strong>
            </h2>
            <li>
              Clients are required to wear a brand new mask before entering the
              studio. If you do not have a mask, a one time use mask will be
              provided for you.
            </li>
            <li>
              All clients will be subject to a temperature check as soon as they
              walk into the studio, if there is a fever or any symptoms of
              illness, the appointment will be cancelled, the deposit will be
              forfeited, and a new appoitnment will need to be made.
            </li>
            <li>
              We ask our clients to please wait in the car until called upon. We
              will be reaching out to you by Text Message when we are ready to
              service you.
            </li>
            <li>
              No additional guests will be allowed, unless it is absolutely
              necessary to have a translator to assist the client in filling out
              the required paperwork. After the paperwork is complete, the guest
              will need to leave the studio to minimize the number of bodies
              within the studio.
            </li>
            <li>
              Cellphones, purses and other accessories must be kept away from
              the procedure area, and must not be handled during the session.
              Please keep personal items to just the essentials. No food or
              drinks.
            </li>
          </ul>
        </div>
        <div id="after-container">
          <h1>AFTERCARE</h1>
          <p id="after-first-p">
            All clients will be given an After Care Kit at the end of their
            sessions. Kits will include detailed instructions, shower visors,
            and moisturizers that will help to properly care for the treated
            area(s).
          </p>
          <p className="sub-cat">
            <strong>General Rules of After Care (eyebrows):</strong>
          </p>
          <ul id="general-after-care">
            <li>
              Do not scratch, pick, or pull any of the scabs. Please allow the
              scabs to exfoliate naturally!
            </li>
            <li>
              Do not partake in activities that will cause you to sweat during
              the healing process. Sweat will break down color pigments which
              will lead to poor retention, loss of color, and increase risk of
              an infection.
            </li>
            <li>
              Avoid exposing your eyebrows to water, direct shower streams,
              saunas, steam, pools, salt water, and tubs.
            </li>
            <li>
              Do not expose healing skin to the sun, tanning beds, pets,
              dust/dirt, smoke, or chemicals of any kind (ie: make up, toners,
              moisturizers, serums, etc) unless stated otherwise by the artist.
            </li>
            <li>
              No Botox, Peels, Microdermabrasions, or Chemical Treatments for a
              minimum of 5 weeks.
            </li>
          </ul>
          <p className="sub-cat">
            <strong>What to Expect During the Healing Process:</strong>
          </p>
          <p>
            During the Healing & Peeling process (healing generally 7-14 days),
            your eyebrows will go through many phases as it sheds and develops
            your pigment.
          </p>
          <ul id="after-list">
            <li>
              <strong>Day 1 - 3</strong> : After your procedure, your eyebrows
              will begin to oxidize, appearing darker, bolder, and possibly
              thicker. Minor swelling may occur but should disappear after the
              first 48 hours.
            </li>
            <li>
              <strong>Day 3 - 5</strong> : Your eyebrows may feel a little
              "tighter" or "harder" as your body is naturally absorbing and
              healing your brows by creating scabs. The tattoo may appear
              somewhat raised. *(Non-powdered) Oil Blotting Sheets may be used
              to gently absorb oil from your brows.
            </li>
            <li>
              <strong>Day 5 - 7 </strong>: Brows will begin to rapidly exfoliate
              and should shed evenly if left alone. The color underneath the
              exfoliating skin may appear very light but will resurface with
              more color as the weeks go by. Please be patient and give the
              color a couple weeks to develop.
            </li>
            <li>
              <strong>Day 8 - 14</strong> : The exfoliation process should be
              nearing an end. Continue to allow the eyebrows to naturally
              exfoliate and avoid pulling, picking, or scratching the scabs.
            </li>
          </ul>
          <p>
            * If you feel you are having a reaction or infection, please reach
            out to the artist and your physician. *
          </p>
          <p>
            Please remember to book your Required Touch Up within 5-8 weeks of
            your initial session. Eyebrow Tattoos require 2 sessions to
            complete.
          </p>
        </div>
        <div id="prep-footer">
          <Footer />
        </div>
      </div>
    </Animated>
  );
};

export default Preparation;
