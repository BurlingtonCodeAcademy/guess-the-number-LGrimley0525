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
  console.log("Let's play a game where you pick a number between 1 and 100 and then I will try to guess it in as few tries as possible! \n\n");
  let guess = randomInt(1, 100);
  let numQuestion = (await ask('Is it... ' + guess + '? Y/N?  ')).toString().toLowerCase().trim(); //asking if this is the number and their response
  let lowNumber = randomInt(1, ((guess) - 1))
  let highNumber = randomInt(((guess) + 1), 100)
  if (numQuestion === 'y') {
    console.log("Your number is " + guess + "!\nDamn I am good!")
    process.exit()
  }
  else {  //this loop is if the computer guess is wrong
    let newQuestion = (await ask('Hmmm is your number higher or lower than my guess?  Type H or L  ')).toString().toLowerCase().trim()

    if (newQuestion === 'h') {
      while (newQuestion === 'h') {
        let highQuest = (await ask("Is it ..." + highNumber + "?  Y/N  ")).toString().toLowerCase().trim()
        console.log(" " + highQuest + " ")

        if (highQuest === 'n') {
          let newQuest = (await ask('Hmmm is your number higher or lower than my guess?  Type H or L  ')).toString().toLowerCase().trim()
          console.log(" " + newQuest + " ")
          if (newQuest === 'h') {
            while (newQuestion === 'h') {
              let highNumber = randomInt(((guess) + 1), 100)
              let highQuest = (await ask("Is it ..." + highNumber + "?  Y/N  ")).toString().toLowerCase().trim()
              console.log(" " + highQuest + " ")
              if (highQuest === 'n') {
                let highNumber = randomInt(((guess) + 1), 100)
                let highQuest = (await ask("Is it ..." + highNumber + "?  Y/N  ")).toString().toLowerCase().trim()
                console.log(" " + highQuest + " ")
              }
              else {
                console.log("Your number is " + highNumber + "! \nDamn I am good")
                process.exit()
              }
            }
            console.log("Your number is " + highNumber + "!\nDamn I am good!")
            process.exit()

          }
        }
        else {
          console.log(" Your number is " + highNumber + "! \nDamn I am good")
          process.exit()
        }
      }
    }
    else {
      
        while (newQuestion === 'l') {
          let lowQuest = (await ask("Is it ..." + lowNumber + "?  Y/N  ")).toString().toLowerCase().trim()
          console.log(" " + lowQuest + " ")
  
          if (lowQuest === 'n') {
            let newQuest = (await ask('Hmmm is your number higher or lower than my guess?  Type H or L  ')).toString().toLowerCase().trim()
            console.log(" " + newQuest + " ")
            if (newQuest === 'l') {
              while (newQuestion === 'l') {
                let lowNumber = randomInt(1, ((guess) - 1))
                let lowQuest = (await ask("Is it ..." + lowNumber + "?  Y/N  ")).toString().toLowerCase().trim()
                console.log(" " + lowQuest + " ")
                if (lowQuest === 'n') {
                  while (lowQuest === 'n') {
                    let lowNumber = randomInt(1, ((guess) - 1))
                  let lowQuest = (await ask("Is it ..." + lowNumber + "?  Y/N  ")).toString().toLowerCase().trim()
                  console.log(" " + lowQuest + " ")
                }}
                else {
                  console.log("Your number is " + lowNumber + "! \nDamn I am good")
                  process.exit()
                }
              }
              console.log("Your number is " + lowNumber + "!\nDamn I am good!")
              process.exit()
  
            }
          }
          else {
            console.log(" Your number is " + lowNumber + "! \nDamn I am good")
            process.exit()
          }
        }
      }
     


  console.log("Your number is " + guess + "!\nDamn I am good!")
  process.exit()

}







function randomInt(min, max) {
  let range = max - min + 1;
  return min + Math.floor(Math.random() * range)
  //allows the random number generated within game range 
}
}