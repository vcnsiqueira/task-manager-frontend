import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './styled/Button.styled';

/**
* A button allows us to highlight actions in the product and make them easily perceived and achievable through just one click
*/
const Button = ({ color, variant, shape, size, textTransform, children, ...props }) => {
    return ( 
        <StyledButton
            color={color}
            variant={variant}
            shape={shape}
            size={size}
            textTransform={textTransform}
            {...props}
        >
            {children}
        </StyledButton>
    );
};

Button.propTypes = {
    /**
    * Color of the button. Choose among seven different options of pass a hex color .
    */
    color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', PropTypes.string]),
    /**
    * Variant of the button. Choose among three variants.
    */
    variant: PropTypes.oneOf(['contained', 'outlined', 'pattern']),
    /**
    * Shape of the button. Choose among square, rounded or circle. 
    */
    shape: PropTypes.oneOf(['square', 'rounded', 'circle']),
    /**
    * Size of the button. Choose among small, medium or large. 
    */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
    * Text of the button. Choose among none, uppercase, lowercase or capitalize.
    */
    textTransform: PropTypes.oneOf(['none', 'uppercase', 'lowercase', 'capitalize']),
    /**
    * Accepts a simple text, a function, an object or a javascript node.
    */
    children: PropTypes.node.isRequired,
}

Button.defaultProps = {
    color: 'primary',
    variant: 'contained',
    shape: 'rounded',
    size: 'medium',
    textTransform: 'none',
};

export default Button;