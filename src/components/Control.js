import React, { Component } from 'react';
import PropTypes from 'prop-types';

function createWarning(funcName) {
  return () => console.log(`${funcName} is not defined`);
}

class Control extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onPlus}>+</button>
        <button onClick={this.props.onSubtract}>-</button>
        <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
      </div>
    );
  }
}

Control.defaultProps = {
  onPlus: createWarning('onPlus'),
  onSubtract: createWarning('onSubtract'),
  onRandomizeColor: createWarning('onRandomizeColor'),
};
Control.propTypes = {
  onPlus: PropTypes.func,
  onSubtract: PropTypes.func,
  onRandomizeColor: PropTypes.func,
};

export default Control;
