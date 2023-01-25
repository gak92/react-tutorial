import React, { Component } from 'react';

export class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name] : e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit", e.target);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input type="text" name="username" onChange={this.handleChange} />
          <input type="email" name="email" onChange={this.handleChange} />

          <input type="submit" />

          <p>{this.state.username}</p>
          <p>{this.state.email}</p>
        </form>
      </div>
    )
  }
}

export default FormComponent;