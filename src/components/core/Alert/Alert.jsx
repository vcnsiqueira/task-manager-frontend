import React from 'react';
import PropTypes from 'prop-types';
import theme from '../../../styles/theme';

import Modal from '../Modal';
import { Check, Error, Info, Warning } from '../../icons';

const Alert = ({ show, closeAlert, overlayColor, type, onSubmit, children, footer }) => {
    
    let iconAlert = null;
    switch (type) {
        case "success":
            iconAlert = (
                <Check color={theme.success} width={100}/>
            )
            break;
        case "error":
            iconAlert = (
                <Error color={theme.danger} width={100}/>
            )
            break;
        case "info":
            iconAlert = (
                <Info color={theme.danger} width={100}/>
            )
            break;
        case "warning":
            iconAlert = (
                <Warning color={theme.warning} width={100}/>
            )
            break;
        default:
            break;
    };

    return (
        <Modal show={show} closeModal={closeAlert} backgroundColor={overlayColor} onSubmit={onSubmit} footer={footer}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                {iconAlert}
            </div>
            {children}
        </Modal>
    );
};

Alert.propTypes = {
    show: PropTypes.bool,
    closeAlert: PropTypes.func,
    overlayColor: PropTypes.string,
    type: PropTypes.oneOf(["success", "error", "info", "warning"]),
    onSubmit: PropTypes.func,
    children: PropTypes.node,
    footer: PropTypes.node,
};

export default Alert;