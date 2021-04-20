import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import StyledSideDrawer from './styled/SideDrawer.styled';
import { Close } from '../../icons';

const SideDrawer = ({ children, onClick}) => {
    return ReactDOM.createPortal(
        <StyledSideDrawer>
            <span className="close" onClick={onClick}>
                <Close width={30}/>
            </span>
            {children}
        </StyledSideDrawer>, document.getElementById('sidedrawer-hook')
    );
};

SideDrawer.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
};

export default SideDrawer;
