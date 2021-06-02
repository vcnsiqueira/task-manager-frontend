import React from 'react';
import PropTypes from 'prop-types';

import StyledSideDrawer from './styled/SideDrawer.styled';
import Backdrop from '../Backdrop';
import { Close } from '../../icons';

const SideDrawer = ({ children, closeDrawer}) => {
     return (
        <Backdrop>
            <StyledSideDrawer>
                <span onClick={closeDrawer}>
                    <Close width={30} />
                </span>
                {children}
            </StyledSideDrawer>
        </Backdrop>
    );
};

SideDrawer.propTypes = {
    children: PropTypes.node,
    closeDrawer: PropTypes.func,
};

export default SideDrawer;
