import styled from 'styled-components';
import theme from '../../../styles/theme';

export const ToolbarBoardsStyled = styled.div`
    margin: 2rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ToolbarMainInformation = styled.div`
    display: flex;
    gap: 25px;
    justify-content: flex-start;
    align-items: center;
`;

export const ToolbarUserInformation = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: flex-start;

    h1 {
        color: ${theme.primary};
        margin: 0px;
        font-size: 30px;
    };

    h3 {
        color: #808080;
        font-size: 16px;
        
        span {
            color: #F0A500;
        };
    };
`;

export const ToolbarActions = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 25px;
`;

