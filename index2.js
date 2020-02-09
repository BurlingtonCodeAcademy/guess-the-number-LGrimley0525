const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

//listing of functions below
function ask(questionText) {//allows the program to ask and receive
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve);
    });
}

function genNumber(min, max) {//allows the random number generated within specified range 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}

let guessCount = 1; //global variable to count number of guesses 

start();



async function start() {
    console.log("Let's play a game where I (the computer) think of a number between 1 and 100, and you (the human) must guess it....\nLets begin!")
    minValue = 1;
    maxValue = 100;
    let compNumber = genNumber(minValue, maxValue)
    let humanGuess = parseInt(await ask("Please enter your guess "))

    while (humanGuess !== compNumber) {
        
        if (humanGuess > compNumber) {
            guessCount += 1;
            
            console.log("You guessed too high, guess a lower number")
        }
        else {
            guessCount += 1;
            guessInt(compNumber)
            console.log("You are too low, guess a higher number")
        }



    }

    guessCount += 1;
    console.log("Congrats! You guessed it in " + guessCount + " tries!")
    process.exit()
}


