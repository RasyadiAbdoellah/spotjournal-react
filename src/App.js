import React, { Component } from 'react';
import './App.css';
import Credentials from './containers/credentialsContainer';
import { withRouter } from 'react-router-dom';


class App extends Component {
  constructor() {
    super()
    this.state = {
      token:''
    }
  }

  
  
  render() {

    return (
      <div className="App">
        <Credentials token={this.state.token}/>
      </div>
    )
  }
}

const AppWithRouter = withRouter(App)

export default AppWithRouter;
