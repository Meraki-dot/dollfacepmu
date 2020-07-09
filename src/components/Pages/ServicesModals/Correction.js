import React, { useState } from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../images/arrow.svg';

const Correction = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const onClick = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <button className="services-overview-button" onClick={onClick}>
            <div className="services-title">
                <p className="detail-button"><Arrow/></p>
                <p className='mobile-detail-button'>MORE DETAILS</p>
            </div>
            <Modal
                appElement={document.getElementById('eyebrow-services')}
                isOpen={modalOpen}
                closeTimeoutMS={300}
            >
                <button className="modal-close-button" onClick={onClick}>X</button>
                <div className="modal-content">
                    <h1>CORRECTION / COVER-UP</h1>
                    <p className="duration-price"><i>3 hours | $550</i></p>
                    <br></br>
                    <p>For any clients that have had previous eyebrow tattoos, not initially performed by Dollface Permanent Makeup.</p>
                    <p>This service is to color correct, refine, cover-up, and/or add symmetry to your preexisting tattoo.</p>
                    <p>
                    Please send clear photos of your bare brows to: <strong><a className="modal-link" href="sms:7149499495">714-949-9495</a></strong>. Failure to inform your technician of previous eyebrow tattoos can result in a loss of deposit if the tattoo cannot be worked on / covered up.
                    </p>
                    <p><strong>Please be mindful that not all tattoos can be corrected, and all corrections require the client to submit a photo of their bare brows before booking their appointment.
                    </strong></p>
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