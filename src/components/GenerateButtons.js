import React from 'react';

// Component to generate buttons for the alphabet
export default function GenerateButtons(props) {
  const { handleGuess, guessed } = props;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
  // Map over the alphabet string to create an array of buttons
  const buttons = alphabet.split('').map((letter, index) => (
    <button
      className='btn-hangman'
      key={index}
      value={letter}
      onClick={handleGuess}
      disabled={guessed.has(letter)}
    >
      {letter}
    </button>
  ));

  // Returns the buttons
  return (
    <div className='container-hangman-btns'>
      {buttons}
    </div>
  );
}
  
