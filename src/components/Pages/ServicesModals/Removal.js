import React, { useState } from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../images/arrow.svg';

const Removal = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const onClick = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <button className="services-overview-button" onClick={onClick}>
            <div className="services-title">
                <p className="detail-button"><Arrow/></p>
            </div>
            <Modal
                appElement={document.getElementById('eyebrow-services')}
                isOpen={modalOpen}
                closeTimeoutMS={300}
            >
                <button className="modal-close-button" onClick={onClick}>X</button>
                <div className="modal-content">
                    <h1>REMOVAL / LIGHTENING</h1>
                    <p className="duration-price"><i>1 - 2 hours | $175</i></p>
                    <br></br>
                    <p>For clients with eyebrow tattoos that are too dark or botched to correct, this service is an alternative solution compared to laser removals.</p>
                    <p>Using Li-FT (a safe, high content salt and fruit seed extraction solution), anesthetics, and our specialized needles, we penetrate the unwanted pigment and activate the body's natural immune system to create scabs. These scabs assist in pulling out pigment from the skin and can help lighten the overall look of the old tattoo.</p>
                    <ul>
                        <li>
                            Depending on the saturation and design of the unwanted tattoo, multiple sessions may be required to lighten the area enough before creating a new eyebrow design.
                        </li>
                        <li>
                            If multiple sessions are required, there must be a minimum of a 10 week waiting period between treatments.
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

export default Removal