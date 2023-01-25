// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Child from './Child';

export class Parent extends Component {
  // static propTypes = {}
  constructor(props) {
    super(props);
    this.state = props;
  }

  parentHandler = (name) => {
    console.log("Parent click", name);
    this.setState({
      name:name,
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