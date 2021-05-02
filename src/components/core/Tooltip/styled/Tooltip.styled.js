import styled, { css } from 'styled-components';
import theme from '../../../../styles/theme';

const getPosition = (position) => {
    switch (position) {
        case 'top-start':
            return css`
                bottom: calc(100% + 15px);
                left: 0%;
                /* transform: translate(0%,-50%); */
                &:after {
                    left: 20%;
                    top: 100%;
                    margin-left: -5px;
                    border-width: 5px;
                    border-color: ${theme.dark} transparent transparent transparent; 
                };
            `;
        case 'top':
            return css`
                bottom: calc(100% + 15px);
                left: 50%;
                transform: translate(-50%,0);
                /* transform: translate(-50%,-50%); */
                &:after {
                    left: 50%;
                    top: 100%;
                    margin-left: -5px;
                    border-width: 5px;
                    border-color: ${theme.dark} transparent transparent transparent; 
                };
            `;
        case 'top-end':
            return css`
                bottom: calc(100% + 15px);
                right: 0%;
                /* transform: translate(0%,-50%); */
                &:after {
                    top: 100%;
                    right: 20%;
                    margin-left: -5px;
                    border-width: 5px;
                    border-color: ${theme.dark} transparent transparent transparent; 
                };
            `;
        case 'bottom-start':
            return css`
                top: calc(100% + 15px);
                left: 0%;
                /* transform: translate(0%,50%); */
                &:after {
                    left: 20%;
                    bottom: 100%;
                    margin-left: -5px;
                    border-width: 5px;
                    border-color: transparent transparent ${theme.dark} transparent;
                };
            `;
        case 'bottom':
            return css`
                top: calc(100% + 15px);
                right: 50%;
                transform: translate(50%,0%);
                /* transform: translate(50%,50%); */
                &:after {
                    left: 50%;
                    bottom: 100%;
                    margin-left: -5px;
                    border-width: 5px;
                    border-color: transparent transparent ${theme.dark} transparent;
                };
            `; 
        case 'bottom-end':
            return css`
                top: calc(100% + 15px);
                right: 0%;
                /* transform: translate(0%,50%); */
                &:after {
                    bottom: 100%;
                    right: 20%;
                    margin-left: -5px;
                    border-width: 5px;
                    border-color: transparent transparent ${theme.dark} transparent;
                };
            `;
        case 'left-start':
            return css`
                top: 0%;
                right: calc(100% + 20px);
                /* transform: translate(-50%,0%); */
                &:after {
                    left: 100%;
                    top: 50%;
                    margin-top: -5px;
                    border-width: 5px;
                    border-color: transparent transparent transparent ${theme.dark};
                };
            `;
        case 'left':
            return css`
                top: 50%;
                right: calc(100% + 20px);
                transform: translate(0%,-50%);
                /* transform: translate(-50%,-50%); */
                &:after {
                    left: 100%;
                    top: 50%;
                    margin-top: -5px;
                    border-width: 5px;
                    border-color: transparent transparent transparent ${theme.dark};
                };
            `;
        case 'left-end':
            return css`
                bottom: 0%;
                right: calc(100% + 20px);
                /* transform: translate(-50%,0%); */
                &:after {
                    left: 100%;
                    top: 50%;
                    margin-top: -5px;
                    border-width: 5px;
                    border-color: transparent transparent transparent ${theme.dark};
                };
            `;
        case 'right-start':
            return css`
                top: 0%;
                left: calc(100% + 20px);
                /* transform: translate(50%,0%); */
                &:after {
                    right: 100%;
                    top: 50%;
                    margin-top: -5px;
                    border-width: 5px;
                    border-color: transparent ${theme.dark} transparent transparent;
                };
            `;
        case 'right':
            return css`
                top: 50%;
                left: calc(100% + 20px);
                transform: translate(0,-50%);
                /* transform: translate(50%,-50%); */
                &:after {
                    right: 100%;
                    top: 50%;
                    margin-top: -5px;
                    border-width: 5px;
                    border-color: transparent ${theme.dark} transparent transparent;
                };
            `;
        case 'right-end':
            return css`
                bottom: 0%;
                left: calc(100% + 20px);
                /* transform: translate(50%,0%); */
                &:after {
                    right: 100%;
                    top: 50%;
                    margin-top: -5px;
                    border-width: 5px;
                    border-color: transparent ${theme.dark} transparent transparent;
                };
            `;
        default:
            break;
    };
};

export const TooltipContainer = styled.div`
    position: relative;
    display: inline-block;
    
    &:hover div {
        visibility: visible;
    }
`;

export const TooltipText = styled.div`
    visibility: hidden;
    width: ${props => props.width || '150px'};
    background-color: ${theme.dark};
    color: ${theme.white};
    text-align: center;
    border-radius: 8px;
    padding: 5px;
    position: absolute;
    z-index: 1;

    :after {
        content: '';
        position: absolute;
        border-style: solid;
    }

    ${props => getPosition(props.position)};
`;