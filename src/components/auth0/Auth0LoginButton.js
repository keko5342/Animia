import React from 'react';
import { Button } from "aws-amplify-react";
import awsconfig from '../../aws-exports';
import Amplify, { Auth } from "aws-amplify";
Amplify.configure(awsconfig);

async function login(){
  await Auth.federatedSignIn({provider: 'Auth0', token: 'code'});
}

const Auth0LoginButton = () => {
  return (
    <div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => login()}
      >
        Sign In With Auth0
      </Button>
    </div>
  )
}

export default Auth0LoginButton;