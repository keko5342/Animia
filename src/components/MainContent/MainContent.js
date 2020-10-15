import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, AppBar, IconButton, Toolbar } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import LeftContent from './LeftContainer/LeftContent';
import RightContent from './RightContainer/RightContent';
import styled from 'styled-components';
import Logo from './Animia.png';

const useStyles = makeStyles({
  root: {
    height: 60,
    padding: 0,
    background: "white",
  },
  toolbarRoot: {
    flexDirection: "row"
  },
  menuButton: {
    alignSelf: "flex-start",
  },
  drawerRoot: {
    maxWidth: 500,
  },
});

const LogoPhoto = styled.img`
  pointer-events: none;
`;

const MainContent = () =>{
  const classes = useStyles();
  const [SelectedUser, setSelectedUser] = useState();
  const [MenuOpen, setMenuOpen] = useState(false);
  const ResultComponent = useRef();

  useEffect(() => {
    ResultComponent.current.test()
  }, [SelectedUser])

  function onClickUserCallback(user){
    setSelectedUser(user)
  }

  function handleMenuOpenChange(){
    setMenuOpen(!MenuOpen);
  }

  return (
    <Container>
      <AppBar
        position="fixed"
        classes={{root: classes.root}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleMenuOpenChange}
            edge="start"
            //classes={{root: classes.menuButton}}
          >
            <MenuIcon style={{color: "black"}} />
          </IconButton>
          <LogoPhoto src={Logo} alt={"logo2"} />
        </Toolbar>
      </AppBar>
      <Drawer
        open={MenuOpen}
        classes={{root: classes.drawerRoot}}
      >
        <IconButton onClick={handleMenuOpenChange}>
          <ChevronLeftIcon />
        </IconButton>
        <LeftContent onClickUser={onClickUserCallback} User={SelectedUser} handleMenuOpenChange={handleMenuOpenChange} />
      </Drawer>
      <RightContent ref={ResultComponent} User={SelectedUser} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export default MainContent;