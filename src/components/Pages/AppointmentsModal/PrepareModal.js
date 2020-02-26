import React, { useState } from 'react'
import Modal from 'react-modal';
import '../Modal.css'

const PrepareModal = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const onClick = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <button className="before-booking-modal-button" onClick={onClick}>
            <h2>PREPARE</h2>
            <div id="TOA-modal-container">
                <Modal
                    appElement={document.getElementById('eyebrow-services')}
                    isOpen={modalOpen}
                    closeTimeoutMS={300}
                >
                    <button className="modal-close-button" onClick={onClick}>X</button>
                    <div className="modal-content" id="first-prep-modal">
                        <h1 className="first-prep-modal-title">PREPARE</h1>
                        <div className="prep-modal-content-container">
                            <ul className="prep-modal-content" >
                                <li>
                                    Do not pick, tweeze, wax, thread, perform electrolysis before the procedure.
                                </li>
                                <li>
                                    Do not tan prior to the service, or have a sunburned face.
                                </li>
                                <li>
                                    Do not have any type of facial/injections prior to the procedure.
                                </li>
                                <li>
                                    Do not work out the day of the procedure.
                                </li>
                                <li>
                                    Do not take Fish Oil, Vitamin E, Asprin, Ibuprofen or pain relievers (they are blood thinners).
                                </li>
                                <li>
                                    Do not wax or tint your eyebrows prior to the procedure.
                                </li>
                                <li>
                                    Do not drink alcohol, tea, coffee, or energy drinks 24 - 48 hours before your appointment.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="title-style">ON THE DAY</h1>
                        </div>
                        <div className="prep-modal-content-container">
                            <ul className="prep-modal-content">
                                <li>
                                    Please wear your make up when you arrive to your appointment, we will be taking plenty of before & after photos. Bring your makeup kit with you for touch ups, since I will be wiping your forehead often throughout the procedure.
                                </li>
                                <li>
                                    Please be mindful of our “No Guest(s)” Policy, as the environment is not ideal for children or waiting guests due to the lengthy procedure time which can be uncomfortable/distracting for your guest(s) and for myself as the artist.
                                </li>
                                <li>
                                    Please be on time to your appointment, be wary of any possible traffic on the way. Being late will result in loss of deposit.
                                </li>
                                <li>
                                    Your ID will be required if this is your first visit to Dollface Permanent Makeup.
                                </li>
                                <li>
                                    Payments can be made via Cash, Venmo, Paypal, or (all major) credit cards, however, all card transactions will have an additional 3% transaction fee added to your total.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="title-style">AFTERCARE</h1>
                        </div>
                        <div className="prep-modal-content-container">
                            <ul className="prep-modal-content">
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
                            </ul>
                        </div>
                    </div>
                </Modal>
            </div>
        </button>
    )
}

export default PrepareModal