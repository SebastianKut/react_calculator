import React, { Component } from 'react'

class Display extends Component {

    formatHistory = (string) => {
     return !parseInt(string.charAt(0), 10) > 0 ? string.slice(1) : string
    }

    render() {
        return (
        <div id="display-container">
          <div id="digit-history">{this.formatHistory(this.props.input)}</div>
        <div id="display">{this.props.output}</div>
        </div>
        )
    }
}

export default Display
