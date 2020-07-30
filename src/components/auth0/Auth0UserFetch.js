import React from 'react';
import { Button } from "aws-amplify-react";
import awsconfig from '../../aws-exports';
import Amplify from "aws-amplify";
Amplify.configure(awsconfig);

async function fetch(){
  //fetch(`${API_URL}/callback${qs}`)
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