import React from 'react';
import Dropdown from './components/Dropdown';
import './App.css';

function App() {
  const [fonts, setFonts] = React.useState(['Abril Fatface', 'Cinzel', 'Cormorant', 'Cormorant SC', 'Tapestry', 'Righteous', 'Orbitron', 'Syncopate', 'Montserrat']);

  return (
    <>
      <Dropdown listItems={fonts}></Dropdown>
    </>
  )
}

export default App;
