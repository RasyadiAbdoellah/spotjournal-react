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
        password:'',
        passwordConfirm:'', 
      },
      visualFlags: {
        credentialSwitch: true
      }
     
    }
  }


  // submitCredentials changes its URL depending on which form is visible. This feels hacky, and theres a better way to this propbably, but it'll do for now.
  submitCredentials = () => {
    // object has to be built in http req as state has visual flags
    let dataPack
    
    if(this.state.visualFlags.credentialSwitch){
      dataPack = {
        credentials: {
          email: this.state.credentials.email,
          password: this.state.credentials.password
        }
      }

      axios.post(config.apiOrigin + '/sign-in', dataPack)
      .then(res => console.log('response is:', res))
      .catch(error => console.log('error is:', error))

    } else {

      dataPack = {
        credentials: {
          email: this.state.credentials.email,
          password: this.state.credentials.password,
          password_confirmation: this.state.credentials.passwordConfirm
        }
      }

      axios.post(config.apiOrigin + '/sign-up', dataPack)
      .then(res => console.log('response is:', res))
      .catch(error => console.log('error is:', error))
    }
  }

  //small function that returns boolean val depending on whether passwords match. Called inside of onSubmit
  passwordCompare = () => this.state.credentials.password == this.state.credentials.passwordConfirm ? true : false;



  onSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    if(this.state.visualFlags.credentialSwitch || (this.passwordCompare() && !this.state.visualFlags.credentialSwitch)){
      this.submitCredentials()
    } else {
      console.log('error')
    }
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
    this.setState({visualFlags: {[propName] : !this.state.visualFlags[propName] }})
  }

  render() {
    // define local fragment
    let toggledCredentialComponent

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