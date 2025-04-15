let timer;
let totalSeconds = 0;
let isRunning = false;

const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    const minutesInput = parseInt(document.getElementById("minutes").value) || 0;
    const secondsInput = parseInt(document.getElementById("seconds").value) || 0;

    totalSeconds = minutesInput * 60 + secondsInput;

    if (totalSeconds > 0) {
      startTimer();
    }
  }
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  totalSeconds = 0;
  isRunning = false;
  updateDisplay(0);
});

function startTimer() {
  isRunning = true;
  updateDisplay(totalSeconds); // Atualiza a exibição imediatamente

  timer = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(timer);
      isRunning = false;
      alert("⏰ Tempo esgotado!");
    } else {
      totalSeconds--;
      updateDisplay(totalSeconds);
    }
  }, 1000);
}

function updateDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  timeDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}
