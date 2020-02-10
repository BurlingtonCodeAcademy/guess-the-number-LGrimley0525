const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

//listing of functions below
function ask(questionText) {//allows the program to ask and receive
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve);
    });
}

function randomInt(min, max) {//allows the random number generated within specified range 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}


// listing of variables.
let lowerLimit = 1;
let upperLimit = 100;
let tries = 100;//should not take user over this many to guess
let answer = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit; //generates the computers number for user to guess
let countGuess = 1 //to begin to tally the number of tries

start();


async function start() {



    // this will keep prompting the user for a guess until the game ends.
    while (tries > 0) {
        // asks the user for their number
        guess = await ask("Guess a number between " + lowerLimit + " and " + upperLimit + "  ")


        // if the guess is a number it will follow this loop
        if (isFinite(guess) && guess != '') {
            // this will make sure the users response is converted into a number
            guess = +guess;


            if (guess < lowerLimit) {// if users response is less than the game range

                console.log('Your guess should be no less than ' + lowerLimit + '.');
            }

            else if (guess > upperLimit) {// if users response is higher than the game range
                console.log('Your guess should be no greater than ' + upperLimit + '.');
            }

            else if (guess > answer) {// if the users guess is too high
                countGuess += 1;
                console.log('Your guess is too high.');
            }

            else if (guess < answer) {// if the users guess is too low
                countGuess += 1;
                console.log('Your guess is too low');
            }

            else {// if no other conditions are true, game ends
                console.log('Great job, you got it in ' + countGuess + ' tries!');
                process.exit();
            }
        }

        else {// if user doesnt enter a number
            console.log("Don't be so silly, enter a number for your guess!");
        }

        tries = tries + 1 // counts the number of tries, if user goes over the max limit of tries, game will end

    }
}