import React, { useState } from 'react';

// Function to display instructions on how to play the game
export default function Help() {
  
  // State to control display of help section
  const [show, setShow] = useState(false);

 // Displays help section when button is clicked [1]
  return (
    <>
      <button className='btn-howplay' type='button' onClick={() => setShow(!show)}>
        {(show === false) ? 'Show Help' : 'Hide Help'}
      </button>
      {show && (
        < div className='howPlay'> 
          <h2>How to Play</h2>
          <p>Hangman is a word-guessing game.</p>
          <ul>
            <li>The goal is to guess the secret word by suggesting letters, one at a time.</li>
            <li>The player has a limited number of guesses, and with each incorrect guess, a part of a hangman is drawn.</li>
            <li>If the hangman is completed before the player guesses the word, the game is lost.</li>
          </ul>
          <h3>How to Start a New Game</h3>
          <p>To start a new game, simply click the "New Game" button.</p>
          <h3>How to Make a Guess</h3>
          <p>To make a guess, click on the letters on the on-screen keyboard. If the letter is in the secret word, it will be revealed. If the letter is not in the word, a part of the hangman will be drawn. You can only guess each letter once.</p>
          <h3>Winning and Losing</h3>
          <p>If the player correctly guesses the word before the hangman is completed, the game is won. If the hangman is completed before the word is guessed, the game is lost.</p>
        </div>
      )}
    </>
  );
}


// REFERENCES
// [1] Changed text on button with ternary operator (retrieved 15.03.2023) https://www.youtube.com/watch?v=uXk62ZgPH-4