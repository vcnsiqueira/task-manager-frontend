import React from 'react';

import Avatar from '../../components/core/Avatar';
import IconButton from '../../components/core/IconButton';
import Search from '../../components/core/Search';
import { Add } from '../../components/icons';

import { ToolbarBoardsStyled, ToolbarMainInformation, ToolbarUserInformation, ToolbarActions } from './styled/ToolbarBoards.styled';

const ToolbarBoards = ({ user, boards }) => {
    return (
        <ToolbarBoardsStyled>
            <ToolbarMainInformation>
                <Avatar name={user} size="extralarge"/>
                <ToolbarUserInformation>
                    <h1>Olá {user}!</h1>
                    <h3>Quantidade de quadros: <span>{boards.length}</span></h3>
                </ToolbarUserInformation>
            </ToolbarMainInformation>
            <ToolbarActions>
                <Search />
                <IconButton variant="contained" color="primary" shape="rounded"><Add /></IconButton>
            </ToolbarActions>
        </ToolbarBoardsStyled>
    );
};

export default ToolbarBoards;