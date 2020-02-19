import React, { useState } from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const MicroModal = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const onClick = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <button className="services-overview-button" onClick={onClick}>
            <div className="services-title">
                <h1>MICROBLADE</h1>
                <p><i>3 hours | $400</i></p>
            </div>
            <Modal
                appElement={document.getElementById('eyebrow-services')}
                isOpen={modalOpen}
                closeTimeoutMS={300}
            >
                <button className="modal-close-button" onClick={onClick}>X</button>
                <div className="modal-content">
                    <h1>MICROBLADE</h1>
                    <p className="duration-price"><i>3 hours | $400</i></p>
                    <br></br>
                    <p>Microblading is a technique that mimics realistic hair strokes and is ideal for individuals that need to "fill in" any sparse areas on the brows. This technique may cause scarring and has a risk of healing with migrating blurred strokes (This is due to the unique healing capabilities of every individual client).</p>
                    <ul>
                        <li>
                            This technique is only available to clients that have normal to dry skin types, with preexisting natural eyebrow hairs.
                        </li>
                        <li>
                            Microblading has the shortest retention of all techniques, generally lasting 6 months to 1 year before requiring an annual touch up.
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

export default MicroModal