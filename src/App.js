/* src/App.js */
import React, { Component } from 'react'
import { API_URL } from './config'
import Loading from './components/src/Loading'
/*
import Content from './components/src/Content'
import LoginButton from './components/auth0/LoginButton'
import LogoutButton from './components/auth0/LogoutButton'
import Profile from './components/auth0/Profile'
*/
import CustomSignIn from './components/src/CustomSignIn'
//import { withAuthenticationRequired } from '@auth0/auth0-react'

export default class App extends Component {

  // initialize
  state = {
    loading: true
  }

  // APIサーバの起動確認
  componentDidMount() {
    fetch(`${API_URL}/wake-up`)
      .then(res => {
        if (res.ok) {
          this.setState({ loading: false })
          console.log('server is wake up')
          //test()
        }
      })

  }

  render () {
    return (
      <div>
        {this.state.loading
          ? <Loading />
          : <CustomSignIn />

        }
      </div>  
    )
  }
}