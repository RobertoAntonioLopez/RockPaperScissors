let humanScore = 0;
let computerScore = 0;

function win(choice){
console.log(`You WON!, the computer selected ${choice}`);
humanScore++
}

function lose(choice){
console.log(`You lost!, the computer chose ${choice}`);
computerScore++
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
   let humanChoice = getHumanChoice().toLowerCase();
if(computerChoice === humanChoice){
console.log("It's a draw!, you chose the same.")
}
else if (humanChoice === "rock"){
if(computerChoice == "paper"){
   lose(computerChoice);
}else if(computerChoice=="scissors"){
   win(computerChoice);
}
}

else if (humanChoice === "paper"){
if(computerChoice == "rock"){
   win(computerChoice);
}else if(computerChoice=="scissors"){
   lose(computerChoice);
}
}

else if(humanChoice === "scissors"){
if(computerChoice == "paper"){
   win(computerChoice);
}else if(computerChoice=="rock"){
   lose(computerChoice);
}
}
}


playRound();