import React, { useState } from 'react';
import Button from './atoms/Button';
import Modal, { ModalBody, ModalFooter, ModalHeader } from './Modal';


//importing images
import expandIcon from '../Assets/Images/expand-arrow-svgrepo-com.svg';
import githubIcon from '../Assets/Images/github.png';
import webIcon from '../Assets/Images/internet-icon.png';

function Card(props) {

  const [showModal,setShowModal] = useState(false);

  let text = props.modalDescription;

  const textIteration = (text) => {
    let paragraph = text.split(".");
   
    return  paragraph.map((item) => <p>{item.concat(".")}</p>)
  }

  return (
    <>
      <div className="item" onClick={ () => setShowModal(true)}>
          <img src={props.image} alt="logo" />
          <h3>{props.title}</h3>
          <Button className="icon-btn" onClick={ () => setShowModal(true)}>
            <img src={expandIcon} alt="expand icon" />
          </Button>
      </div>
      <Modal show={showModal} setShow={setShowModal}  image={props.image}>
        <ModalHeader>
              <h2>{props.modalTitle}</h2>
        </ModalHeader>
        <ModalBody>
          { text ? textIteration(text)
          : <p> Blank </p>}
        </ModalBody>
        <ModalFooter>
          {
            props.webLink ? 
            <a href={props.webLink} rel='noreferrer noopener' target="_blank" onClick={ () => setShowModal(false)} ><img src={webIcon} alt="website icon link" /></a>
            : ""
          }
          {
            props.ghLink ? 
            <a href={props.ghLink}  rel='noreferrer noopener'  target="_blank"  onClick={ () => setShowModal(false)} ><img src={githubIcon} alt="github icon link" /></a>
            : ""
          }
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Card