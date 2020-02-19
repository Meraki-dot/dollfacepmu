import React, { useState } from 'react'
import Modal from 'react-modal';
import '../Modal.css'

const PrepareModal = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const onClick = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <button className="before-booking-modal-button" onClick={onClick}>
            <h2>PREPARE</h2>
            <div id="TOA-container">
                <Modal
                    appElement={document.getElementById('eyebrow-services')}
                    isOpen={modalOpen}
                    closeTimeoutMS={300}
                >
                    <button className="modal-close-button" onClick={onClick}>X</button>
                    <div className="modal-content" id="first-prep-modal">
                        <h1 className="first-prep-modal-title">PREPARE</h1>
                        <div className="prep-modal-content-container">
                            <ul className="prep-modal-content" >
                                <li>
                                    Ex fugiat nulla esse occaecat commodo ea quis velit mollit aliqua velit.
                                </li>
                                <li>
                                    Ex fugiat nulla esse occaecat commodo ea quis velit mollit aliqua velit.
                                </li>
                                <li>
                                    Ex fugiat nulla esse occaecat commodo ea quis velit mollit aliqua velit.
                                </li>
                                <li>
                                    Ex fugiat nulla esse occaecat commodo ea quis velit mollit aliqua velit.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="title-style">WHAT TO EXPECT</h1>
                        </div>
                        <div className="prep-modal-content-container">
                            <ul className="prep-modal-content">
                                <li>
                                    Ex fugiat nulla esse occaecat commodo ea quis velit mlilit aliqua velit.
                                </li>
                                <li>
                                    Ex fugiat nulla esse occaecat commodo ea quis velit mlilit aliqua velit.
                                </li>
                                <li>
                                    Ex fugiat nulla esse occaecat commodo ea quis velit mlilit aliqua velit.
                                </li>
                                <li>
                                    Ex fugiat nulla esse occaecat commodo ea quis velit mlilit aliqua velit.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="title-style">AFTERCARE</h1>
                        </div>
                        <div className="prep-modal-content-container">
                            <ul className="prep-modal-content">
                                <li>
                                    Ex fugiat nulla esse occaecat commodo ea quis velit mlilit aliqua velit.
                                </li>
                                <li>
                                    Ex fugiat nulla esse occaecat commodo ea quis velit mlilit aliqua velit.
                                </li>
                                <li>
                                    Ex fugiat nulla esse occaecat commodo ea quis velit mlilit aliqua velit.
                                </li>
                                <li>
                                    Ex fugiat nulla esse occaecat commodo ea quis velit mlilit aliqua velit.
                                </li>
                            </ul>
                        </div>
                    </div>
                </Modal>
            </div>
        </button>
    )
}

export default PrepareModal