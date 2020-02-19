import React, { useState } from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const Correction = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const onClick = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <button onClick={onClick}>
            <div className="services-title">
                <h1>CORRECTION/<br></br>COVER-UP</h1>
                <p><i>3 - 4 hours | +$50 on top of selected service</i></p>
            </div>
            <Modal
                appElement={document.getElementById('eyebrow-services')}
                isOpen={modalOpen}
                closeTimeoutMS={300}
            >
                <button className="modal-close-button" onClick={onClick}>X</button>
                <div className="modal-content">
                    <h1>CORRECTION / COVER-UP</h1>
                    <p className="duration-price"><i>3 - 4 hours | +$50 on top of selected service</i></p>
                    <br></br>
                    <p>A hybrid of Ombre with Microbladed fronts.</p>
                    <p>For any clients that have had previous eyebrow tattoos, not initially performed by Dollface Permanent Makeup.</p>
                    <p>This service is to color correct, refine, cover-up, and/or add symmetry to your preexisting tattoo.</p>
                    <p><strong>Please be mindful that not all tattoos can be corrected, and all corrections require the client to submit a photo of their bare brows before booking their appointment.</strong></p>
                    <br></br>
                    <div className="modal-book-button">
                        <Link className="modal-book" to="/appointments">Book Now</Link>
                    </div>
                </div>
            </Modal>
        </button>
    )
}

export default Correction;