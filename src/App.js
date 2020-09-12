import React, { Component } from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: '0'
    }
  }

  handleClick = (e) => {
    this.updateInput(e);
    this.updateOutput(e);
  }

  updateInput = (e) => {
    this.setState({
      input: this.state.input + e.target.textContent,
    })
  }

  updateOutput = (e) => {
  const number = parseInt(e.target.textContent, 10);
  if (Number.isInteger(number)){ 
    this.setState({
      output: this.state.output.charAt(0) === '0' ? this.state.output.slice(1) + e.target.textContent : this.state.output + e.target.textContent 
      });
    } else {
      this.setState({
      output: e.target.textContent 
      })
    }
  }

  render() {
    return (
      <div id="calculator">
        <Display input={this.state.input} output={this.state.output}/>
        <Buttons handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default App
