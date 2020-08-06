import React, { lazy, Suspense, Component } from 'react';
import './App.css';

const About = lazy(() => import(/*webpackChunkName: "about"*/'./About.jsx'))

// ErrorBoundary
// componentDidCatch

class App extends Component {
  state = {
    hasError: false
  }
  // componentDidCatch () {
  //   this.setState(
  //     {
  //       hasError: true
  //     }
  //   )
  // }
  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }
  render() {
    if (this.state.hasError) {
      return <div>error</div>
    }
    return (
      <Suspense fallback={<div>loading</div>}>
        <About></About>
      </Suspense>
    );
  }
}

export default App;
