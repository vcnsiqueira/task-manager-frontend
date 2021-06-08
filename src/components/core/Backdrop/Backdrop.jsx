import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import StyledBackdrop from './styled/Backdrop.styled';

const Backdrop = ({ onClick, children, backgroundColor }) => {
    return ReactDOM.createPortal(
        <StyledBackdrop onClick={onClick} backgroundColor={backgroundColor}>
            {children}    
        </StyledBackdrop>, document.getElementById('backdrop-hook')
    );
};

Backdrop.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    backgroundColor: PropTypes.string,
};

export default Backdrop;