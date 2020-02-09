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

let guessCount = 1; //global variable to count number of computer tries 

start();


async function start() {
  console.log("Let's play a game where you pick a number between 1 and 100 and then I will try to guess it in as few tries as possible! \n\n");//this gets the party started 
  let minVal = 1;
  let maxVal = 100;
  let ranNum = randomInt(minVal, maxVal)  //randomly generated number between min and max values 
  let guess = (await ask("Is your number " + ranNum + " ?  Y/N ")).toString().toLowerCase().trim()  //asks user if number is right and converts answer to lower case for easeand removes white space 

  while (guess !== "y") { //this is run when user responds with a ‘n’ 
    let newQuestion = (await ask("Hmmm is your number higher or lower than my guess?  H/L")).toString().toLowerCase().trim()//asks user if their guess is higher or lower to allow program next step and then converts answer to lower case and removes any white space 
    if (newQuestion === "h") { //if user number is higher, this will generate a new random number that is higher than their guess but less than = to 100 
      minVal = ranNum
      ranNum = randomInt(((minVal) + 1), maxVal)
      guessCount += 1;
      if (ranNum === guess) {//this will exclude previous guess in new number
        randomInt(((minVal) + 1), maxVal)
      }
      guess = (await ask("Is your number.. " + ranNum + " ? Y/N")).toString().toLowerCase().trim()

    }
    else {//if user number is lower, this will generate a new random number between 1 and the guess -1 
      maxVal = ranNum
      ranNum = randomInt(minVal, ((maxVal) - 1))
      guessCount += 1;
      if (ranNum === guess) {//this will exclude previous guess in new number
        randomInt(minVal, ((maxVal) - 1))
      }
      guess = (await ask("Is your number... " + ranNum + " ?  Y/N")).toString().toLowerCase().trim()
    }

  }

  console.log("Your number is " + ranNum + "! \nDamn I am good - I did it in " + guessCount + " tries!")
  process.exit()
} 