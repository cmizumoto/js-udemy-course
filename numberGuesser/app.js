/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remainig
- Notify player of the correct answer if they lose
- Let player choose to play again
*/ 

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Element
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // Validate value
    if (isNaN(guess) || guess < min ||  guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // check if Won
    if (guess === winningNum) {
        // Game over Won
        // Disable input
        guessInput.disabled = true;
        // Change border color
        guessInput.style.borderColor = 'green';
        // Set Message
        setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
    } else {
        // Wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0){
            // Game over - Lost

            // Disable input
            guessInput.disabled = true;
            // Change border color
            guessInput.style.borderColor = 'red';
            // Set Message
            setMessage(`Game Over, you lost. The correct number was ${winningNum}`, 'red');
        } else {
            // Game continues - answer wrong

            // Change border color
            guessInput.style.borderColor = 'red';

            // Clear input
            guessInput.value = '';

            // Tell user its the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
            
        }
    }
});


// Set Message
function setmessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}