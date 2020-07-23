import React, { useState } from 'react';

import LikeButton from './components/LikeButton'
import LikeButtonTwo from './components/LikeButtonTwo'
import LikeButtonThree from './components/LikeButtonThree'
import MouseTracker from './components/MouseTracker'

import useURLLoader from './hooks/useURLLoader'
import withLoader from './components/withLoader'

import logo from './logo.svg';
import './App.css';
interface IShowResult {
  message: string
  status: string
}
const DogShow:React.FC<{data: IShowResult}> = ({ data }) => {
  return (
    <>
      <h2>Dog show: {data.status}</h2>
      <img src={data.message} alt=""/>
    </>
  )
}

function App() {
  const [ show, setSow ] = useState(true)
  const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
  const dogResult = data as IShowResult
  return (
    <div className="App">
      {
        loading ? <p>读取中</p>
        : <img src={dogResult && dogResult.message} alt=""/>
      }
      <WrappedDogShow/>
      <header className="App-header">
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
          <button onClick={ () => { setSow(!show)} }>refresh dog img</button>
        {show && <MouseTracker/>}
      </header>
    </div>
  );
}

export default App;
