import React, { Component } from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';

import './App.css';


const math = window.math;

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
      input: this.state.input + e.target.textContent
    })
  }

  updateOutput = (e) => {
  const number = parseInt(e.target.textContent, 10);
  if (Number.isInteger(number)){ 
    this.setState({
      output: !parseInt(this.state.output.charAt(0), 10) > 0 ? this.state.output.slice(1) + e.target.textContent : this.state.output + e.target.textContent 
      });
    } else {
      this.setState({
      output: e.target.textContent 
      })
    };
  }

  calcResult = (e) => {
    this.setState({
      output: `${math.evaluate(this.state.input)}`
    })
  }

  clearCalc = () => {
    this.setState({
      input: '',
      output: '0'
    })
  }


  render() {
    return (
      <div id="calculator">
        <Display input={this.state.input} output={this.state.output}/>
        <Buttons handleClick={this.handleClick} clearCalc={this.clearCalc} calcResult={this.calcResult}/>
      </div>
    )
  }
}

export default App
