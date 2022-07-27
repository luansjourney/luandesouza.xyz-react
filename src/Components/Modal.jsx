import { useRef, useEffect } from 'react';
import Button from './atoms/Button';
import closeIcon from '../Assets/Images/icons8-close.svg';


function Modal(props) {

    const modalRef = useRef();
    

    useEffect(() => {
      
        const clickOutside = (e) => {
            console.log(e.target);
            if (e.target === modalRef.current) {
                props.setShow(false);
            }
        };
        window.addEventListener('click', clickOutside);
      return () => {
        window.removeEventListener('click', clickOutside);
      };
    }, [props]);
    
    
    if (!props.show) return null
   

  return (
    <>
        <div  ref={modalRef}  className="modal__closer" />
        <div className="modal"  >
            <div className="modal__content"  >
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
    </>
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
    return <div className="modal__footer" >
        {props.children}
    </div>
}