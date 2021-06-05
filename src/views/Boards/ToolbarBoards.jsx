import React, { useState, useEffect } from 'react';

import Avatar from '../../components/core/Avatar';
import Button from '../../components/core/Button';
import IconButton from '../../components/core/IconButton';
import InputText from '../../components/core/InputText';
import Search from '../../components/core/Search';
import Tooltip from '../../components/core/Tooltip';
import Modal from '../../components/core/Modal';
import { Add } from '../../components/icons';

import { ToolbarBoardsStyled, ToolbarMainInformation, ToolbarUserInformation, ToolbarActions } from './styled/ToolbarBoards.styled';

const ToolbarBoards = ({ user, boards, handleBoards }) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [searchBoard, setSearchBoard] = useState('');
    const [showAddBoardModal, setShowAddBoardModal] = useState(false);

    const openAddBoardModal = () => {
        setShowAddBoardModal(true);
    };

    const closeAddBoardModal = () => {
        setShowAddBoardModal(false);
    };

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
        <>
            <ToolbarBoardsStyled>
                <ToolbarMainInformation>
                    {windowWidth <= 600 ?
                        <Avatar name={user} size="large"/> :
                        <Avatar name={user} size="extralarge"/>
                    } 
                    <ToolbarUserInformation>
                        <h1>Olá {user}!</h1>
                        <h3>Quantidade de quadros: <span>{boards.length}</span></h3>
                    </ToolbarUserInformation>
                </ToolbarMainInformation>
                <ToolbarActions>
                    <Search searchItem={searchBoard} onChange={setSearchBoard}/>
                    <Tooltip tooltip="Novo quadro" position="top-end">
                        <IconButton variant="contained" color="primary" shape="rounded" onClick={openAddBoardModal}><Add /></IconButton>
                    </Tooltip>
                </ToolbarActions>
                <Modal 
                    show={showAddBoardModal} 
                    closeModal={closeAddBoardModal}
                    title="Adicionar Quadro"
                    footer={
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', padding: '10px 0px', gap: '10px'}}>
                            <Button variant="outlined" color="primary" onClick={closeAddBoardModal}>Cancelar</Button>
                            <Button variant="contained" color="primary" type="submit">Adicionar</Button>
                        </div>
                    }
                >
                </Modal>
            </ToolbarBoardsStyled>
        </>
    );
};

export default ToolbarBoards;