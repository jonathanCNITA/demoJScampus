// you can write js here
console.log('exo-3');


let playerInput = prompt("Your choice ( rock, paper, scissors) ?");

function getPlayerChoice(playerInput) {
  const lowerPlayerInput = playerInput.toLowerCase();
  const VALID_ELMENTS = ['rock', 'paper', 'scissors'];

  if (VALID_ELMENTS.includes(lowerPlayerInput)) {
    return lowerPlayerInput;
  } else {
    console.error(`${playerInput} is not valid!`);
  }
}

function getComputerChoice() {
  const VALID_ELMENTS = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return VALID_ELMENTS[randomNumber];
}

function findWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'Tied';
  }
  if (playerChoice == 'rock' && computerChoice == 'scissors' ||
    playerChoice == 'paper' && computerChoice == 'rock' ||
    playerChoice == 'scissors' && computerChoice == 'paper'
  ) {
    return 'Won';
  }
  return 'Lost';
}

function playGame() {
  const uChoice = getPlayerChoice(playerInput);
  const cChoice = getComputerChoice();
  const result = findWinner(uChoice, cChoice);
  console.log(result, uChoice, cChoice);
}

playGame();