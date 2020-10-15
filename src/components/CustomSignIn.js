import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Auth0LoginButton from './auth0/Auth0LoginButton';
import Logo from './Animia.png';
import Text from './text.png';
import CenterImage from './Center2.png';

const useStyles = makeStyles({
  root: {
    height: 60,
    padding: 0,
    background: "white",
  },
});

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const LogoPhoto = styled.img`
  pointer-events: none;
`;

const CatchContainer = styled.div`
  display: flex;
  width: 95vw;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3vw;
`;

const ColumnTop = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const ColumnBottom = styled.div`
  display: flex;
  justify-content: center;
`;

const CatchCopy = styled.img`
  max-Width: 30vw;
  pointer-events: none;
`;

const CenterPhoto = styled.img`
  max-Width: 60vw;
  pointer-events: none;
`;

const CustomSignIn = () => {
  const classes = useStyles();

  return (
    <Container>
      <AppBar
        position="fixed"
        classes={{root: classes.root}}
      >
        <Toolbar>
          <LogoPhoto src={Logo} alt={"logo"} />
        </Toolbar>
      </AppBar>
      <CatchContainer>
        <CenterPhoto src={CenterImage} alt={"center"} />
        <ColumnContainer>
          <ColumnTop><CatchCopy src={Text} /></ColumnTop>
          <ColumnBottom><Auth0LoginButton /></ColumnBottom>
        </ColumnContainer>
      </CatchContainer>
    </Container>
  )
}

export default CustomSignIn;