const mainHeart = document.getElementById('mainHeart');
const scratchContainer = document.getElementById('scratchContainer');
const nextButton = document.getElementById('nextButton');
const floatingHeartsContainer = document.getElementById('floatingHearts');
const confettiContainer = document.getElementById('confettiContainer');
const scratchCanvas = document.getElementById('scratchCanvas');

let heartClicked = false;
let scratchRevealed = false;

createFloatingHearts();

mainHeart.addEventListener('click', () => {
  if (!heartClicked) {
    heartClicked = true;
    mainHeart.classList.add('opened');

    setTimeout(() => {
      createExplosionHearts();
      scratchContainer.classList.add('visible');
      initScratchCard();
    }, 800);
  }
});

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

function createExplosionHearts() {
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.innerHTML = '💖';
      heart.style.left = '50%';
      heart.style.fontSize = '30px';
      heart.style.animation = 'none';

      const angle = (Math.PI * 2 * i) / 30;
      const velocity = 200 + Math.random() * 100;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity;

      floatingHeartsContainer.appendChild(heart);

      let posX = window.innerWidth / 2;
      let posY = window.innerHeight / 2;
      let currentVx = vx;
      let currentVy = vy;
      let opacity = 1;

      const animate = () => {
        posX += currentVx * 0.016;
        posY += currentVy * 0.016;
        currentVy += 500 * 0.016;
        opacity -= 0.01;

        heart.style.left = posX + 'px';
        heart.style.top = posY + 'px';
        heart.style.opacity = opacity;

        if (opacity > 0) {
          requestAnimationFrame(animate);
        } else {
          heart.remove();
        }
      };

      animate();
    }, i * 10);
  }
}

function initScratchCard() {
  const canvas = scratchCanvas;
  const ctx = canvas.getContext('2d');

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, '#FFB3C6');
  gradient.addColorStop(1, '#E4C1F9');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'white';
  ctx.font = 'bold 24px Poppins';
  ctx.textAlign = 'center';
  ctx.fillText('Scratch Here!', canvas.width / 2, canvas.height / 2);

  let isDrawing = false;
  let scratchedPixels = 0;
  const totalPixels = canvas.width * canvas.height;

  function scratch(x, y) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2);
    ctx.fill();
  }

  function checkScratchProgress() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;

    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }

    const percentage = (transparent / totalPixels) * 100;

    if (percentage > 60 && !scratchRevealed) {
      scratchRevealed = true;
      canvas.style.opacity = '0';
      createConfetti();
      setTimeout(() => {
        nextButton.classList.add('visible');
      }, 500);
    }
  }

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    scratch(e.clientX - rect.left, e.clientY - rect.top);
  });

  canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
      const rect = canvas.getBoundingClientRect();
      scratch(e.clientX - rect.left, e.clientY - rect.top);
      checkScratchProgress();
    }
  });

  canvas.addEventListener('mouseup', () => {
    isDrawing = false;
  });

  canvas.addEventListener('touchstart', (e) => {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    scratch(touch.clientX - rect.left, touch.clientY - rect.top);
    e.preventDefault();
  });

  canvas.addEventListener('touchmove', (e) => {
    if (isDrawing) {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      scratch(touch.clientX - rect.left, touch.clientY - rect.top);
      checkScratchProgress();
      e.preventDefault();
    }
  });

  canvas.addEventListener('touchend', () => {
    isDrawing = false;
  });
}

function createConfetti() {
  const colors = ['#FF6B9D', '#FFB3C6', '#FF8B94', '#FFC3A0', '#E4C1F9'];

  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.top = '-10px';
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.width = (Math.random() * 10 + 5) + 'px';
      confetti.style.height = (Math.random() * 10 + 5) + 'px';
      confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
      confetti.style.animationDelay = (Math.random() * 0.5) + 's';

      confettiContainer.appendChild(confetti);

      setTimeout(() => confetti.remove(), 4000);
    }, i * 20);
  }
}

nextButton.addEventListener('click', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  setTimeout(() => {
    window.location.href = 'memories.html';
  }, 500);
});
