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
    if (e.target.textContent === '.') {
      this.handleDecimal()
    } else {
      this.setState({
        input: this.state.input + (e.target.textContent === 'x' ? '*' : e.target.textContent)
      })
      }
  }

  updateOutput = (e) => {
  const number = parseInt(e.target.textContent, 10);
  if (Number.isInteger(number)){ 
    this.setState({
      output: !parseInt(this.state.output.charAt(0), 10) > 0 ? this.state.output.slice(1) + e.target.textContent : this.state.output + e.target.textContent 
      });
    } else if (e.target.textContent === '.') {
      this.handleDecimal()
    } else {
      this.setState({
      output: e.target.textContent 
      })
    }
    ;
  }

  handleDecimal = () => {
    const currentValue = this.state.output;
    const includesDecimal = currentValue.includes('.');
    includesDecimal ? this.setState({output: this.state.output + '', input: this.state.input + ''}) : this.setState({output: this.state.output + '.', input: this.state.input + '.'})
  }


  calcResult = (e) => {
    const result = math.evaluate(this.state.input);
    this.setState({
     output: result
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
