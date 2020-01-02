import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {
  Toolbar,
  makeStyles,
  createStyles,
  Theme,
  IconButton,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      justifyContent: 'center',
    },
    nav: {
      display: 'flex',
      flexDirection: 'row-reverse',
      width: `100%`,
      [theme.breakpoints.up('md')]: {
        width: theme.breakpoints.values.md,
      },
    },
    button: {
      color: theme.palette.text.primary,
    },
  }),
);

export const Nav = () => {
  const css = useStyles();
  return (
    <AppBar>
      <Toolbar className={css.toolbar}>
        <nav className={css.nav}>
          <IconButton aria-label='profile' className={css.button}>
            <AccountBoxIcon />
          </IconButton>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
