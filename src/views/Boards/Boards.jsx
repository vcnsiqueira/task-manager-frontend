import React from 'react';

import Avatar from '../../components/core/Avatar';
import BoardCard from '../../components/BoardCard';

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

    return (
        <>
            <div style={{margin: '2rem 3rem', display: 'flex', gap: '25px', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Avatar name={username} size="extralarge"/>
                <div style={{display: 'flex', flexFlow: 'column wrap', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    <h1 style={{color:'#28527A', margin: '0px', fontSize: '30px'}}>Olá {username}!</h1>
                    <h3 style={{margin: 'px', color: '#808080', fontSize: '16px'}}>Quantidade de quadros: <span style={{color: '#F0A500'}}>{boards.length}</span></h3>
                </div>
            </div>
            <div style={{margin: '2rem 5%', display: 'flex', gap: '30px', flexFlow: 'row wrap', justifyContent: 'flex-start', alignItems: 'center'}}>
                {boards.map((board) => (
                    <BoardCard key={board.id} title={board.title} color={board.color} numberOfTasks={board.tasks} dateOfCreation={board.date} bookmark={board.bookmarked}/>
                ))}
            </div>
        </>
    );
};

export default Boards;