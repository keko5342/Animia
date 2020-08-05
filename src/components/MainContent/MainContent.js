import React from 'react';
import LeftContent from './LeftContainer/LeftContent';
import RightContent from './RightContainer/RightContent';
import styled from 'styled-components';

const MainContent = () => {
  return (
    <Container>
      <LeftContent />
      <RightContent />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export default MainContent;