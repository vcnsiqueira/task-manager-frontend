import styled,  { css } from 'styled-components';
import theme from '../../../../styles/theme';
import { device } from '../../breakpoints';

const getColor = color => {
    if(color === 'primary') return theme.primary;
    if(color === 'secondary') return theme.secondary;
    if(color === 'success') return theme.success;
    if(color === 'danger') return theme.danger;
    if(color === 'warning') return theme.warning;
    if(color === 'info') return theme.info;
    if(color === 'dark') return theme.dark;
    if(color === 'white') return theme.white;
    if(color === 'black') return theme.black;
    return color;
};

const patternBackgroundOpacity = hexColor => {
    return hexColor + '30';
};

const variants = {
    outlined(color) {
        const mainColor = getColor(color);
        return css`
            background-color: ${theme.white};
            border: 2px solid ${mainColor};
            color: ${mainColor};
            & > svg, path {
                fill: ${mainColor};
                margin: 0px 5px;
            };
            &:disabled {
                background-color: ${theme.disabled};
                border: 2px solid ${theme.disabled};
                opacity: 1;
                pointer-events: none;
                box-shadow: none;
                cursor: default;
                color: ${theme.white};
                & > svg, path {
                    fill: ${theme.white};
                    margin: 0px 5px;
                };
            };
            &:hover {
                background-color: ${mainColor};
                color: ${theme.white};
                & > svg, path {
                    fill: ${theme.white};
                    margin: 0px 5px;
                };
            };
        `;
    },
    contained(color) {
        const mainColor = getColor(color);
        return css`
            background-color: ${mainColor};
            border: 2px solid ${mainColor};
            color: ${theme.white};
            & > svg, path {
                fill: ${theme.white};
                margin: 0px 5px;
            };
            &:disabled {
                background-color: ${theme.disabled};
                border: 2px solid ${theme.disabled};
                opacity: 1;
                pointer-events: none;
                box-shadow: none;
                cursor: default;
            };
        `;
    },
    pattern(color) {
        const mainColor = getColor(color);
        return css`
            background-color: transparent;
            border: none;
            color: ${mainColor};
            & > svg, path {
                fill: ${mainColor};
                margin: 0px 5px;
            };
            &:disabled {
                background-color: ${theme.disabled};
                border: 2px solid ${theme.disabled};
                color: ${theme.white};
                & > svg, path {
                    fill: ${theme.white};
                    margin: 0px 5px;
                };
            };
            &:hover {
                background-color: ${patternBackgroundOpacity(mainColor)};
            };
        `;
    },
    getVariant(variant = 'contained', color = theme.primary) {
        return this[variant] ? this[variant](color) : this.contained(color);
    },
};

const shapes = {
    square: '0px',
    rounded: '8px',
    circle: '20px',
    getShape(shape) {
        return this[shape] || this.rounded
    }
}

const sizes = {
    small: { padding: '2px 4px', 'font-size': '14px'},
    medium: { padding: '4px 8px', 'font-size': '16px'},
    large: { padding: '8px 16px', 'font-size': '18px'},
    getSize(size) {
        return this[size] || this.medium;
    }
}

const textTransform = {
    none: 'none',
    capitalize: 'capitalize',
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    getTextTransform(text) {
        return this[text] || this.none
    }
}

const iconSize = size => {
    if (size === 'small') return '16px';
    if (size === 'medium') return '20px';
    if (size === 'large') return '30px';
    return size;
}

const StyledButton = styled.button`
    border-style: none;
    cursor: pointer;
    font-weight: 600;
    outline: none;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.xs} {
        min-width: 100px;
    };

    ${props => css`
        ${variants.getVariant(props.variant, props.color)};
        border-radius: ${shapes.getShape(props.shape)};
        padding: ${sizes.getSize(props.size).padding};
        font-size: ${sizes.getSize(props.size)['font-size']};
        text-transform: ${textTransform.getTextTransform(props.textTransform)};
        & > svg {
            width: ${iconSize(props.size)};
            height: ${iconSize(props.size)};
            pointer-events: none;
        };
    `};

    &:hover {
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.25),
            0px 2px 2px 0px rgba(0, 0, 0, 0.27), 0px 1px 5px 0px rgba(0, 0, 0, 0.27);
        opacity: 0.85;
    };

    div {
        display: flex;
        align-items: center;
    };
`;

export default StyledButton;