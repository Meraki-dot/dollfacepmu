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
                <p className="detail-button"><Arrow /></p>
                <p className='mobile-detail-button'>MORE DETAILS</p>
            </div>
            <Modal
                appElement={document.getElementById('eyebrow-services')}
                isOpen={modalOpen}
                closeTimeoutMS={300}
            >
                <button className="modal-close-button" onClick={onClick}>X</button>
                <div className="modal-content">
                    <h1>TOUCH UP</h1>
                    <p className="duration-price"><i>returning clients only</i></p>
                    <br></br>
                    <ul>
                        <li>
                            5 - 10 weeks: $50
                        </li>
                        <li>
                            10 weeks - 6 months: $100
                        </li>
                        <li>
                            6 months - 1 year : $200
                        </li>
                        <li>
                            1 - 2 years : $250
                        </li>
                        <li>
                            2+ years: Full Price
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