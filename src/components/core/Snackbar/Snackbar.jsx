import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import theme from '../../../styles/theme';
import { StyledSnackbar, IconElement, SnackbarContent } from './styled/Snackbar.styled';

import { Check, Close, Error, Info, Warning } from '../../icons';

/**
* A toast element to communicate with the user. It is generally used to show a message without block any functionality of the page
*/
const Snackbar = ({ type, position, title, children, close, autoDelete, autoDeleteTime }) => {

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
                <Warning color={theme.warning} width={20}/>
            )
            break;
        default:
            break;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (autoDelete) {
                close();
            };
        }, autoDeleteTime);
        return () => {
            clearInterval(interval);
        };
    }, []);

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
    /**
    * The type of the toast. Choose among four options. 
    */
    type: PropTypes.oneOf(["sucess", "error", "info", "warning"]),
    /**
    * The position of the toast. Choose among four options. 
    */
    position: PropTypes.oneOf(["top-right", "top-left", "bottom-right", "bottom-left"]),
    /**
    * Title of the toast
    */
    title: PropTypes.string,
    /**
    * The message of the toast.
    */
    children: PropTypes.node,
    /**
    * Function to close the toast
    */
    close: PropTypes.func,
    /**
    * Boolean to determine wheter the toast must be closed automatically
    */
    autoDelete: PropTypes.bool,
    /**
    * Time until the toast be open. Only used if the autoDelete is true.
    */
    autoDeleteTime: PropTypes.number,
};

Snackbar.defaultProps = {
    type: 'info',
    position: 'bottom-right',
    autoDelete: true,
    autoDeleteTime: 3000,
};

export default Snackbar;