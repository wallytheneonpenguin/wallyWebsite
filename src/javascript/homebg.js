  const images = [
    '../../../media/images/backgrounds/WallyBG1.png',
    '../../../media/images/backgrounds/WallyBG2.png',
    '../../../media/images/backgrounds/WallyBG3.png',
    '../../../media/images/backgrounds/WallyBG4.png',
    '../../../media/images/backgrounds/WallyBG5.png'
  ];

  let current = 0;

  function changeBackground() {
    document.body.style.backgroundImage = `url('${images[current]}')`;
    current = (current + 1) % images.length;
  }

  // Initial background
  changeBackground();

  // Change every 5 seconds
  setInterval(changeBackground, 5000);