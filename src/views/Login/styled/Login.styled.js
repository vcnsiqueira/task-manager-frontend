import styled from 'styled-components';
import theme from '../../../styles/theme';
import { device } from '../../../components/core/breakpoints';

const FullContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url("https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?cs=srgb&dl=pexels-pixabay-414171.jpg&fm=jpg");
    background-repeat: no-repeat;
`;

const FormContainer = styled.div`
    width: 20vw;
    background-color: #F5F5F588;
    border-radius: 20px;
    padding: 10px 20px;
    
    hr {
        color: #000000;
    }

    &:hover {
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.25),
            0px 2px 2px 0px rgba(0, 0, 0, 0.27), 0px 1px 5px 0px rgba(0, 0, 0, 0.27);
    };

    @media ${device.xs} {
        width: 100%;
    };

    @media ${device.sm} {
        width: 40vw;
    };

    @media ${device.ms} {
        width: 40vw;
    };

    @media ${device.md} {
        width: 20vw;
    };
`;

const FormHeader = styled.h2`
    text-align: center;
    color: ${theme.primary};
`;

const Line = styled.hr`
    border: 1px solid ${theme.primary};
    width: 50%;
`; 

const FormContent = styled.form`
    span {
        color: ${theme.primary};
        font-weight: bold;
        cursor: pointer
    }

    @media ${device.xs} {
        font-size: 12px;
    }
`

export { FullContainer, FormContainer, FormHeader, FormContent, Line};

