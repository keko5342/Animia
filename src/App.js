/* src/App.js */
import React from 'react';
import Loading from './components/Loading';
import ContentTop from './components/ContentTop';
import useServerStatus from './functions/useServerStatus';

const App = () => {
  const isOnline = useServerStatus();
  return (
    <div>
      {isOnline ? <ContentTop /> : <Loading />}
    </div>
  )
}

export default App;