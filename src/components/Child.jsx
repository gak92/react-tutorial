// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Child extends Component {
  // static propTypes = {}
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={()=>this.props.clickHandler("John")}>Child Button</button>
      </div>
    )
  }
}

export default Child