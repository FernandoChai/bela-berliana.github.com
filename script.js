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
