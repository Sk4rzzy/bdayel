    function startSurprise() {
  // Prikaz poruke
  document.querySelector('.message').style.display = 'block';

  // Dodaj konfete
  const emojis = ['🎀', '💗', '✨', '🩰', '🌸'];
  const container = document.querySelector('.confetti');
  container.innerHTML = '';

  for (let i = 0; i < 40; i++) {
    const confetto = document.createElement('span');
    confetto.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    confetto.style.left = Math.random() * 100 + 'vw';
    confetto.style.fontSize = (16 + Math.random() * 20) + 'px';
    confetto.style.top = '-5vh';
    confetto.style.position = 'absolute';
    confetto.style.animation = 'drop 5s linear forwards';
    confetto.style.animationDelay = (Math.random() * 0.5) + 's';
    container.appendChild(confetto);
  }

  // Pokaži Melody
  const melody = document.getElementById('melodyImage');
  melody.style.display = 'block';

  // Sakrij sve nakon 5 sekundi
  setTimeout(() => {
    container.innerHTML = '';
    melody.style.display = 'none';
  }, 5000);
}

function startSurprise() {
  // Prikaz poruke
  document.querySelector('.message').style.display = 'block';

  // Dodaj konfete
  const emojis = ['🎀', '💗', '✨', '🩰', '🌸'];
  const container = document.querySelector('.confetti');
  container.innerHTML = '';

  for (let i = 0; i < 40; i++) {
    const confetto = document.createElement('span');
    confetto.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    confetto.style.left = Math.random() * 100 + 'vw';
    confetto.style.fontSize = (16 + Math.random() * 20) + 'px';
    confetto.style.top = '-5vh';
    confetto.style.position = 'absolute';
    confetto.style.animation = 'drop 5s linear forwards';
    confetto.style.animationDelay = (Math.random() * 0.5) + 's';
    container.appendChild(confetto);
  }

  // Pokaži sliku koja iskače i nestaje
  const popup = document.getElementById('melodyPopup');
  popup.style.display = 'block';

  // Sakrij nakon 5 sekundi
  setTimeout(() => {
    container.innerHTML = '';
    popup.style.display = 'none';
  }, 5000);
}
