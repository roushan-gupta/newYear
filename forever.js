const typewriterElement = document.getElementById('typewriter');
const restartBtn = document.getElementById('restartBtn');
const floatingHeartsContainer = document.getElementById('floatingHearts');

const message = "You are my forever ❤️";

let charIndex = 0;

createFloatingHearts();

function typeWriter() {
  if (charIndex < message.length) {
    typewriterElement.textContent += message.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 150);
  } else {
    setTimeout(() => {
      typewriterElement.style.borderRight = 'none';
    }, 500);
  }
}

setTimeout(typeWriter, 1000);

function createFloatingHearts() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = ['❤️', '💕', '💖', '💗', '💝'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
    floatingHeartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 500);
}

restartBtn.addEventListener('click', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 500);
});
