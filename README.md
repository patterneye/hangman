# ReactJS Hangman Game

This is a fun version of the old classic word game 'Hangman', bootstrapped using ReactJS.  
By default, if running on your local machine, it will run on http://localhost:3000/
Rules of the game are at the bottom of this Readme file.
This code is at development stage and a production version has not yet been created.  
To install this version on your own system:

## Available Scripts

In the directory you wish to install it use:

### `npm install`

Then in the new project directory, to run the game:

### `npm start`

To stop the game running, in the project directory use:

### CTRL+c

## Game Rules

Hangman is a word-guessing game.
The goal is to guess the secret word by suggesting letters, one at a time.
The player has a limited number of guesses, and with each incorrect guess, a part of a hangman is drawn.
If the hangman is completed before the player guesses the word, the game is lost.

### How to Start a New Game

To start a new game, simply click the "New Game" button.

### How to Make a Guess

To make a guess, click on the letters on the on-screen keyboard. If the letter is in the secret word, it will be revealed. If the letter is not in the word, a part of the hangman will be drawn. You can only guess each letter once.

### Winning and Losing

If the player correctly guesses the word before the hangman is completed, the game is won. If the hangman is completed before the word is guessed, the game is lost.
