import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props)
  }

  onInputChange = e => {
    this.props.handleUserInput(e)
  }

  render() {

    return ( 
      <form onSubmit={this.props.onSubmit}>
      
      <label>
        Email:
        <input id="email" type="text" value={this.props.user.username} onChange={this.onInputChange}/>
      </label>
      <label>
        Password:
        <input id="password" type="password" value={this.props.user.password} onChange={this.onInputChange}/>
      </label>
      <label>
        Confirm Password:
        <input id="passwordConfirm" type="password" value={this.props.user.passwordConfirm} onChange={this.onInputChange}/>
      </label>
      <input value="Submit" type="submit"/>
      </form>
    )
  }
}

export default Register