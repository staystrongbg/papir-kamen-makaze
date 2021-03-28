//ai
const computerSelection = () => {
  let aiChoice
  const randomNum = Math.floor(Math.random() * 3)
  randomNum === 0
    ? (aiChoice = 'scissors')
    : randomNum === 1
    ? (aiChoice = 'rock')
    : (aiChoice = 'paper')
  return aiChoice
}
let comp = computerSelection()
console.log(comp)

//player
const playerSelection = () => {
  let playersChoice = prompt('chose your weapon?')
  console.log(playersChoice)
  return playersChoice
}
let player = playerSelection()

const playRound = () => {
  if (
    (comp === 'scissors' && player === 'rock') ||
    (comp === 'paper' && player === 'scissors') ||
    (comp === 'rock' && player == 'paper')
  ) {
    console.log('player won!')
  } else if (
    (comp === 'scissors' && player === 'scissors') ||
    (comp === 'paper' && player === 'paper') ||
    (comp === 'rock' && player === 'rock')
  ) {
    console.log('Tied!')
  } else console.log('comp won!')
}
console.log(playRound())
