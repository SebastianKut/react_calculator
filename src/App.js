import React, { Component } from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="calculator">
        <Display />
        <Buttons />
      </div>
    )
  }
}

export default App
