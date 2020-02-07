const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  // this should start the program
  console.log("Let's play a game where you pick a number between 1 and 100, \nand then I will try to guess it in as few tries as possible!\n\n")
  let secretNumber = randomInt(1,100);
  let numQuestion = (await ask ('Is it... ' + secretNumber + '? Y/N?  ')).toString().toLowerCase().trim();
  if (numQuestion === 'y'){
    console.log("Your number was "  + secretNumber + "!")
    process.exit()}
      
  else {
 let newQuestion = (await ask ('Hmmmm...Is your number higher or lower than my guess?  Type H or L')).toString().toLowerCase().trim();
if (newQuestion === 'h') { 
console.log("Is it ..." + randomInt((secretNumber + 1), 100) + "? Y/N")
}  
}
}


function randomInt(min,max) {
  let range = max - min + 1;
  return min + Math.floor(Math.random() * range)
  //allows the random number generated within game range
}