import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Backdrop from '../Backdrop';
import { Close } from '../../icons';
import { StyledModal, ModalHeader, ModalContent, ModalFooter } from './styled/Modal.styled';

const ModalOverlay = ({ title, onSubmit, close, children, footer }) => {

    const content = (
        <StyledModal>
            {title && (
                <>
                    <ModalHeader>
                        <h2>{title}</h2>
                        <span onClick={close}>
                            <Close width={20} />
                        </span>
                    </ModalHeader>
                    <hr style={{margin: '0px 15%', border: '0.8px solid #C4C4C4'}}/>
                </>
            )}
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

/**
* Modals are floating cards which overlay the primary UI. All content in a simgle modal should be related to completing one single task. Modals are heavy UI elements which obscure the primary user interface - avoid them where possible.
*/
const Modal = ({ show, closeModal, backgroundColor, ...props }) => {

    return (
        <>
            {show &&
                <>
                    <Backdrop onClick={closeModal} backgroundColor={backgroundColor}/>
                    <ModalOverlay {...props} close={closeModal} />
                </>
            }
        </>
    );
};

Modal.propTypes = {
    /**
    * A boolean variable that determines if the modal is visible or not.
    */
    show: PropTypes.bool.isRequired,
    /**
    * The title of the modal. Optional.
    */
    title: PropTypes.string,
    /**
    * A function responsible to close the modal.
    */
    closeModal: PropTypes.func.isRequired,
    /**
    * The background color of the overlay
    */
    backgroundColor: PropTypes.string,
    /**
    * A function responsible to submit the elements of the modal
    */
    onSubmit: PropTypes.func,
    /**
    * The content of the modal
    */
    children: PropTypes.node.isRequired,
    /**
    * The footer of the element. Generally it is composed by buttons to apply some configuration.
    */
    footer: PropTypes.node,
}

Modal.defaultProps = {
    show: false,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
}

export default Modal;

