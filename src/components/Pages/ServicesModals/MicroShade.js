import React, { useState } from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../images/arrow.svg';

const MicroShade = () => {

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
                    <h1>MICROSHADE</h1>
                    <p className="duration-price"><i>3 - 4 hours | $450</i></p>
                    <br></br>
                    <p>A hybrid of Ombre with Microbladed fronts.</p>
                    <ul>
                        <li>
                            This technique is recommended for clients with normal to dry skin, with preexisting hair in the front of the eyebrows.
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

export default MicroShade