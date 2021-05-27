import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import StyledBackdrop from './styled/Backdrop.styled';

const Backdrop = ({ onClick, children }) => {
    return ReactDOM.createPortal(
        <StyledBackdrop onClick={onClick}>
            {children}    
        </StyledBackdrop>, document.getElementById('backdrop-hook')
    );
};

Backdrop.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
};

export default Backdrop;