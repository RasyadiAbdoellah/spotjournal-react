import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Credentials from './containers/credentialsContainer';
import Dashboard from './containers/dashboard'


class App extends Component {
  constructor() {
    super()
    this.state = {
      token:'',
      isLoggedIn: false
    }
  }

// loginHandler is a state updater. There is no error checking here, and it assumes that the token is valid.
  loginHandler = (token) => {
    if(token.length !== 0){
      this.setState({ token, isLoggedIn: true })
    }
  }
  
  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={ (props) => <Credentials token={this.state.token} isLoggedIn={this.state.isLoggedIn} loginHandler={this.loginHandler}/> }/>
          <Route path="/dashboard" render={ (props) => <Dashboard token={this.state.token}/> } />
        </Switch> 
      </div>
    )
  }
}


export default App;
