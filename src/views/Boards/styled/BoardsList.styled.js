import styled from 'styled-components';
import { device } from '../../../components/core/breakpoints';

const BoardsListStyled = styled.div`
    margin: 2rem 3rem;
    display: flex;
    gap: 20px;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;

    @media ${device.xs} {
        margin: 2rem 2rem;
        gap: 10px;
    }
`;

export default BoardsListStyled;