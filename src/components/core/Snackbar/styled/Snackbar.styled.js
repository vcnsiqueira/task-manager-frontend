import styled, { css } from 'styled-components';
import theme from '../../../../styles/theme';

const getColor = type => {
    if (type === 'success') return theme.success;
    if (type === 'error') return theme.danger;
    if (type === 'info') return theme.info;
    if (type === 'warning') return theme.secondary;
}

/*const types = {
    success: '#4CAF50',//`${theme.success}`,
    error: '#BA000D',//`${theme.danger}`,
    info: '#0097A7',//`${theme.info}`,
    warning: '#FFD54F',//`${theme.warning}`,
    getType(type) {
        return this[type] || this.success
    }
}*/

export const StyledSnackbar = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5em;
    background-color: ${props => getColor(props.type)};
    border-radius: 0.5rem;
    min-width: 300px;
    min-height: 40px;
    gap: 1rem;
    font-size: 14px;
    box-sizing: border-box;
    position: relative;
    transition: transform .6s ease-in-out;
    animation: toast-in-right .7s;
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