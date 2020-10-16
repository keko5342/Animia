import React from 'react';
import { Button } from "aws-amplify-react";
import awsconfig from '../../aws-exports-custom';
import Amplify from "aws-amplify";
Amplify.configure(awsconfig);

async function fetch(){

}

const Auth0UserFetch = () => {
  return (
    <div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => fetch()}
      >
        Username
      </Button>
    </div>
  )
}

export default Auth0UserFetch;