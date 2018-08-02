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

  loginHandler = (token) => {
    this.setState({ token })
  }
  
  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={ (props) => <Credentials token={this.state.token} isLoggedin={this.state.isLoggedIn} loginHandler={this.loginHandler}/> }/>
          <Route path="/dashboard" component={Dashboard} />
        </Switch> 
      </div>
    )
  }
}


export default App;
