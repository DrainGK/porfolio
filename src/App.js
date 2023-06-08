import React from 'react';
import "./styles.css"
import Navigation from './component/navigation/Navigation';
import Abilities from './pages/abilities/Abilities';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Character from './pages/Character/Character';
import Customization from './pages/Customization/Customization';
import Inventory from './pages/inventory/Inventory';
import Map from './pages/map/Map';
import Missions from './pages/Missions/Missions';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navigation />  
        <Routes>
          <Route path="/" element={<Navigate to="/abilities" />} />
          <Route path="/abilities" element={<Abilities />} />
          <Route path="/character" element={<Character />} />
          <Route path="/customization" element={<Customization />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/map" element={<Map />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;