let video = document.getElementById('video');
let play = document.getElementById('play');
let stop = document.getElementById('stop');
let progress = document.getElementById('progress');
let timestamp = document.getElementById('timestamp');

// Play and PAuse Video
function toggleVideoStatus() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Update play/stop icon
function updatePlayIcon() {
    if(video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

// Update Progress and Timestamp
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100; 

    // Get the minutes
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10) {
        mins = '0' + String(mins);
    }

    // Get seconds 
    let seconds = Math.floor(video.currentTime % 60);
    if(seconds < 10) {
        seconds = '0' + String(seconds);
    } 

    timestamp.innerHTML = `${mins}:${seconds}`
}

// Set video Progress
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop Video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}



// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);