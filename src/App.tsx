import React from 'react';

import LikeButton from './components/LikeButton'
import './App.css';
interface IThemeProps {
  [key: string]: {color: string; background: string;}
}

const themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee'
  },
  'dark': {
    color: '#fff',
    background: '#222'
  }
}

export const ThemeContext = React.createContext(themes.light)


function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <LikeButton/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
