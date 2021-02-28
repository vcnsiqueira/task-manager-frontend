import styled, { css } from 'styled-components';
import theme from '../../../../styles/theme';
import { device } from '../../breakpoints';

const getColor = (color) => {
    if (color === 'primary') return theme.primary;
    if (color === 'secondary') return theme.secondary;
    if (color === 'success') return theme.success;
    if (color === 'danger') return theme.danger;
    if (color === 'warning') return theme.warning;
    if (color === 'info') return theme.info;
    if (color === 'dark') return theme.dark;
    if (color === 'white') return theme.white;
    if (color === 'black') return theme.black;
    return color;
};

const patternBackgroundOpacity = (hexColor) => {
    return hexColor + '30';
}

const variants = {
    outlined(color) {
        const mainColor = getColor(color);
        return css `
            background-color: ${theme.white};
            border: 2px solid ${mainColor};
            & > svg {
                fill: ${mainColor};
            };
            &:hover {
                background-color: ${mainColor};
                & > svg {
                    fill: ${theme.white};
                };
            };
            &:disabled {
                border: 2px solid ${theme.disabled};
                background-color: ${theme.disabled};
                opacity: 1;
                box-shadow: none;
                pointer-events: none;
                cursor: default;
                & > svg {
                    fill: ${theme.white};
                };
            };
        `;
    },
    contained(color) {
        const mainColor = getColor(color);
        return css`
            background-color: ${mainColor};
            border: 2px solid ${mainColor};
            & > svg {
                fill: ${theme.white}
            };
            &:disabled {
                color: ${theme.grey};
                background-color: ${theme.disabled};
                border: 2px solid ${theme.disabled};
                opacity: 1;
                box-shadow: none;
                pointer-events: none;
                cursor: default;
            };
        `;
    },
    pattern(color) {
        const mainColor = getColor(color);
        return css`
            background-color: transparent;
            border: 2px solid transparent;
            & > svg {
                fill: ${mainColor};
            };
            &:disabled {
                color: ${theme.grey};
                background-color: ${theme.disabled};
                opacity: 1;
                box-shadow: none;
                pointer-events: none;
                cursor: default;
            }
            &:hover {
                background-color: ${patternBackgroundOpacity(mainColor)};
            };
        `;
    },
    getVariant(variant = 'contained', color = theme.primary) {
        return this[variant] ? this[variant](color) : this.pattern(color);
    },
};

const shapes = {
    square: '0',
    rounded: '8px',
    circle: '50%',
    getShape(shape) {
        return this[shape] || this.rounded;
    },
};

const sizes = {
    small: '1px',
    medium: '6px',
    large: '12px',
    extralarge: '20px',
    getSize(size) {
        return this[size] || this.medium;
    },
};

const iconSize = size => {
    if (size === 'small') return '16px';
    if (size === 'medium') return '20px';
    if (size === 'large') return '30px';
    if (size === 'extralarge') return '50px'
    return size;
}

const StyledIconButton = styled.button`
    cursor: pointer;
    margin: 0;
    display: inline-flex;
    outline: 0;
    position: relative;
    align-items: center;
    user-select: none;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-tap-hightlight-color: transparent;
    justify-self: center;
    border-style: none;
    ${props => props.hidePrint && css`
        @media print {
            display: none;
        }
    `}

    ${props => props.hideMobile && css`
        @media ${device.xs}{
            display: none;
        };
        @media ${device.ms} and {orientation: landscape} {
            display: none;
        };
    `};

    ${props => css`
        ${variants.getVariant(props.variant, props.color)};
        border-radius: ${shapes.getShape(props.shape)};
        padding: ${sizes.getSize(props.size)};
        & svg {
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

    &:active {
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.05),
        0px 2px 2px 0px rgba(0, 0, 0, 0.07), 0px 1px 5px 0px rgba(0, 0, 0, 0.07);
    };
`;

export default StyledIconButton;