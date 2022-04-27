import { ThemeProvider, createTheme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import React from 'react';
import Home from './components/Home'

const useStyles = makeStyles ({
  root:{
    
  }
});

function App() {
  const theme= createTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
     
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}></div>
      <Home />
    </ThemeProvider>
  );
}

export default App;
