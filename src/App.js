import React from 'react';
import './App.css';

import theme from './styles/theme';

import BoardCard from './components/BoardCard';

function App() {
  return (
    <>
      <BoardCard bookmark={true} color={theme.primary} title="Título" date="22/02/21" numberOfTasks={25}></BoardCard>
    </>
  );
}

export default App;
