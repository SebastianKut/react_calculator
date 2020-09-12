import React, { Component } from 'react'

class Buttons extends Component {
    render() {
        return (
        <div id="buttons">
            <div id="equals" className="btn">=</div>
            <div id="zero" className="btn">0</div>
            <div id="one" className="btn">1</div>
            <div id="two" className="btn">2</div>
            <div id="three" className="btn">3</div>
            <div id="four" className="btn">4</div>
            <div id="five" className="btn">5</div>
            <div id="six" className="btn">6</div>
            <div id="seven" className="btn">7</div>
            <div id="eight" className="btn">8</div>
            <div id="nine" className="btn">9</div>
            <div id="add" className="btn">+</div>
            <div id="substract" className="btn">-</div>
            <div id="multiply" className="btn">x</div>
            <div id="divide" className="btn">/</div>
            <div id="decimal" className="btn">.</div>
            <div id="clear" className="btn">AC</div>
        </div> 
        )
    }
}

export default Buttons
