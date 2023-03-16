import React from 'react';

// Component to display the hangman image
export default function HangmanImage({ nWrong }){

    // Array of images
    const images = [
        require('../assets/img/state1.GIF'),
        require('../assets/img/state2.GIF'),
        require('../assets/img/state3.GIF'),
        require('../assets/img/state4.GIF'),
        require('../assets/img/state5.GIF'),
        require('../assets/img/state6.GIF'),
        require('../assets/img/state7.GIF'),
        require('../assets/img/state8.GIF'),
        require('../assets/img/state9.GIF'),
        require('../assets/img/state10.gif'),
        require('../assets/img/state11.GIF')
    ];
    
    // Alternate text for images
    const altText = `${nWrong} wrong guesses`;

    // Returns the image to display
    return (
        <>
            <img src={images[nWrong]} alt={altText} />
            <p>Incorrect guesses: {nWrong}</p>
        </>
    );
}

