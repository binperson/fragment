import React, { createContext, useState } from 'react';
import './App.css';

const BatreryContext = createContext(90)
const OnlineContext = createContext()

function Leaf () {
  return (<BatreryContext.Consumer>
    {
      battery => (
        <OnlineContext.Consumer>
          {
            online => <h1>Battery: {battery}, online: {String(online)}</h1>
          }
        </OnlineContext.Consumer>
      )
    }
  </BatreryContext.Consumer>)
}

function Middle () {
  return (<Leaf/>)
}

function App() {
  const [battery, setBattery] = useState(60)
  const [online, setOnline] = useState(false)
  return (
    //<BatreryContext.Provider value={ battery }>
      <OnlineContext.Provider value={ online }>
        <button onClick={() => {
          setBattery(battery + 1)
        }}>add</button>
        <button onClick={() => {
          setOnline(!online)
        }}>switchOnline</button>
        <Middle/>
      </OnlineContext.Provider>
    //</BatreryContext.Provider>
  );
}

export default App;
