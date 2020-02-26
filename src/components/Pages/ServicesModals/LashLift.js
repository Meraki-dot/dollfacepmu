import React, { useState } from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const LashLift = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const onClick = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <button onClick={onClick}>
            <div className="services-title">
                <h1>LASH LIFT</h1>
                <p><i>1 - 1.5 hours | $80</i></p>
            </div>
            <Modal
                appElement={document.getElementById('eyebrow-services')}
                isOpen={modalOpen}
                closeTimeoutMS={300}
            >
                <button id="coming-soon" className="modal-close-button" onClick={onClick}>X</button>
                <div className="modal-content">
                    <h1>LASH LIFT</h1>
                    <p className="duration-price"><i>1 - 1.5 hours | $80</i></p>
                    <br></br>
                    <p>Lash Lift is a perming method that keep your natural lashes curled without the use of mascara or eyelash curlers. It helps to lift & curl any straight/ downward facing lashes to showcase a natural doll-like look, effortlessly.</p>
                    <br></br>
                    <div className="modal-book-button">
                        <Link className="modal-book" to="/appointments">Book Now</Link>
                    </div>
                </div>
            </Modal>
        </button>
    )
}

export default LashLift