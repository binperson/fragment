import React, { useState } from 'react';

import LikeButton from './components/LikeButton'
import LikeButtonTwo from './components/LikeButtonTwo'
import LikeButtonThree from './components/LikeButtonThree'
import MouseTracker from './components/MouseTracker'

import useMousePosition from './hooks/useMousePosition'

import logo from './logo.svg';
import './App.css';

function App() {
  const [ show, setSow ] = useState(true)
  const positions = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <p>X: {positions.x}, Y : {positions.y}</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <LikeButton/>
          Learn React
        <LikeButtonTwo/>
          Learn React
        <LikeButtonThree/>
          Learn React
        <LikeButtonThree/>
          useEffect
          <button onClick={ () => { setSow(!show)} }>Toggle Tracker</button>
        {show && <MouseTracker/>}
      </header>
    </div>
  );
}

export default App;
