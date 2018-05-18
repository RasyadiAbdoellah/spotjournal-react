import React, { Component } from 'react';
import './App.css';
import Credentials from './containers/credentialsContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      clickCounter: 0
    }
  }
  stateHook = () => {
    let counter = this.state.clickCounter
    counter++
    this.setState({
      clickCounter: counter
    })
  }
  
  render() {
    const count = this.state.clickCounter

    return (
      <div className="App">
        <Credentials onClick={this.stateHook} number={count}/>
      </div>
    )
  }
}

export default App;
