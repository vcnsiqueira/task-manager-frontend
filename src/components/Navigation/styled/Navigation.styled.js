import styled from 'styled-components';
import { device } from '../../core/breakpoints'

import theme from '../../../styles/theme';

export const NavigationContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px 3rem;
    justify-content: space-between;
    align-items: center;
    background: ${theme.primary};

    @media ${device.xs} {
        padding: 10px 2rem;
    };
`;

export const NavigationLeftSide = styled.div`
    display: flex;
    flex: 1 1 0px;
    gap: 15px;
    justify-content: flex-start;
    align-items: center;

    span {
        display: none;
    }

    @media ${device.xs} {
        span {
            display: inline-flex;
        };

        button {
            display: none !important;
        };
    };
`;

export const Brand = styled.div`
    flex: 1 1 0px;

    h1 {
        color: ${theme.white};
        font-size: 24px;
        margin: 0;
    }

    @media ${device.xs} {
        h1 {
            font-size: 18px;
        };
    };
`;

export const NavigationRightSide = styled.div`
    display: flex;
    flex: 1 1 0px;
    gap: 15px;
    justify-content: flex-end;
    align-items: center
`;

