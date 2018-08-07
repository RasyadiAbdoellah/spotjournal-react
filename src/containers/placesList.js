import React, { Component } from 'react';
import axios from 'axios';


class Places extends Component {
    constructor(props) {
        super(props)
        this.state = {
          data: []
        }
    }

  retrieveData = () => {
    axios.get(URLconfig.apiOrigin + '/places', {headers: { Authorization: 'Token token=' + this.props.token }})
    .then(res => {
      console.log('response data is:', res.data)
      this.setState({ data: res.data })
    })
  }


  }
export default Places