import styled from 'styled-components';
import theme from '../../../../styles/theme';

export const StyledSearchLabel = styled.label`
    clip: rect()(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

export const StyledSearchInput = styled.input`
    height: 30px;
    width: 200px;
    text-indent: 10px;
    padding-left: 5px;
    border: 2px solid ${theme.primary};
    border-radius: 8px;
    outline: none;

    &:focus {
        box-shadow: 0 0 5px ${theme.primary};
        border: 2px solid ${theme.primary};
    };
    
    &::placeholder {
        color: ${theme.grey};
    }
`;