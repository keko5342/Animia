import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { API_URL } from '../../config'
import { Auth } from '@aws-amplify/auth'

export default class Requester extends Component {
  startReq = () => {
    const { title } = this.props
    console.log('button pushed!')
    if(title === "login"){
      this.auth0()
      //console.log("test")
    }else{
      fetch(`${API_URL}/${title}sample`)
      .then(res => {
        return res.json();
      })
      .then(myJson => {
        console.log(JSON.stringify(myJson));
      });
    }
  }

  async auth0(){
    await Auth.federatedSignIn({provider: 'Auth0'})
  }

  render() {
    const { title } = this.props

    return (
      <div>
        <button 
          onClick={this.startReq} 
          className={`${title} buttons`}
        >{title}</button>
      </div>
    )
  }
}

Requester.propTypes = {
  title: PropTypes.string.isRequired
}