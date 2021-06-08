import styled from 'styled-components';

export const StyledColorPicker = styled.div`
    width: 36px;
    height: 36px;
    background-color: ${props => props.color};
    border: 1px solid ${props => props.color};
    border-radius: 8px;
`