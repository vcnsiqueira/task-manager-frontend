import styled from 'styled-components';

const StyledSideDrawer = styled.aside`
    position: relative;
    z-index: 100;
    height: 100vh;
    width: 70%;
    background-color: #F5F5F5;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);

    span {
        position: absolute;
        right: 5px;
        top: 5px;
    }
`;

export default StyledSideDrawer;