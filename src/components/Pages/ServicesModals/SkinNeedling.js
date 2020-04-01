import React, { useState } from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../images/arrow.svg';

const SkinNeedling = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const onClick = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <button id="coming-soon" onClick={onClick}>
            <div className="services-title">
                <p className="detail-button"><Arrow /></p>
                <p className='mobile-detail-button'>MORE DETAILS</p>
                <p><i>Coming Soon!</i></p>
            </div>
            <Modal
                appElement={document.getElementById('eyebrow-services')}
                isOpen={modalOpen}
                closeTimeoutMS={300}
            >
                <button className="modal-close-button" onClick={onClick}>X</button>
                <div className="modal-content">
                    <h1>SKIN NEEDLING</h1>
                    <p className="duration-price"><i>Coming Soon!</i></p>
                    <br></br>
                    <p></p>
                    <br></br>
                    <div className="modal-book-button">
                        <Link className="modal-book" to="/appointments">Book Now</Link>
                    </div>
                </div>
            </Modal>
        </button>
    )
}

export default SkinNeedling