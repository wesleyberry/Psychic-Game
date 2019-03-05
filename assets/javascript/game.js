var randomArray = ("abcdefghijklmnopqrstuvwxyz").split("");
var lettersGuessed = [];
var wins = 0;
var losses = 0;
var guessesRemaining = 9;
var randomLetter = "";

function game() {
    randomLetter = randomArray[Math.floor(Math.random() * randomArray.length)];

    console.log(randomLetter);
}

function checkGuess(userLetter) {
    var letterInCache = false;
    var cpLetter = false;
    if(userLetter == randomLetter) {
        cpLetter = true;
    } 
    for(var i = 0; i < lettersGuessed.length; i++) {
        if(lettersGuessed[i] == userLetter) {
            letterInCache = true;
        }
    }
    if(cpLetter) {
        wins++;
        document.getElementById("wins").innerHTML = " " + wins;
    } else if (!letterInCache) {
        guessesRemaining--;
        lettersGuessed.push(userLetter);
        document.getElementById("losses").innerHTML = " " + losses;
    }
    console.log(guessesRemaining);
}

function reset() {
    guessesRemaining = 9;
    lettersGuessed = [];
    game();
}

function complete(userInput) {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses remaining:" + guessesRemaining);
    
    if(userInput == randomLetter) {
        reset();
    } else if (guessesRemaining == 0) {
        reset();
        losses++;
    }
    document.getElementById("guessesRemaining").innerHTML = " " + guessesRemaining;
    document.getElementById("lettersGuessed").innerHTML = " " + lettersGuessed;
}

game();

document.onkeyup = function(event) {
    var userInput = event.key;
    checkGuess(userInput);
    complete(userInput);
}