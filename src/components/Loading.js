import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Loading = () => {
  return (
    <Container>
      <CircularProgress size={80} />
    </Container>
  )
}
export default Loading;
