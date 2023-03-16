import React, { useState } from 'react';
import HangmanImage from './HangmanImage';
import GenerateButtons from './GenerateButtons';
import WinnerOrLoser from "./WinnerOrLoser";
import GuessedWord from './GuessedWord';
import ResetGame from './ResetGame';
import Help from './Help';
import { getRandomWord } from '../utils/words';
import '../assets/css/App.css';


// Main component of Hangman game
export default function Hangman() {
  
  // Setting up the states
  const [nWrong, setNWrong] = useState(0);
  const [guessed, setGuessed] = useState(new Set());
  const [answer, setAnswer] = useState(getRandomWord());
  const [playable, setPlayable] = useState(true);

  // Defines max number of wrong guesses
  const maxWrong = 10;

  // Handles input guesses from user
  const handleGuess = (e) => {
    if (playable) {
      let ltr = e.target.value;
      setGuessed((prevGuessed) => new Set([...prevGuessed, ltr]));
      setNWrong((prevNWrong) => prevNWrong + (answer.includes(ltr) ? 0 : 1));
    }
  }

  // Resets the game
  const resetGame = () => {
    setNWrong(0);
    setGuessed(new Set());
    setAnswer(getRandomWord());
    setPlayable(true);
  }

  // Returns the guessed word
  const guessedWord = () => {
    return (
      answer.split('').map(ltr => (guessed.has(ltr) ? ltr : '_'))
    );
  }

  // Checks if the game is won or lost
  const isWinner = (answer === guessedWord().join(''));
  const isLoser = (nWrong === maxWrong);

  // Returns the JSX for the game to be rendered
  return (
    <div className='hangman'>
      <HangmanImage nWrong={nWrong} />
      <WinnerOrLoser isWinner={isWinner} isLoser={isLoser} answer={answer} setPlayable={setPlayable} />
      {!isWinner && !isLoser && <GuessedWord guessedWord={guessedWord()} />}
      <GenerateButtons handleGuess={handleGuess} guessed={guessed} />
      <div>
        <ResetGame resetGame={resetGame} />
        <Help />
      </div>
    </div>
  );
}


