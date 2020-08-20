import React from 'react';
import MainContent from './MainContent/MainContent';
import CustomSignIn from './CustomSignIn';
import useLoginStatus from '../functions/useLoginStatus';
//import Todos from './Todos';

const ContentTop = () => {
  const isLogin = useLoginStatus();
  return(
    <div>
      {isLogin ? <MainContent /> : <CustomSignIn />}
    </div>
  )
}

export default ContentTop;