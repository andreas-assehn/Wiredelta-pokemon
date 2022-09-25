import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from './SplashScreen';
import DetailScreen from './DetailScreen';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<SplashScreen />} />
        <Route path='/:pokemonId' element={<DetailScreen />} />
      </Routes>
    </div>
  );
}

export default App;
