const choice = ['scissors', 'rock', 'paper'];
const result = document.querySelector('.result');
const score = document.querySelector('.score');
let aiScore = (playerScore = 0);
//ai
const computerSelection = () => {
  let aiChoice = Math.floor(Math.random() * 3);
  aiChoice == 0
    ? (aiChoice = choice[0])
    : aiChoice == 1
    ? (aiChoice = choice[1])
    : (aiChoice = choice[2]);
  // console.log(aiChoice);
  return aiChoice;
};

//player
const playerSelection = () => {
  let playersChoice = prompt('chose your weapon?');
  playersChoice = playersChoice.toLowerCase();
  // console.log(playersChoice);
  return playersChoice;
};

//round
const playRound = (computerSelection, playerSelection) => {
  if (
    (computerSelection == choice[0] && playerSelection == choice[1]) ||
    (computerSelection == choice[2] && playerSelection == choice[0]) ||
    (computerSelection == choice[1] && playerSelection == choice[2])
  ) {
    console.log('player won!');
    result.innerHTML = `<p>Player wins!</p>`;

    playerScore++;
  } else if (computerSelection === playerSelection) {
    // console.log('Tied!');
    result.innerHTML = `<p>Tied!</p>`;
  } else {
    // console.log('AI won!');
    result.innerHTML = `<p>AI wins!</p>`;

    aiScore++;
  }
};
for (i = 0; i <= 4; i++) {
  console.log(playRound(computerSelection(), playerSelection()));
  console.log(` player score is: ${playerScore}`);
  console.log(` ai score is: ${aiScore}`);
  score.textContent = `player: ${playerScore} / Ai: ${aiScore}`;
}
