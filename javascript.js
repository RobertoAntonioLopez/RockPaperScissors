let humanScore = 0;
let computerScore = 0;

function win(choice){
   console.log(`You WON!, the computer selected ${choice}\n`);
   humanScore++
}

function lose(choice){
   console.log(`You lost!, the computer chose ${choice}\n`);
   computerScore++
}

function score(){
   console.log("\n\nThe score is:\n")
   console.log(`Player:${humanScore} Computer:${computerScore}`);
}
//////////////////////////////////////////////////////////////////////////

function getComputerChoice(){
   let choice = Math.floor(Math.random()*3)+1;
   if(choice === 1){
      return "rock";
      }
      else if(choice === 2){
      return "paper";
      }
      else{
      return "scissors"
      }
}

function getHumanChoice(){
   let choice = prompt("What is your choice?");
    return choice;
}

//////////////////////////////////////////////////////

function playRound(){

   let computerChoice = getComputerChoice();
   let humanChoice = getHumanChoice()

     if (humanChoice === null) {
         console.log("Game cancelled by user.");
         return false;
  }

humanChoice = humanChoice.toLowerCase();
  
if(computerChoice === humanChoice){
console.log("It's a draw!, you chose the same.")
}
else if (humanChoice === "rock"){
   if(computerChoice === "paper"){
      lose(computerChoice);
   }else if(computerChoice === "scissors"){
      win(computerChoice);
   }
}

else if (humanChoice === "paper"){
   if(computerChoice === "rock"){
      win(computerChoice);
   }else if(computerChoice === "scissors"){
      lose(computerChoice);
   }
}

else if(humanChoice === "scissors"){
   if(computerChoice === "paper"){
      win(computerChoice);
   }else if(computerChoice === "rock"){
      lose(computerChoice);
   }
}
}

function playGame(){
      for (let i = 1; i<=5; i++)
      {
            console.log(`\nROUND NUMBER:${i}`)
            playRound();  
      }
   score(); 
   return;
   
}

playGame();