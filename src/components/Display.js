import React, { Component } from 'react'

class Display extends Component {
    render() {
        return (
        <div id="display">
          <div id="digit-history">{this.props.input}</div>
        <div id="digit-entered">{this.props.output}</div>
        </div>
        )
    }
}

export default Display
