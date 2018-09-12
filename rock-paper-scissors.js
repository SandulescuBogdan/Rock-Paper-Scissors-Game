const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === "rock" || userInput === "paper" || userInput === "scissors"){
    return userInput;
  }else{
    console.log("Wrong message");
  }
};

const getComputerChoice = function(){
 const randomNumber = Math.floor(Math.random() *3);
  switch (randomNumber){
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return 'scissors'
  }
}

const determineWinner = function(userChoice, computerChoice) {
  if(userChoice === computerChoice){
    return 'This game is a tie!'
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer won';
    }else{
      return "User won";
    }
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'Computer won';
    }else{
      return "User won";
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'Computer won';
    }else{
      return "User won";
    }
  }
}

const playGame = function(){
  const userChoice = getUserChoice('ROCK');
  const computerChoice = getComputerChoice();
  console.log('You threw: '+ userChoice);
	console.log('The computer threw: '+computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
};
playGame();
