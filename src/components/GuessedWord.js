import React from 'react';

// Component to display the guessed word
export default function GuessedWord(props) {
  const { guessedWord } = props;

  // Returns the guessed word
  return (
    <div className='guessed-word'>
      {guessedWord.map((ltr, index) => (<span key={index} > {ltr}</span>))}
    </div>
  );
}
