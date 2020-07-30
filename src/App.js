/* src/App.js */
import React from 'react';
import Loading from './components/Loading';
import Content from './components/Content';
import useServerStatus from './functions/useServerStatus';

const App = () => {
  const isOnline = useServerStatus();
  return (
    <div>
      {isOnline ? <Content /> : <Loading />}
    </div>
  )
}

export default App;