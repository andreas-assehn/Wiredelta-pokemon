import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SplashScreen from './SplashScreen';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<SplashScreen />} />
        <Route path='/:pokemonId' />
      </Routes>
    </div>
  );
}

export default App;
