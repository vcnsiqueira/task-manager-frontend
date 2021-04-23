import React, { useState } from 'react';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';

import { StarContained, StarOutlined } from '../icons';
import { StyledBoardCard, BoardTitle, BoardContent, BoardFooter, BoardStar } from './styled/BoardCard.styled';

/**
* The BoardCard is the component that represents a Board related where the user will create his tasks
*/
const BoardCard = ({ title, color, image, bookmark, dateOfCreation, numberOfTasks, openBoard }) => {
    
    const [bookmarkedStar, setBookmarkedStar] = useState(bookmark);

    const tasks = numberOfTasks => {
        if (numberOfTasks === 0) {
            return <p>Nenhum tarefa</p>
        } else if (numberOfTasks === 1) {
            return <p>1 tarefa</p>
        }
        return <p>{numberOfTasks} tarefas</p>
    };

    const toggleBookmark = (prev) => {
        setBookmarkedStar(!prev);
    };
    
    return (
        <StyledBoardCard color={color} onClick={openBoard}>
            <BoardTitle color={color}>
                {title}
            </BoardTitle>
            <BoardContent>
                <span>
                    {tasks(numberOfTasks)}
                </span>
            </BoardContent>
            <BoardFooter>
                <BoardStar onClick={() => toggleBookmark(bookmarkedStar)}>
                    {bookmarkedStar ? <StarContained color='#FFEA00' width="20px" heigth="20px"/> : <StarOutlined color='#FFEA00' width="20px" heigth="20px"/>}
                </BoardStar>
                <span>{dateOfCreation}</span>
            </BoardFooter>
        </StyledBoardCard>
    );
};

BoardCard.propTypes = {
    /**
    * The title of the board. Must be a string
    */
    title: PropTypes.string,
    /**
    * The color of the board. Choose one of the options os pass a hex color
    */
    color: PropTypes.oneOfType(['primary', 'secondary', 'succes', 'danger', 'warning', 'info', 'dark', PropTypes.string]),
    /**
    * The url of the image to be the background image of the card
    */
    image: PropTypes.string,
    /**
    * A boolean to determine if the board is bookmarked or not
    */
    bookmark: PropTypes.bool,
    /**
    * The date of creation of the card
    */
    dateOfCreation: PropTypes.string,
    /**
    * The number of tasks inserted on the card
    */
    numberOfTasks: PropTypes.number,
    /**
    * A toogle to bookmark or not a board
    */
    toggleBookmark: PropTypes.func,
    /**
    * A function to open the card
    */
    openBoard: PropTypes.func,
}

BoardCard.defaultProps = {
    title: "Card Title",
    color: "primary",
    bookmark: true,
    numberOfTasks: 0,
}

export default BoardCard;