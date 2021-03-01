import './App.css';

import { Add, Admin, Check, Close, Error, Settings, Users, Warning }  from './components/icons';
import IconButton from './components/core/IconButton';
import Button from './components/core/Button';

function App() {
  return (
    <>
      <IconButton color="primary" variant="contained" disabled>
        <Check />
      </IconButton>
      <Button variant="outlined" >
        <Warning /> Button
      </Button>
    </>
  );
}

export default App;
