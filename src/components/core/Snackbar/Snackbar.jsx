import React from 'react';
import PropTypes from 'prop-types';

import theme from '../../../styles/theme';
import { StyledSnackbar, IconElement, SnackbarContent } from './styled/Snackbar.styled';

import { Check, Close, Error, Info, Warning } from '../../icons';

const Snackbar = ({ type, position, title, children, close }) => {

    let iconAlert = null;
    switch (type) {
        case "success":
            iconAlert = (
                <Check color={theme.success} width={20}/>
            )
            break;
        case "error":
            iconAlert = (
                <Error color={theme.danger} width={20}/>
            )
            break;
        case "info":
            iconAlert = (
                <Info color={theme.info} width={20}/>
            )
            break;
        case "warning":
            iconAlert = (
                <Warning color={theme.secondary} width={20}/>
            )
            break;
        default:
            break;
    };

    return (
        <StyledSnackbar type={type} position={position}>
            <div onClick={close} style={{position: 'absolute', top: '2px', right: '2px'}}>
                <Close width={20} color={theme.white}/>
            </div>
            <IconElement>
                {iconAlert}
            </IconElement>
            <SnackbarContent>
                <p>{title}</p>
                {children}
            </SnackbarContent>
        </StyledSnackbar>
    );
};

Snackbar.propTypes = {
    type: PropTypes.oneOf(["sucess", "error", "info", "warning"]),
    position: PropTypes.oneOf(["top-right", "top-left", "bottom-right", "bottom-left"]),
    title: PropTypes.string,
    children: PropTypes.node,
    close: PropTypes.func,
};

export default Snackbar;