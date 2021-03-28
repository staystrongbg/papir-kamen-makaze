const game = () => {
  const choice = ['scissors', 'rock', 'paper']
  //ai
  const computerSelection = () => {
    let aiChoice
    const randomNum = Math.floor(Math.random() * 3)
    randomNum === 0
      ? (aiChoice = choice[0])
      : randomNum === 1
      ? (aiChoice = choice[1])
      : (aiChoice = choice[2])
    return aiChoice
  }
  let comp = computerSelection()
  console.log(comp)

  //player
  const playerSelection = () => {
    let playersChoice = prompt('chose your weapon?')
    playersChoice = playersChoice.toLowerCase()
    console.log(playersChoice)
    return playersChoice
  }
  let player = playerSelection()

  const playRound = () => {
    if (
      (comp === choice[0] && player === choice[1]) ||
      (comp === choice[2] && player === choice[0]) ||
      (comp === choice[1] && player == choice[2])
    ) {
      console.log('player won!')
    } else if (
      (comp === choice[0] && player === choice[0]) ||
      (comp === choice[2] && player === choice[2]) ||
      (comp === choice[1] && player === choice[1])
    ) {
      console.log('Tied!')
    } else console.log('AI won!')
  }
  console.log(playRound())
}
for (i = 0; i <= 5; i++) {
  game()
}
