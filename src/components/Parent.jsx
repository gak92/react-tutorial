// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Child from './Child';

export class Parent extends Component {
  // static propTypes = {}
  constructor(props) {
    super(props);
    this.state = props;
  }

  parentHandler = (e) => {
    console.log("Parent click", e.target.value);
    this.setState({
      name:e.target.value,
    });
  }

  render() {
    return (
      <div>
        Parent
        <Child clickHandler={this.parentHandler}  />
      </div>
    )
  }
}

export default Parent;