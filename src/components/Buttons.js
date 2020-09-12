import React, { Component } from 'react'

class Buttons extends Component {

    render() {
        return (
        <div id="buttons">
            <div id="equals" className="btn" onClick={this.props.calcResult}>=</div>
            <div id="zero" className="btn" onClick={this.props.handleClick}>0</div>
            <div id="one" className="btn" onClick={this.props.handleClick}>1</div>
            <div id="two" className="btn" onClick={this.props.handleClick}>2</div>
            <div id="three" className="btn" onClick={this.props.handleClick}>3</div>
            <div id="four" className="btn" onClick={this.props.handleClick}>4</div>
            <div id="five" className="btn" onClick={this.props.handleClick}>5</div>
            <div id="six" className="btn" onClick={this.props.handleClick}>6</div>
            <div id="seven" className="btn" onClick={this.props.handleClick}>7</div>
            <div id="eight" className="btn" onClick={this.props.handleClick}>8</div>
            <div id="nine" className="btn" onClick={this.props.handleClick}>9</div>
            <div id="add" className="btn" onClick={this.props.handleClick}>+</div>
            <div id="subtract" className="btn" onClick={this.props.handleClick}>-</div>
            <div id="multiply" className="btn" onClick={this.props.handleClick}>x</div>
            <div id="divide" className="btn" onClick={this.props.handleClick}>/</div>
            <div id="decimal" className="btn" onClick={this.props.handleClick}>.</div>
            <div id="clear" className="btn" onClick={this.props.clearCalc}>C</div>
        </div> 
        )
    }
}

export default Buttons
