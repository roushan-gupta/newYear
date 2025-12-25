const memoryCards = document.querySelectorAll('.memory-card');
const modal = document.getElementById('memoryModal');
const closeBtn = document.getElementById('closeBtn');
const modalShayari = document.getElementById('modalShayari');
const rosePetals = document.getElementById('rosePetals');
const modalHearts = document.getElementById('modalHearts');
const musicBtn = document.getElementById('musicBtn');
const musicIcon = document.getElementById('musicIcon');
const backgroundMusic = document.getElementById('backgroundMusic');
const floatingHeartsContainer = document.getElementById('floatingHearts');

let isMusicPlaying = false;

const shayariCollection = [
  {
    text: "तेरी हंसी में जन्नत का एहसास है,\nतेरे साथ हर पल खास है।\n\nYour smile holds the feeling of paradise,\nEvery moment with you is precious."
  },
  {
    text: "तेरे बिना ये दिल अधूरा सा है,\nतू मेरी ज़िंदगी का सबसे हसीन ख्वाब है।\n\nWithout you, this heart feels incomplete,\nYou are the most beautiful dream of my life."
  },
  {
    text: "तेरी आँखों में खो जाना चाहता हूँ,\nतेरे साथ हर पल जी जाना चाहता हूँ।\n\nI want to get lost in your eyes,\nI want to live every moment with you."
  },
  {
    text: "तेरा प्यार ही मेरी दुआ है,\nतू ही मेरी सबसे प्यारी अदा है।\n\nYour love is my prayer,\nYou are my most beloved grace."
  },
  {
    text: "चाँद भी शर्माए तेरी मुस्कान देख कर,\nदिल मेरा धड़के तेरी एक झलक देख कर।\n\nEven the moon feels shy seeing your smile,\nMy heart beats faster with just one glimpse of you."
  },
  {
    text: "तेरे साथ की हर याद प्यारी है,\nतू मेरी ज़िंदगी की सबसे हसीन बहार है।\n\nEvery memory with you is precious,\nYou are the most beautiful spring of my life."
  }
];

createFloatingHearts();

memoryCards.forEach((card, index) => {
  card.addEventListener('click', () => {
    openModal(index);
  });
});

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

musicBtn.addEventListener('click', toggleMusic);

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

function openModal(index) {
  modal.classList.add('active');
  const shayari = shayariCollection[index] || shayariCollection[0];
  modalShayari.innerHTML = shayari.text.replace(/\n/g, '<br>');

  if (!isMusicPlaying) {
    playMusic();
  }

  createRosePetals();
  createModalHearts();
}

function closeModal() {
  modal.classList.remove('active');
  rosePetals.innerHTML = '';
  modalHearts.innerHTML = '';
}

function createRosePetals() {
  rosePetals.innerHTML = '';

  const createPetal = () => {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDuration = (Math.random() * 2 + 3) + 's';
    petal.style.animationDelay = Math.random() + 's';
    rosePetals.appendChild(petal);

    setTimeout(() => {
      if (rosePetals.contains(petal)) {
        petal.remove();
      }
    }, 5000);
  };

  for (let i = 0; i < 20; i++) {
    setTimeout(createPetal, i * 200);
  }

  const petalInterval = setInterval(() => {
    if (modal.classList.contains('active')) {
      createPetal();
    } else {
      clearInterval(petalInterval);
    }
  }, 500);
}

function createModalHearts() {
  modalHearts.innerHTML = '';

  const createHeart = () => {
    const heart = document.createElement('div');
    heart.className = 'modal-heart';
    heart.innerHTML = ['💕', '💖', '💗'][Math.floor(Math.random() * 3)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.bottom = '0';
    heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
    heart.style.animationDelay = Math.random() + 's';
    modalHearts.appendChild(heart);

    setTimeout(() => {
      if (modalHearts.contains(heart)) {
        heart.remove();
      }
    }, 4000);
  };

  for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 300);
  }

  const heartInterval = setInterval(() => {
    if (modal.classList.contains('active')) {
      createHeart();
    } else {
      clearInterval(heartInterval);
    }
  }, 600);
}

function toggleMusic() {
  if (isMusicPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function playMusic() {
  backgroundMusic.play().then(() => {
    isMusicPlaying = true;
    musicIcon.textContent = '🎵';
    musicBtn.style.background = 'var(--pink-light)';
  }).catch(err => {
    console.log('Music playback failed:', err);
  });
}

function pauseMusic() {
  backgroundMusic.pause();
  isMusicPlaying = false;
  musicIcon.textContent = '🔇';
  musicBtn.style.background = 'white';
}
