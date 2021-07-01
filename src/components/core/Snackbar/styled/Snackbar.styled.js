import styled, { css } from 'styled-components';
import theme from '../../../../styles/theme';

const getColor = type => {
    if (type === 'success') return theme.success;
    if (type === 'error') return theme.danger;
    if (type === 'info') return theme.info;
    if (type === 'warning') return theme.warning;
}

export const StyledSnackbar = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 2;
    padding: 0.5em;
    background-color: ${props => getColor(props.type)};
    border-radius: 0.5rem;
    width: 300px;
    height: 60px;
    gap: 1rem;
    font-size: 14px;
    box-sizing: border-box;
    position: fixed;
    top: ${props => props.position === 'top-left' || props.position === 'top-right' ? '20px' : 'none'};
    bottom: ${props => props.position === 'bottom-left' || props.position === 'bottom-right' ? '20px' : 'none'};
    left: ${props => props.position === 'top-left' || props.position === 'bottom-left' ? '20px' : 'none'};
    right: ${props => props.position === 'top-right' || props.position === 'bottom-right' ? '20px' : 'none'};
    transition: transform 3s ${props => props.position === 'top-right' || props.position === 'bottom-right' ? 'ease-in-out' : 'ease-in'};
    animation: ${props => props.position === 'top-right' || props.position === 'bottom-right' ? 'toast-in-right' : 'toast-in-left'} .7s;

    @keyframes toast-in-right {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }

    @keyframes toast-in-left {
        from {
            transform: translateX(-100%);		
        }
        to {
            transform: translateX(0);
        }
    }
`;

export const IconElement = styled.div`
    padding: 1em;
    border-radius: 50%;
    background-color: ${theme.white};
    display: flex;
    align-items: center;
`;

export const SnackbarContent = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 0.2rem;
    justify-content: flex-start;
    align-items: flex-start;
    color: ${theme.white};

    p {
        margin: 0px;
        font-weight: bold;
        font-size: 1rem;
        color: ${theme.white};
    }
`;