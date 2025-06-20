  const splash = document.getElementById('splashContainer');
  const video = document.getElementById('splashVideo');

  const redirectURL = "./src/html/mainPage.html"; // Change this to your actual destination

    window.addEventListener('load', () => {
      splash.classList.add('fade-in');
    });

  // Redirect after video ends
  document.getElementById('splashVideo').addEventListener('ended', () => {
    splash.classList.remove('fade-in');
    splash.classList.add('fade-out');
    window.location.href = redirectURL;
  });

  // Optional fallback in case video can't play
  setTimeout(() => {
    window.location.href = redirectURL;
  }, 5000); // 5 seconds fallback