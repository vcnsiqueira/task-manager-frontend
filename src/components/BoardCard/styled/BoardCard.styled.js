import styled from 'styled-components';
import theme from '../../../styles/theme';

const getColor = (color) => {
    if (color === 'primary') return theme.primary;
    if (color === 'secondary') return theme.secondary;
    if (color === 'success') return theme.success;
    if (color === 'danger') return theme.danger;
    if (color === 'warning') return theme.warning;
    if (color === 'info') return theme.info;
    if (color === 'dark') return theme.dark;
    if (color === 'white') return theme.white;
    if (color === 'black') return theme.black;
    return color;
};

export const StyledBoardCard = styled.div`
    display: block;
    background-color: ${props => getColor(props.color) + '77'};
    //border: 1px solid ${theme.dark};
    border-radius: 10px;
    width:  225px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.25),
        0px 2px 2px 0px rgba(0, 0, 0, 0.27), 0px 1px 5px 0px rgba(0, 0, 0, 0.27);
    };
`;

export const BoardTitle = styled.div`
    background-color: ${props => getColor(props.color)};
    border-radius: 10px 10px 0 0 ;
    color: ${theme.white};
    padding: 10px 0;    
    text-align: center;
    position: relative;

    span {
        position: absolute;
        right: 5px;
        top: 2px;
    }
`;

export const BoardContent = styled.div`
    text-align: center;
    padding: 15px;
    span {
        color: ${theme.dark};
    };
`;

export const BoardFooter = styled.div`
    text-align: right;
    color: ${theme.dark};
    padding: 10px 15px;
    position: relative;

    span {
        font-size: 10px;
        color: ${theme.dark};
    }
`;

export const BoardStar = styled.div`
    position: absolute;
    left: 10px;
    bottom: 10px;
    cursor: pointer;
`;
