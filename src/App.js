import React, { Component } from 'react';
import './App.css';
import Credentials from './containers/credentialsContainer';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import config from './config';

class App extends Component {
  constructor() {
    super()
    this.state = {
      token:''
    }
  }

  submitCredentials = (credentials) => {
    console.log(credentials)
    axios.post(config.apiOrigin + '/sign-in', credentials)
    .then(res => console.log('response is:', res))
    .catch(error => console.log('error is:', error))
  }
  
  render() {

    return (
      <div className="App">
        <Credentials submitCredentials={this.submitCredentials}/>
      </div>
    )
  }
}

const AppWithRouter = withRouter(App)

export default AppWithRouter;
