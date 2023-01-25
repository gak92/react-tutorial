/* eslint-disable */
// import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Component1 extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      name: this.props.name,
    };
    this.clickHandler.bind(this);
  }

  clickHandler(e) {
    console.log('clicked from class: ', e.target);
    this.setState({
      name: this.state.name + '.',
    });
    console.log("NAME: ", this.state.name);
  }

  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <button onClick={(e) => this.clickHandler(e)}>
          Click Me
        </button>
      </div>
    );
  }
}

export default Component1;

// Component1.propTypes = {
//   name: PropTypes.string,
// };

// Component1.defaultProps = {
//   name: 'Default',
// };
