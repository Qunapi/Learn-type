import React from 'react';
import { Nav } from 'components/nav';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { lime, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: { main: lime['A700'] },
    secondary: { main: grey[50] },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <header className='App-header'>
          <Nav></Nav>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default App;
