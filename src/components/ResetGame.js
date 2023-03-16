import React from 'react';

// Component to reset the game
export default function ResetGame(props) {
  return (
    <button className='btn-reset' onClick={props.resetGame}>New Game</button>
  );
}

