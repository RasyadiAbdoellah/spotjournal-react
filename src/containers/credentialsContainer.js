import React, { Component } from 'react';

class CredentialsContainer extends Component {

  onClick = (e) => {
    this.props.onClick()
  }

  render() {

    return ( 
      <button onClick={this.onClick}>{this.props.number}</button>
    )
  }
}

export default CredentialsContainer