// Seleciona todas as teclas
const keys = document.querySelectorAll('.key');

// Função que toca a nota
function playNote(note) {
  const audio = document.getElementById(note);
  if (audio) {
    audio.currentTime = 0; // Reinicia o som se ele já estiver tocando
    audio.play();

    // Adiciona efeito visual
    const key = document.querySelector(`.key[data-note="${note}"]`);
    key.classList.add('playing');

    // Remove efeito após 200ms
    setTimeout(() => {
      key.classList.remove('playing');
    }, 200);
  }
}

// Evento de clique nas teclas
keys.forEach(key => {
  key.addEventListener('click', () => {
    const note = key.dataset.note;
    playNote(note);
  });
});

// Evento de teclado
document.addEventListener('keydown', event => {
  const keyMap = {
    'a': 'C',
    's': 'D',
    'd': 'E',
    'f': 'F',
    'g': 'G',
    'h': 'A',
    'j': 'B'
  };

  const note = keyMap[event.key];
  if (note) {
    playNote(note);
  }
});
