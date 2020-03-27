import React, { useState } from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../images/arrow.svg';

const LipBlush = () => {

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
                    <h1>LIP BLUSH</h1>
                    <p className="duration-price"><i>3 - 4 hours | $250</i></p>
                    <p><i>coming soon!</i></p>
                    <br></br>
                    <p>By adding a soft splash of color, this technique can help enhance the natural "pinkness" of your lips.  Our lip tattoos are completely borderless, meaning, <strong>that this service is not a "lip liner,"</strong> but a very natural blush of color for the entire lips.</p>
                    <p>This service is excellent for clients who need:</p>
                    <ul>
                        <li>
                            To refine the natural shape of their lips.
                        </li>
                        <li>
                            Add color to pale lips.
                        </li>
                        <li>
                            Add warmth to cool-toned lips.
                        </li>
                        <li>
                            Generally retains 1-2 years before requiring an annual touch up.
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

export default LipBlush