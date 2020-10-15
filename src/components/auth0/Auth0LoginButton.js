import React from 'react';
import awsconfig from '../../aws-exports-custom';
import Amplify, { Auth } from "aws-amplify";
import { Button } from '@material-ui/core';
Amplify.configure(awsconfig);

async function login(){
  await Auth.federatedSignIn({provider: 'Auth0'});
}

const Auth0LoginButton = () => {
  return (
    <Button
      onClick={() => login()} variant="contained" color="primary"
      size="large"
    >
      TwitterIDで始める
    </Button>
  )
}

export default Auth0LoginButton;