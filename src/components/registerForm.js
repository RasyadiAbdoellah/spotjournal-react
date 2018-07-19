import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      passwordConfirm: ''
    }
  }

  onInputChange = e => {
    this.props.handleUserInput(e)
  }

  onPassConfirmChange = e => {
    const value = e.target.value
    this.setState({passwordConfirm: value})
    this.props.user.password == value ? console.log('passwords match') : console.log('passwords do not match')
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
        <input id="confirm-password" type="password" value={this.state.passwordConfirm} onChange={this.onPassConfirmChange}/>
      </label>
      <input value="Submit" type="submit"/>
      </form>
    )
  }
}

export default Register