import React, { Component } from 'react';
import { Button } from "aws-amplify-react";
import awsconfig from '../../aws-exports'
import Amplify, { Auth } from "aws-amplify"
Amplify.configure(awsconfig);

class Auth0LoginButton extends Component {
  render() {
    return (
      <div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => Auth.federatedSignIn({provider: 'Auth0'})}
        >
          Sign In With Auth0
        </Button>
      </div>
    )
  }
}

export default Auth0LoginButton