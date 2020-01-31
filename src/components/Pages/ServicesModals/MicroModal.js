import React, { useState } from 'react'
import Modal from 'react-modal';

const MicroModal = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const onClick = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <button className="services-overview-button" onClick={onClick}>
            <div className="services-title">
                <h1>MICRO BLADING</h1>
            </div>
            <Modal
                appElement={document.getElementById('eyebrow-services')}
                isOpen={modalOpen}
                closeTimeoutMS={300}
            >
                <button className="modal-close-button" onClick={onClick}>X</button>
                <div className="modal-content">
                    <h1>MICRO BLADING</h1>
                    <p>Qui laborum nisi sunt esse in aliquip sint nulla qui est Lorem Lorem elit aliqua. Sint occaecat ut nostrud dolor. Reprehenderit deserunt do ad non veniam nisi aliqua magna. Do incididunt nostrud mollit est amet cupidatat. Deserunt deserunt aute proident amet sunt Lorem cupidatat laboris dolore dolor id esse eiusmod. Culpa et enim exercitation cillum. Lorem exercitation est ipsum aliqua laboris irure id.</p>
                </div>
            </Modal>
        </button>
    )
}

export default MicroModal