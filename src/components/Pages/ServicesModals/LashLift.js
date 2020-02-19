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
                <p><i>Coming Soon!</i></p>
            </div>
            <Modal
                appElement={document.getElementById('eyebrow-services')}
                isOpen={modalOpen}
                closeTimeoutMS={300}
            >
                <button id="coming-soon" className="modal-close-button" onClick={onClick}>X</button>
                <div className="modal-content">
                    <h1>LASH LIFT</h1>
                    <p className="duration-price"><i>Coming Soon!</i></p>
                    <br></br>
                    <p>Qui laborum nisi sunt esse in aliquip sint nulla qui est Lorem Lorem elit aliqua. Sint occaecat ut nostrud dolor. Reprehenderit deserunt do ad non veniam nisi aliqua magna. Do incididunt nostrud mollit est amet cupidatat. Deserunt deserunt aute proident amet sunt Lorem cupidatat laboris dolore dolor id esse eiusmod. Culpa et enim exercitation cillum. Lorem exercitation est ipsum aliqua laboris irure id.</p>
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