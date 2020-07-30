import React from 'react';
import MainContent from './MainContent';
import CustomSignIn from './CustomSignIn';
import useLoginStatus from '../functions/useLoginStatus';

const ContentTop = () => {
  const isLogin = useLoginStatus();
  return(
    <div>
      {isLogin ? <MainContent /> : <CustomSignIn />}
    </div>
  )
}

export default ContentTop;