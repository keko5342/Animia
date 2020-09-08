import React from 'react';
import awsconfig from '../../aws-exports';
import Amplify, { Auth } from "aws-amplify";
import { Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
Amplify.configure(awsconfig);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CatchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 60vh;
`;

const SignInButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 10vh;
`;

async function login(){
  await Auth.federatedSignIn({provider: 'Auth0'});
}

const Auth0LoginButton = () => {
  return (
    <Container>
      <List>
        <ListItem>
          <CatchContainer>
            Twitterリスト整理ツール『Animia』プレビュー
          </CatchContainer>
        </ListItem>
        <Divider variant="middle" />
        <ListItem>
          <SignInButtonContainer>
            <Button onClick={() => login()} variant="outlined" color="primary">
              Twitterでサインイン
            </Button>
          </SignInButtonContainer>
        </ListItem>
      </List>
    </Container>
  )
}

export default Auth0LoginButton;