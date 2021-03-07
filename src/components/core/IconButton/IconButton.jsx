import React from 'react';
import PropTypes from 'prop-types';
import StyledIconButton from './styled/IconButton.styled';

/** 
* An icon button is used when some functionality is fully understandable through a simple icon
*/
const IconButton = ({ color, variant, shape, size, children, ...props }) => {
    return (
        <StyledIconButton
            color={color}
            variant={variant}
            shape={shape}
            size={size}
            {...props}
        >
            {children}
        </StyledIconButton>
    );
};

IconButton.propTypes = {
    /**
    * Color of the icon button. Choose one of the options or pass a hex color
    */
    color: PropTypes.oneOfType(['primary', 'secondary', 'succes', 'danger', 'warning', 'info', 'dark', PropTypes.string]),
    /**
    * Variant of the icon button. Choose among contained, outlined, pattern
    */
    variant: PropTypes.oneOf(['contained', 'outlined', 'pattern']),
    /**
    * Shape of the icon button. Choose among square, rounded or circle edges
    */
    shape: PropTypes.oneOf(['square', 'rounded', 'circle']),
    /**
    * Size of the icon button. Choose among small, medium, large or extralarge icon buttons
    */
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extralarge']),
    /**
    * Accepts a simple text, a function, an object or a javascript node.
    */
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.node,
        PropTypes.func,
    ]).isRequired,
};

IconButton.defaultProps = {
    color: 'primary',
    variant: 'pattern',
    shape: 'circle',
    size: 'medium',
};

export default IconButton;