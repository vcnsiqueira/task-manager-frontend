import React, { useState } from 'react';

import BoardsList from './BoardsList';
import ToolbarBoards from './ToolbarBoards';
import Snackbar from '../../components/core/Snackbar';

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
},
{
    id: '6',
    title: 'Board 1',
    color: 'primary',
    tasks: 25,
    date: '22/04/2021',
    bookmarked: true,
}];

const Boards = ({ username }) => {

    const [boardsList, setBoardsList] = useState(boards);
    const [filteredBoards, setFilteredBoards] = useState(boards);
    const [openToast, setOpenToast] = useState(false);
    // Function that adds a new board to the boardsList
    const addBoard = (newBoard) => {
        setBoardsList([...boardsList, newBoard]);
        setFilteredBoards([...boardsList, newBoard]);
    };

    return (
        <>
            <ToolbarBoards user={username} boards={boardsList} setBoards={setBoardsList} handleFilteredBoards={setFilteredBoards} addBoard={addBoard}/>
            <BoardsList boards={filteredBoards} />
            <button onClick={() => setOpenToast(true)}>Toast me</button>
            {openToast && (
                <Snackbar type="success" position='bottom-left' title="Teste" autoDelete={true} autoDeleteTime={1000} close={() => setOpenToast(false)}>Deu certo!</Snackbar>
            )}
        </>
    );
};

export default Boards;