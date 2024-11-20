let audioPlayer = document.getElementById('audio-player');
let playIcon = document.getElementById('play-music-icon');
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        audioPlayer.pause();
        playIcon.classList.remove('spin'); // Stop spinning
    } else {
        audioPlayer.play();
        playIcon.classList.add('spin'); // Start spinning
    }
    isPlaying = !isPlaying;
}

// Update the progress bar during the page loading process
document.onreadystatechange = function () {
    const progressBar = document.getElementById('progressBar');
  
    if (document.readyState === 'interactive') {
      // Page DOM is loaded but not all resources (like images) are loaded
      progressBar.style.width = '50%';
      progressBar.setAttribute('aria-valuenow', 50);
    } else if (document.readyState === 'complete') {
      // Page is fully loaded
      progressBar.style.width = '100%';
      progressBar.setAttribute('aria-valuenow', 100);
  
      // Hide the overlay after a short delay for a smooth transition
      setTimeout(() => {
        document.getElementById('loadingOverlay').classList.add('hidden');
      }, 500); // Adjust delay if needed
    }
  };
  
  