import React, { useEffect } from 'react';

// Component to display if player won or lost
export default function WinnerOrLoser({ isWinner, isLoser, answer, setPlayable }) {
    let playable = true;
    if (isWinner || isLoser) {
        playable = false;
    }

    useEffect(() => {
        setPlayable(playable);
    });

    return (
        <div>
            {isWinner &&
                <>
                <p className='won larger'>You won! 😃</p>
                <p>The word was:  <span className='won larger'>{answer}</span></p>
                </>
                }
            {isLoser &&
                <>
                    <p className='lost larger'>Sorry, you lost! 😕</p>
                    <p>The word was:  <span className='larger lost'>{answer}</span></p>
                </>
            }
        </div>
    );
}
