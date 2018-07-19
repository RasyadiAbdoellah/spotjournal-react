import React, { Component } from 'react';
import LoginForm from '../components/loginForm';
import RegisterForm from '../components/registerForm';
import axios from 'axios';
import config from '../config';



class CredentialsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      credentials:{
        email:'',
        password:''
      },
      visualFlags: {
        credentialSwitch: true
      }
     
    }
  }

  submitCredentials = () => {
    // object has to be built in http req as state has visual flags
    const dataPack = {
      credentials: this.state.credentials
    }
    
    console.log(dataPack)

    axios.post(config.apiOrigin + '/sign-in', dataPack)
    .then(res => console.log('response is:', res))
    .catch(error => console.log('error is:', error))
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.submitCredentials()
  }

  handleUserInput = (e) => {
    const values = this.state.credentials
    const updatedProp = e.target.id
    const updatedVal = e.target.value
    values[updatedProp] = updatedVal
    this.setState({credentials:values})
  }

  switchHandler = e => {
    const propName = e.target.id
    console.log('this.switchHandler is called')
    this.setState({visualFlags: {[propName] : !this.state.visualFlags[propName] }})
  }

  render() {

    let toggledCredentialComponent = <LoginForm user={this.state.credentials} handleUserInput={this.handleUserInput} onSubmit={this.onSubmit}/>

    this.state.visualFlags.credentialSwitch ? toggledCredentialComponent = <LoginForm user={this.state.credentials} handleUserInput={this.handleUserInput} onSubmit={this.onSubmit}/> : toggledCredentialComponent = <RegisterForm user={this.state.credentials} handleUserInput={this.handleUserInput} onSubmit={this.onSubmit}/>
    
      return ( 
        <div>
          {toggledCredentialComponent}
          
          <button id='credentialSwitch' onClick={this.switchHandler}>
            switch
          </button>

        </div>
      ) 
      
  }
}

export default CredentialsContainer