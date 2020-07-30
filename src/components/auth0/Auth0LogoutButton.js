import React from 'react';
import { Button } from "aws-amplify-react";
import awsconfig from '../../aws-exports';
import Amplify, { Auth } from "aws-amplify";
Amplify.configure(awsconfig);

const Auth0LogoutButton = () => {
  return (
    <div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => Auth.signOut()}
      >
        Sign Out With Auth0
      </Button>
    </div>
  )
}

export default Auth0LogoutButton;