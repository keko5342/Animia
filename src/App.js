/* src/App.js */
import React from 'react';
import Loading from './components/Loading';
import ContentTop from './components/ContentTop';
import useServerStatus from './functions/useServerStatus';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme/themeContext';

const App = () => {
  const isOnline = useServerStatus();
  return (
    <div>
      <ThemeProvider theme={theme}>
        {isOnline ? <ContentTop /> : <Loading />}
      </ThemeProvider>
    </div>
  )
}

export default App;