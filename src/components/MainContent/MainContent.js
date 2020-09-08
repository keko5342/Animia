import React, { useState, useEffect, useRef } from 'react';
import LeftContent from './LeftContainer/LeftContent';
import RightContent from './RightContainer/RightContent';
import styled from 'styled-components';

const MainContent = () =>{
  const [SelectedUser, setSelectedUser] = useState()
  const ResultComponent = useRef();

  useEffect(() => {
    ResultComponent.current.test()
  }, [SelectedUser])

  function onClickUserCallback(user){
    setSelectedUser(user)
  }

  return (
    <Container>
      <LeftContent onClickUser={onClickUserCallback} User={SelectedUser} />
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