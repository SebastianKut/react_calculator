import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {

    //trim 0 at the begining of the string
    formatHistory = (string) => {
     return parseInt(string.charAt(0), 10) == 0 ? string.slice(1) : string
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

Display.propTypes = {
  input: PropTypes.string.isRequired,
  output: PropTypes.string.isRequired
}

export default Display
