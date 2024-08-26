// var audio = document.createElement('audio');
// audio.setAttribute('src', './assets/sound.mp3');
// audio.setAttribute('autoplay', './assets/sound.mp3');
// audio.loop = true;
// audio.play();



// Create audio element
var audio = document.createElement('audio');
audio.setAttribute('src', './assets/sound.mp3');
audio.loop = true;

// Function to play audio
function playAudio() {
    // Check if audio is paused or ended, then play
    if (audio.paused || audio.ended) {
        audio.play();
    }
}

// Event listener to play audio on user interaction
document.addEventListener('click', playAudio);

// Optionally, you can remove the event listener after the audio has been played once
// document.removeEventListener('click', playAudio);