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
    wordContainer: {
      background: theme.palette.grey[300],
      border: `1px solit ${theme.palette.grey[300]}`,
      borderRadius: '5px',
      padding: '10px',
    },
    rightLetter: {
      background: theme.palette.success.main,
    },
    wrongLetter: {
      background: theme.palette.error.main,
    },
    mainPaper: {
      marginTop: theme.spacing(10),
      maxWidth: theme.breakpoints.values.lg,
      alignSelf: 'center',
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
      margin: theme.spacing(5),
      maxHeight: '5em',
      display: 'flex',
      flexWrap: 'wrap',
      overflow: 'hidden',
    },
    words: {
      lineHeight: '1.8em',
      fontSize: '1.5em',
    },
  }),
);

const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5);

// [...Array(arrayLenght).keys()] - create array from 0 to n - 1
const createShuffledArray = (arrayLenght: number) =>
  shuffleArray([...Array(arrayLenght).keys()]);
class Words {
  private words: string[] = [];
  private currentWord: number = 0;
  private randomOrderArray: number[] = [];

  constructor(words: string[]) {
    this.words = words;
    this.currentWord = 0;
    this.randomOrderArray = createShuffledArray(words.length);
  }

  getWord() {
    const result = this.words[this.randomOrderArray[this.currentWord]];
    this.currentWord += 1;
    if (this.currentWord === this.words.length) {
      this.currentWord = 0;
      this.randomOrderArray = createShuffledArray(this.words.length);
    }
    return result;
  }
}
const wordsArr = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
 software like Aldus PageMaker including versions of Lorem Ipsum`.split(' ');

const colorizeWord = (currentWord: string, userInput: string, css: any) =>
  currentWord.split('').map((letter, i) => {
    let className = '';

    if (i < userInput.length && letter === userInput[i]) {
      className = css.rightLetter;
    }

    if (i < userInput.length && letter !== userInput[i]) {
      className = css.wrongLetter;
    }

    return (
      <span className={className} key={i}>
        {letter}
      </span>
    );
  });

export const Main = () => {
  const [userInput, setUserInput] = useState('');
  const [currentWord, setCurrentWord] = useState<string>('');

  const [wordsSet, setWordsSet] = useState(new Words([]));
  const [wordsQueue, setWordsQueue] = useState<string[]>([]);

  useEffect(() => {
    const newWordsSet = new Words(wordsArr);
    const newWordsQueue = new Array(200)
      .fill(null)
      .map(() => newWordsSet.getWord());
    setCurrentWord(newWordsQueue.shift() || '');
    newWordsQueue.push(wordsSet.getWord());
    setWordsQueue(newWordsQueue);
    setWordsSet(newWordsSet);
  }, []);

  const handleUserInput = (event: any) => {
    let newUserInput = event.target.value;
    if (newUserInput[newUserInput.length - 1] === ' ') {
      setCurrentWord(wordsQueue.shift() || '');
      wordsQueue.push(wordsSet.getWord());
      setWordsQueue([...wordsQueue]);
      newUserInput = '';
    }
    setUserInput(newUserInput);
  };

  const css = useStyles();

  return (
    <div>
      <Paper className={css.mainPaper}>
        <Paper className={css.input}>
          <div className={css.wordsContainer}>
            <Typography className={css.words}>
              <span className={css.wordContainer}>
                {colorizeWord(currentWord, userInput, css)}
              </span>
              {wordsQueue.map((word, i) => (
                <span key={i}>{` ${word} `}</span>
              ))}
            </Typography>
          </div>
        </Paper>
        <div className={css.textFieldWrapper}>
          <TextField
            onChange={handleUserInput}
            value={userInput}
            className={css.textField}
            id="outlined-basic"
            label="type"
            variant="outlined"
            autoFocus
          />
        </div>
      </Paper>
    </div>
  );
};
