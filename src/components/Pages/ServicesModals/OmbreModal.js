import React, { useState } from 'react'
import Modal from 'react-modal';
import '../Modal.css'
import { Link } from 'react-router-dom';

const OmbreModal = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const onClick = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <button className="services-overview-button" onClick={onClick}>
            <div className="services-title">
                <h1>OMBRE</h1>
                <p><i>3 - 4 hours | $400</i></p>
            </div>
            <Modal
                appElement={document.getElementById('eyebrow-services')}
                isOpen={modalOpen}
                closeTimeoutMS={300}
            >
                <button className="modal-close-button" onClick={onClick}>X</button> {/* Needs to render on mobile side too */}
                <div className="modal-content">
                    <h1>OMBRE</h1>
                    <p className="duration-price"><i>3 - 4 hours | $400</i></p>
                    <br></br>
                    <p>The "Ombre Powder" is a technique that gradually shades from lightly colored fronts into a darker tail. This look can be customized to replicate a more saturated "makeup look," or it can be as subtle as a naturally tinted brow.</p>
                    <p>This service is the signature technique at Dollface Permanent Makeup.</p>
                    <ul>
                        <li>
                            Suitable for all skin types (oily, dry, normal, combination).
                        </li>
                        <li>
                            Generally retains 1-3 years before requiring an annual touch up.
                        </li>
                    </ul>
                    <br></br>
                    <div className="modal-book-button">
                        <Link className="modal-book" to="/appointments">Book Now</Link>
                    </div>
                </div>
            </Modal>
        </button>
    )
}

export default OmbreModal