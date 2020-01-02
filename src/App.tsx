import React from 'react';
import { Nav } from 'components/nav';
import {
  ThemeProvider,
  createMuiTheme,
  CssBaseline,
  makeStyles,
  createStyles,
  Theme,
  Container,
} from '@material-ui/core';
import { lime, grey } from '@material-ui/core/colors';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Main } from 'components/main';

const appTheme = createMuiTheme({
  palette: {
    primary: { main: lime.A700 },
    secondary: { main: grey[50] },
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      marginTop: theme.spacing(9),
      maxWidth: theme.breakpoints.values.lg,
      alignSelf: 'center',
    },
  }),
);

const App: React.FC = () => {
  const css = useStyles();
  return (
    <ThemeProvider theme={appTheme}>
      <Router>
        <Container>
          <Nav />
          <main className={css.main}>
            <Switch>
              <Route path='/welcome'>
                <Main />
              </Route>
              <Route path='/'>
                <Main />
              </Route>
            </Switch>
          </main>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
