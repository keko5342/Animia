import React from 'react';
import CustomSignIn from './CustomSignIn';
import useLoginStatus from '../functions/useLoginStatus';

const Content = () => {
  const isLogin = useLoginStatus();
  return(
    <div>
      {isLogin ? <div>true</div> : <CustomSignIn />}
    </div>
  )
}

export default Content;