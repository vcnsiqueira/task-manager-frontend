import styled from 'styled-components';
import theme from '../../../../styles/theme';

export const StyledModal = styled.div`
    z-index: 100;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #F5F5F5;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
`;

export const ModalHeader = styled.header`
    h2 {
        position: relative;
        font-size: 24px;
        margin: 0.8rem 3rem;
        color: ${theme.primary};
    }

    span {
        position: absolute;
        right: 5px;
        top: 5px;
        cursor: pointer;
    }
`;

export const ModalContent = styled.div`
    margin: 0.8rem 2rem;
`;

export const ModalFooter = styled.div`
    margin: 0.8rem 2rem;
`;