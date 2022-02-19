let video = document.getElementById("video");
let play = document.getElementById("play");
let stop = document.getElementById("stop");
let progress = document.getElementById("progress");
let timestamp = document.getElementById("timestamp");

// Play and pause buttons

play.addEventListener("click", function() {
    if (video.paused) {
        video.play();
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
        console.log(video.currentTime);
    } else {
        video.pause();
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
        console.log(video.currentTime);
    }
})

// Stop button

stop.addEventListener("click", function() {
    video.currentTime = 0;
    video.pause();
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
});

// Make progress bar move

video.addEventListener("timeupdate", function() {
    progress.value = (video.currentTime / video.duration) * 100; 
});

// Skip video with the progress bar

progress.addEventListener("change", function() {
    video.currentTime = (+progress.value * video.duration) / 100;
});

// Timestamp update

video.addEventListener("timeupdate", function() {
    progress.value = (video.currentTime / video.duration) * 100;
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }

    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = mins + ":" + secs;
});