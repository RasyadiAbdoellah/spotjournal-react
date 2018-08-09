import React, { Component } from 'react';
import axios from 'axios';
import config from '../config';
import PlaceForm from '../components/placeForm'

export default class PlaceFormContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      values: {}

    }

    
  }

  render() {
    return(
      <PlaceForm values={this.state.values}/>
    )
  }
}