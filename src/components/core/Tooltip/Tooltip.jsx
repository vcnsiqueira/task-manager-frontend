import React from 'react'
import PropTypes from 'prop-types'

import { TooltipContainer, TooltipText } from './styled/Tooltip.styled';

/**
* Tooltips display additional information on floating labels. They are activated when users hover elements on the screen.
*/
const Tooltip = ({ children, tooltip, position, width }) => {
    return (
        <TooltipContainer>
            {children}
            <TooltipText position={position} width={width}>{tooltip}</TooltipText>            
        </TooltipContainer>
    )
}

Tooltip.propTypes = {
    /**
    * The element to be displayed when users hover important things. It can be a text or any other component 
    */
    tooltip: PropTypes.node,
    /**
    * The position of the tooltip related to the element. You can choose among 9 different positions 
    */
    position: PropTypes.oneOf(['top-start', 'top', 'top-right', 'left-start', 'left', 'left-end', 'bottom-start', 'bottom', 'bottom-end', 'right-start', 'right', 'right-end']),
    /**
    * The element to be enclosed by the tooltip 
    */
    children: PropTypes.node,
    /**
    *  The width of the tooltip block passed as a string
    */
    width: PropTypes.string
};

Tooltip.defaultProps = {
    position: 'top-start',
    tooltip: '',
    width: '120px',
};

export default Tooltip;

