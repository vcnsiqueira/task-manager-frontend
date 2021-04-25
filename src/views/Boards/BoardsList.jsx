import React from 'react';
import PropTypes from 'prop-types';

import BoardCard from '../../components/BoardCard';

import BoardsListStyled from './styled/BoardsList.styled';

const BoardsList = ({ boards }) => {
    return (
        <BoardsListStyled>
            {boards.map((board) => (
                <BoardCard key={board.id} title={board.title} color={board.color} numberOfTasks={board.tasks} dateOfCreation={board.date} bookmark={board.bookmarked}/>
            ))}
        </BoardsListStyled>
    );
};

BoardsList.propTypes = {
    boards: PropTypes.array,
};

export default BoardsList;