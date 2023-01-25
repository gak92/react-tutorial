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
        <button onClick={(name)=>this.props.clickHandler("John")}>Child Button</button>
        <input type="text" onChange={(e)=>this.props.clickHandler(e)} />
      </div>
    )
  }
}

export default Child