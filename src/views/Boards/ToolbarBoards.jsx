import React, { useState, useEffect } from 'react';

import Avatar from '../../components/core/Avatar';
import IconButton from '../../components/core/IconButton';
import Search from '../../components/core/Search';
import Tooltip from '../../components/core/Tooltip';
import { Add } from '../../components/icons';

import { ToolbarBoardsStyled, ToolbarMainInformation, ToolbarUserInformation, ToolbarActions } from './styled/ToolbarBoards.styled';

const ToolbarBoards = ({ user, boards, handleBoards }) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [searchBoard, setSearchBoard] = useState('');

    useEffect(() => { // This effect tells when there is a change in the resolution width of the device
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return _=> {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    useEffect(() => { // every time the user search a new element, it changes the filteredBoards of the view board by handleBoards function (passed from Boards)
        handleBoards(
            boards.filter(board => {
                const boardName = board.title.toLowerCase();
                return boardName.includes(searchBoard)
            })
        )
    },[searchBoard, boards, handleBoards]);

    return (
        <ToolbarBoardsStyled>
            <ToolbarMainInformation>
                {windowWidth <= 600 ?
                    <Avatar name={user} size="medium"/> :
                    <Avatar name={user} size="extralarge"/>
                } 
                <ToolbarUserInformation>
                    <h1>Olá {user}!</h1>
                    <h3>Quantidade de quadros: <span>{boards.length}</span></h3>
                </ToolbarUserInformation>
            </ToolbarMainInformation>
            <ToolbarActions>
                <Search searchItem={searchBoard} onChange={setSearchBoard}/>
                <Tooltip tooltip="Adicionar quadro" position="bottom-end">
                    <IconButton variant="contained" color="primary" shape="rounded"><Add /></IconButton>
                </Tooltip>
            </ToolbarActions>
        </ToolbarBoardsStyled>
    );
};

export default ToolbarBoards;