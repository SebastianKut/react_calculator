import React, { Component } from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';
import './App.css';


const math = window.math;
const operatorsToHandle = '+x/';
const allOperators = '+x/*-'

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

  //updates input state which is a string that I use to calculate result
  updateInput = (e) => {
    //handle '.' decimal points
    if (e.target.textContent === '.') {
      this.handleDecimal()
    //handle operators excluding minus (-) by checkin if string of operators that I want to handle includes entered character 
    } else if (operatorsToHandle.includes(e.target.textContent)) {
      this.handleOperator(e.target.textContent)
    //handle digits  
    } else {
      this.setState({
        input: this.state.input + e.target.textContent 
      })
    }
  }

  //updates output state which is used to show character entered as well as displaying result
  updateOutput = (e) => {
    //check if character entered is an integer    
    const number = parseInt(e.target.textContent, 10);
    if (Number.isInteger(number)){ 
      //update state by adding a number entered to the displayed state - if current state is 0 trim it 
      this.setState({
        output: !parseInt(this.state.output.charAt(0), 10) > 0 ? this.state.output.slice(1) + e.target.textContent : this.state.output + e.target.textContent 
        });
      //handle decimal point  
    } else if (e.target.textContent === '.') {
        this.handleDecimal()
      //handle operators by updating state to entered operator only  
      } else {
        this.setState({
        output: e.target.textContent 
        })
      }
  }

  //handle decimal point
  handleDecimal = () => {
    //get current number value from state output and check if it includes '.' already then update input and output states
    const currentValue = this.state.output;
    const includesDecimal = currentValue.includes('.');
    includesDecimal ? this.setState({output: this.state.output + '', input: this.state.input + ''}) : this.setState({output: this.state.output + '.', input: this.state.input + '.'})
  }

  //handle operators excluding minus so we can input negative values
  handleOperator = (string) => {
    const inputStr = this.state.input;
    //if state input string ends with operator sign, get rid of them by calling trimOperators() then add operator entered (if its x replace it with *)
    allOperators.includes(inputStr.charAt(inputStr.length - 1)) ? 
      this.setState({input: this.trimOperators() + (string === 'x' ? '*' : string)}) :
      this.setState({input: inputStr + (string === 'x' ? '*' : string)})
  }

  //trim operators from the end of the state input and return trimmed string
  trimOperators = () => {
    const currentInput = this.state.input.split('');
    for (let i = currentInput.length-1; i >= 0; i--) {
      if (allOperators.includes(currentInput[i])) {currentInput.pop()} 
      else break;  
    }
    return currentInput.join('');
  }

  //calculate result by callin math.evaluate method form math.js library and update states - if string to be evaluated ends with operators trim it 
  calcResult = () => {
    const result = math.evaluate( this.trimOperators());
    this.setState({
     input: `${result}`, 
     output: `${result}`
    })
  }

  //clear results
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
