let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultMessage = document.getElementById("result-message");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Empate!";
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        playerScoreSpan.textContent = playerScore;
        return "Você ganhou!";
    } else {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
        return "Você perdeu!";
    }
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const winnerMessage = determineWinner(playerChoice, computerChoice);
    resultMessage.textContent = `Jogador escolheu: ${playerChoice}, Computador escolheu: ${computerChoice}. ${winnerMessage}`;
}

// Adicionando os event listeners para os botões do jogo
document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));

// Resetando a pontuação
document.getElementById("reset-button").addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    resultMessage.textContent = ""; // Limpa o resultado exibido
});
