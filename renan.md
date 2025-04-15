<<<<<<< HEAD
piano (fácil)

temporizador (médio)

jogo da velha (difícil)
=======
Piano simples (fácil)
Temporizador (médio)

1️⃣ HTML – Estrutura básica das teclas
Arquivo: index.html

html
Copiar
Editar
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Piano Simples</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>Piano Virtual</h1>
  <div class="piano">
    <div class="key" data-note="C">C</div>
    <div class="key" data-note="D">D</div>
    <div class="key" data-note="E">E</div>
    <div class="key" data-note="F">F</div>
    <div class="key" data-note="G">G</div>
    <div class="key" data-note="A">A</div>
    <div class="key" data-note="B">B</div>
  </div>

  <!-- Sons -->
  <audio id="C" src="sounds/C.mp3"></audio>
  <audio id="D" src="sounds/D.mp3"></audio>
  <audio id="E" src="sounds/E.mp3"></audio>
  <audio id="F" src="sounds/F.mp3"></audio>
  <audio id="G" src="sounds/G.mp3"></audio>
  <audio id="A" src="sounds/A.mp3"></audio>
  <audio id="B" src="sounds/B.mp3"></audio>

  <script src="script.js"></script>
</body>
</html>
✨ O que está acontecendo aqui?
Criamos uma <div> com a classe piano, que contém 7 teclas (divs com classe key).

Cada tecla tem um atributo data-note que representa a nota que ela deve tocar.

Também temos elementos <audio> com o id igual à nota. Eles tocam o som quando ativados.

O JavaScript vai usar esses elementos para tocar os áudios quando necessário.

2️⃣ CSS – Estilização do piano
Arquivo: style.css

css
Copiar
Editar
body {
  text-align: center;
  font-family: sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

.piano {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.key {
  width: 60px;
  height: 200px;
  background-color: white;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  font-size: 20px;
  line-height: 200px;
  cursor: pointer;
  user-select: none;
  transition: transform 0.1s;
}

.key:active,
.key.playing {
  background-color: #ffd700;
  transform: scale(0.95);
}
✨ O que está acontecendo aqui?
Usamos Flexbox para alinhar as teclas horizontalmente.

Cada tecla tem aparência de tecla de piano: branca, com borda preta, sombra, e responde ao clique.

A classe playing será usada para dar um efeito visual ao pressionar a tecla (como uma animação de clique).

3️⃣ JavaScript – Interatividade e som
Arquivo: script.js

javascript
Copiar
Editar
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
✨ O que está acontecendo aqui?
Pegamos todas as teclas com .key.

A função playNote toca o som associado à nota (elemento <audio>) e ativa a animação.

Cada tecla escuta por um click, e ao ser clicada, ela toca o som correspondente.

Também adicionamos suporte ao teclado:

Tecla A → Nota C

Tecla S → Nota D

etc.
>>>>>>> 59e217e2512769ee71d94e476d482463da08dc55
