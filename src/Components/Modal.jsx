import React from 'react'

import Button from './atoms/Button';
import closeIcon from '../Assets/Images/icons8-close.svg';


function Modal(props) {
   
  return (
    <div className={`modal ${props.show ? 'active' : ''}`} >
        <div className="modal__content" >
        {
            !props.hideCloseButton && 
            <Button className="close-btn" 
                onClick={ () => props.setShow(false)}>
                <img src={closeIcon} alt="close icon" />
            </Button>
        }
            {props.children}
            <img className='modalImage' src={props.image} alt="modal background" /> 
        </div>
    </div>
  )
}

export default Modal;

export const ModalHeader = props => {
    return <div className="modal__header">
        {props.children}
    </div>
}

export const ModalBody = props => {
    return <div className="modal__body">
        {props.children}
    </div>
}

export const ModalFooter = props => {
    return <div className="modal__footer">
        {props.children}
    </div>
}