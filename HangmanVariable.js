let totalLives = 8
function lifeLoss(userGuess) {
    if (userGuess === false) {
        totalLives -= 1
        console.log("You guessed incorrectly!");
    }
    else {
        return console.log("Well done, you guessed correctly!");
    }
}
function correctGuess() {
    if (userGuess === true) {
        console.log("Well done, you guessed correctly!")
    }
}
function gameOver(totalLives,) {
    if (totalLives === 0) {
        return console.log("You are out of lives, game over!")
    }
}
function gameWon() {
    if (/*value to be determined*/ =  )
}