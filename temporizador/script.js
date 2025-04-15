let totalSeconds = 0;
let remainingSeconds = 0;
let interval = null;
let isPaused = false;

const display = document.getElementById("timeDisplay");
const text = document.getElementById("textStatus");
const bar = document.getElementById("bar");
const alarm = document.getElementById("alarm");

function formatTime(sec) {
  const min = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${min}:${s}`;
}

function startTimer() {
  const input = document.getElementById("timeInput");
  const value = parseInt(input.value);
  if (isNaN(value) || value <= 0) {
    alert("Digite um número válido!");
    return;
  }

  totalSeconds = value;
  remainingSeconds = value;
  isPaused = false;
  updateDisplay();

  if (interval) clearInterval(interval);

  interval = setInterval(() => {
    if (!isPaused && remainingSeconds > 0) {
      remainingSeconds--;
      updateDisplay();

      if (remainingSeconds === 0) {
        clearInterval(interval);
        text.textContent = "⏰ Tempo esgotado!";
        bar.style.width = "100%";
        alarm.play();
        notifyUser("Temporizador finalizado!", "Seu tempo acabou.");
      }
    }
  }, 1000);
}

function updateDisplay() {
  display.textContent = formatTime(remainingSeconds);
  text.textContent = `Faltam ${remainingSeconds} segundo${remainingSeconds !== 1 ? 's' : ''}`;
  const percent = 100 * (1 - remainingSeconds / totalSeconds);
  bar.style.width = percent + "%";
}

function pauseTimer() {
  isPaused = true;
  text.textContent = "⏸ Pausado...";
}

function resumeTimer() {
  if (remainingSeconds > 0) {
    isPaused = false;
    text.textContent = `Faltam ${remainingSeconds} segundo${remainingSeconds !== 1 ? 's' : ''}`;
  }
}

function resetTimer() {
  clearInterval(interval);
  remainingSeconds = 0;
  display.textContent = "--:--";
  text.textContent = "Resetado.";
  bar.style.width = "0%";
}

function notifyUser(title, message) {
  if (Notification.permission === "granted") {
    new Notification(title, { body: message });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        new Notification(title, { body: message });
      }
    });
  }
}
