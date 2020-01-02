import React, { useState, useEffect } from 'react';
import {
  TextField,
  createStyles,
  Theme,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainPaper: {
      marginTop: theme.spacing(10),
      maxWidth: theme.breakpoints.values.lg,
      alignSelf: 'center',
      minHeight: 600,
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(2),
    },
    textFieldWrapper: {
      width: '90%',
      padding: theme.spacing(5),
    },
    textField: {
      width: '100%',
    },

    input: {
      width: '90%',
      display: 'flex',
      flexGrow: 1,
    },
    wordsContainer: {
      padding: theme.spacing(5),
      display: 'flex',
      flexWrap: 'wrap',
    },
  }),
);

const wordsArr = ['4', '5', 'hello'];

const rounded = {
  rounded: true,
};

const shuffleArray = (array: string[]) => array.sort(() => Math.random() - 0.5);

export const Main = () => {
  const [iteration, setIteration] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [words, setWords] = useState(new Array(200));

  useEffect(() => {
    let newWords: string[] = [];
    while (newWords.length < 200) {
      newWords = newWords.concat(shuffleArray(wordsArr));
    }
    setWords(newWords);
  }, [wordsArr]);

  const css = useStyles();

  return (
    <div>
      <Paper className={css.mainPaper}>
        <Paper className={css.input} {...rounded}>
          <div className={css.wordsContainer}>
            <Typography>
              {words.map((word, i) => (
                <span key={i}>{` ${word} `}</span>
              ))}
            </Typography>
          </div>
        </Paper>
        <div className={css.textFieldWrapper}>
          <TextField
            className={css.textField}
            id='outlined-basic'
            label='type'
            variant='outlined'
          />
        </div>
      </Paper>
    </div>
  );
};
