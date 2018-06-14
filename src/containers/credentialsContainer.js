import React, { Component } from 'react';
import LoginForm from '../components/loginForm';


class CredentialsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      credentials:{
        email:'',
        password:''
      }
     
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.submitCredentials(this.state)
  }

  handleUserInput = (e) => {
    const values = this.state.credentials
    const updatedProp = e.target.id
    const updatedVal = e.target.value
    values[updatedProp] = updatedVal
    this.setState({credentials:values})
  }

  render() {

    return ( 
      <LoginForm user={this.state.credentials} handleUserInput={this.handleUserInput} onSubmit={this.onSubmit}/>
    )
  }
}

export default CredentialsContainer