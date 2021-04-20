import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import StyledBackdrop from './styled/Backdrop.styled';

const Backdrop = ({ onClick }) => {
    return ReactDOM.createPortal(
        <StyledBackdrop onClick={onClick}/>, document.getElementById('backdrop-hook')
    );
};

Backdrop.propTypes = {
    onClick: PropTypes.func
};

export default Backdrop;