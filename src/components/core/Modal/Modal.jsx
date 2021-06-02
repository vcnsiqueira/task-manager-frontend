import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Backdrop from '../Backdrop';
import { Close } from '../../icons';
import { StyledModal, ModalHeader, ModalContent, ModalFooter } from './styled/Modal.styled';

const ModalOverlay = ({ title, onSubmit, close, children, footer }) => {

    const content = (
        <StyledModal>
            <ModalHeader>
                <h2>{title}</h2>
                <span onClick={close}>
                    <Close width={20} />
                </span>
            </ModalHeader>
            {title &&
                <hr style={{width: '65%', border: '0.8px solid #C4C4C4'}}/>
            }
            <form onSubmit={onSubmit ? onSubmit : event => event.preventDefault()}>
                <ModalContent>
                    {children}
                </ModalContent>
                <ModalFooter>
                    {footer}
                </ModalFooter>
            </form>
        </StyledModal>
    );

    return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = ({ show, closeModal, ...props }) => {

    return (
        <>
            {show &&
                <>
                    <Backdrop onClick={closeModal} />
                    <ModalOverlay {...props} close={closeModal} />
                </>
            }
        </>
    );
};

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    closeModal : PropTypes.func.isRequired,
    onSubmit: PropTypes.func,
    children: PropTypes.node.isRequired,
    footer: PropTypes.node,
}

export default Modal;

