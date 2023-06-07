import React from 'react';
import "./styles.css"
import Navigation from './component/navigation/Navigation';
import Abilities from './pages/abilities/Abilities';

const App = () => {
  return (
    <div className='app'>
      <Navigation />
      <Abilities />
    </div>
  );
};

export default App;