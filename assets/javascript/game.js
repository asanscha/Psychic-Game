window.onload = function () {
    alert('Guess what letter I am thinking of. You have 10 guesses.');
}

// Define variables and array
var won = 0;
var lost = 0;
var guessRemain = 10;
var guessedArray = [];
// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    console.log(alphabet);
// Generating the computer's guess
var randomIndex = Math.floor(Math.random() * alphabet.length);
var compChoice = alphabet[randomIndex];

console.log(compChoice);

function resetGame() {
    randomIndex = Math.floor(Math.random() * alphabet.length);
    compChoice = alphabet[randomIndex];
    console.log(compChoice);
    guessRemain = 10;
    guessedArray = [];
}

document.onkeypress = function (event) {
    var playerGuess = event.key;
    guessedArray.push(playerGuess)
    if (playerGuess === compChoice) {
        won++; 
        resetGame();   
    } else {
        guessRemain--;
    }

    if (guessRemain === 0) {
        lost++;
        resetGame();
    }
    document.getElementById('won').innerHTML = won;
    document.getElementById('lost').innerHTML = lost;
    document.getElementById('guessRemain').innerHTML = guessRemain;
    document.getElementById('playerGuess').innerHTML = guessedArray.join(", ");    
}   