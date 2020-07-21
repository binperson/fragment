import React from 'react';

import LikeButton from './components/LikeButton'
import LikeButtonTwo from './components/LikeButtonTwo'
import LikeButtonThree from './components/LikeButtonThree'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <LikeButton/>
          Learn React
        <LikeButtonTwo/>
          Learn React
        <LikeButtonTwo/>
          Learn React
        <LikeButtonThree/>
      </header>
    </div>
  );
}

export default App;
