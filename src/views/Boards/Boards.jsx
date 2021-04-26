import React, { useState } from 'react';

import BoardsList from './BoardsList';
import ToolbarBoards from './ToolbarBoards';

const boards = [{
    id: '1',
    title: 'Board 1',
    color: 'primary',
    tasks: 25,
    date: '22/04/2021',
    bookmarked: true,
},
{
    id: '2',
    title: 'Board 2',
    color: 'secondary',
    tasks: 30,
    date: '20/04/2021',
    bookmarked: false,
},
{
    id: '3',
    title: 'Board 3',
    color: 'danger',
    tasks: 20,
    date: '18/04/2021',
    bookmarked: true,
},
{
    id: '4',
    title: 'Board 4',
    color: 'success',
    tasks: 40,
    date: '10/02/2021',
    bookmarked: false,
},
{
    id: '5',
    title: 'Board 5',
    color: 'dark',
    tasks: 50,
    date: '11/01/2021',
    bookmarked: false,
}];

const Boards = ({ username }) => {

    const [filteredBoards, setFilteredBoards] = useState(boards);

    return (
        <>
            <ToolbarBoards user={username} boards={boards} handleBoards={setFilteredBoards}/>
            <BoardsList boards={filteredBoards} />
        </>
    );
};

export default Boards;