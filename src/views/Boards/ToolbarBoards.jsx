import React, { useState, useEffect } from 'react';
import theme from '../../styles/theme';

import { useForm } from '../../hooks/useFormHook';

import Avatar from '../../components/core/Avatar';
import Button from '../../components/core/Button';
import IconButton from '../../components/core/IconButton';
import Search from '../../components/core/Search';
import Tooltip from '../../components/core/Tooltip';
import Modal from '../../components/core/Modal';
import { Add } from '../../components/icons';
import InputText from '../../components/core/InputText';
import ColorPicker from '../../components/core/ColorPicker';

import { VALIDATOR_REQUIRE, VALIDATOR_MAXLENGTH } from '../../utils/validation';

import { ToolbarBoardsStyled, ToolbarMainInformation, ToolbarUserInformation, ToolbarActions } from './styled/ToolbarBoards.styled';

const ToolbarBoards = ({ user, boards, handleFilteredBoards, addBoard }) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [searchBoard, setSearchBoard] = useState('');
    const [showAddBoardModal, setShowAddBoardModal] = useState(false);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [newBoardColor, setNewBoardColor] = useState(theme.primary);

    const [formState, inputHandler] = useForm({
        boardTitle: {
            value: '',
            isValid: false,
        },
    }, false);

    const openAddBoardModal = () => { // Function responsible to open the modal to add a new Modal
        setShowAddBoardModal(true);
    };

    const closeAddBoardModal = () => { // Function responsible to close the modal that adds a new Modal
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
        handleFilteredBoards(
            boards.filter(board => {
                const boardName = board.title.toLowerCase();
                return boardName.includes(searchBoard)
            })
        );
    },[searchBoard]);

    const submitAddBoard = event => {
        event.preventDefault();
        addBoard({
            id: '100',
            title: formState.inputs.boardTitle.value,
            color: 'primary',
            tasks: 0,
            date: '06/06/2021',
            bookmarked: false,
        });
        closeAddBoardModal();
    };

    const toggleColorPicker = () => setShowColorPicker(!showColorPicker)

    const handleNewBoardColor = newColor => {
        setNewBoardColor(newColor.hex);
    }

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
                    onSubmit={submitAddBoard}
                    title="Adicionar Quadro"
                    footer={
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', padding: '10px 0px', gap: '10px'}}>
                            <Button variant="outlined" color="primary" onClick={closeAddBoardModal}>Cancelar</Button>
                            <Button variant="contained" color="primary" type="submit" disabled={!formState.isValid}>Adicionar</Button>
                        </div>
                    }
                >
                    <div style={{display: 'flex', justifyContent:'space-between', alignItems:'flex-end'}}>
                         <InputText
                            label="Nome do Quadro"
                            name="boardTitle"
                            initialValue={formState.inputs.boardTitle.value}
                            initialisValid={formState.inputs.boardTitle.isValid}
                            errorMessage={[]}
                            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MAXLENGTH(12)]}
                            onInput={inputHandler}
                        />
                        <Tooltip tooltip="Cor do quadro" position="top-end">
                            <div style={{width: '36px', height: '36px', backgroundColor: `${newBoardColor}`, border: '1px solid', borderColor: `${newBoardColor}`, borderRadius: '8px'}} onClick = {toggleColorPicker}/>
                        </Tooltip>
                    </div>
                </Modal>
                <Modal
                    show={showColorPicker}
                    closeModal={toggleColorPicker}
                    title="Selecione a cor"
                    footer={
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', padding: '10px 0px', gap: '10px'}}>
                            <Button variant="outlined" color="primary" onClick={toggleColorPicker}>Cancelar</Button>
                            <Button variant="contained" color="primary" type="submit">Adicionar</Button>
                        </div>
                    }
                >
                    <ColorPicker />
                </Modal>
            </ToolbarBoardsStyled>
        </>
    );
};

export default ToolbarBoards;