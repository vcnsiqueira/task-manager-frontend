import styled, { keyframes, css } from 'styled-components';
import theme from '../../../../styles/theme';

const inputHighlighter = keyframes`
    from { background: ${theme.primary}; }
    to { 
        width: 0; 
        background: transparent; 
    }
`;

const StyledInputText = styled.div`
    position: relative;
    padding-top: ${(props) => props.label ? '' : '20px' };
    ${(props) => props.disabled && css`
        background-color: ${theme.disabled};
        pointer-events: none;
    `};

    .inputText {
        font-size: 1rem;
        padding: 10px 0 0 0px;
        display: block;
        width: 100%;
        border: none;
        border-bottom: 2px solid ${props => (props.errorMessage.length !== 0 && props.blur) ? theme.danger : theme.inputTextBorder};
        background-color: ${(props) => props.notTransparent ? theme.white : 'transparent' };

        &:focus {
            outline: none;
            +.labelText {
                color: ${(props) => (props.errorMessage.length !== 0 && props.blur) ? theme.danger : theme.primary};
            };
            ~.bar:before, ~.bar:after {
                width: 50%;
            };
            ~.highlight {
                -webkit-animation: ${inputHighlighter} 0.3s ease;
                -moz-animation: ${inputHighlighter} 0.3s ease;
                animation: ${inputHighlighter} 0s ease;
            };
        };

        &:disabled {
            opacity: 0.5;
            pointer-events: none;
        } 
    };

    .labelText {
        position: absolute;
        top: 4px;
        left: 0px;
        font-size: 0.85rem;
        color: ${(props) => (props.errorMessage.length !== 0 && props.blur) ? theme.danger : theme.inputLabelColor};
        font-weight: bold;
    };

    .errorMessage {
        font-size: 10px;
        color: ${theme.danger}
    };

    /* #### BAR ### */
    
    .bar {
        position: relative;
        display: block;
        width: 100%;
    };

    .bar:before, .bar:after {
        content: '';
        height: 2px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: ${(props) => (props.errorMessage.length !== 0 && props.blur) ? theme.danger : theme.primary};
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    };
    .bar:before {
        left: 50%;
    };
    .bar:after {
        right: 50%;
    };

    /* #### HIGHLIGHTER ### */

    .highlight {
        position: absolute;
        height: 60%;
        width: 100%;
        top: 25%;
        left: 0;
        pointer-events: none;
        opacity: 0.5;
    };

    /*.inputText:focus ~ .highlight {
        -webkit-animation: ${inputHighlighter} 0.3s ease;
        -moz-animation: ${inputHighlighter} 0.3s ease;
        animation: ${inputHighlighter} 0s ease;
    }*/
`;

export default StyledInputText;