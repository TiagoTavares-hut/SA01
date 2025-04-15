const choices = document.querySelectorAll('.choice');
const playerChoiceEl = document.getElementById('player-choice');
const computerChoiceEl = document.getElementById('computer-choice');
const resultEl = document.getElementById('result');

const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

const options = ['pedra', 'papel', 'tesoura'];

choices.forEach(choice => {
  choice.addEventListener('click', () => {
    const playerChoice = choice.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    playerChoiceEl.textContent = formatChoice(playerChoice);
    computerChoiceEl.textContent = formatChoice(computerChoice);
    resultEl.textContent = result;

    // Atualiza placar
    if (result.includes('venceu')) {
      playerScore++;
    } else if (result.includes('perdeu')) {
      computerScore++;
    }

    updateScore();
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) {
    return 'Empate!';
  }

  if (
    (player === 'pedra' && computer === 'tesoura') ||
    (player === 'papel' && computer === 'pedra') ||
    (player === 'tesoura' && computer === 'papel')
  ) {
    return 'Você venceu! 🎉';
  } else {
    return 'Você perdeu 😢';
  }
}

function formatChoice(choice) {
  switch (choice) {
    case 'pedra': return '🪨 Pedra';
    case 'papel': return '📄 Papel';
    case 'tesoura': return '✂️ Tesoura';
  }
}

function updateScore() {
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}
