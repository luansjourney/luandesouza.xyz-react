import React, { useState } from 'react';
import Button from './atoms/Button';
import Modal, { ModalBody, ModalFooter, ModalHeader } from './Modal';

//importing images
import eyeIcon from '../Assets/Images/eye-solid.svg';

function Card(props) {

  const [showModal,setShowModal] = useState(false);

  return (
    <>
      <div className="item" onClick={ () => setShowModal(true)}>
          <img src={props.image} alt="logo" />
          <h3>{props.title}</h3>
          <Button className="icon-btn" onClick={ () => setShowModal(true)}><img src={eyeIcon} alt="eye icon" /></Button>
      </div>
      <Modal show={showModal} setShow={setShowModal}  image={props.image}>
        <ModalHeader>
              <h2>{props.modalTitle}</h2>
        </ModalHeader>
        <ModalBody>
          <p>{props.modalDescription}</p>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Card