let video = document.getElementById("video");
let play = document.getElementById("play");
let stop = document.getElementById("stop");
let progress = document.getElementById("progress");
let timestamp = document.getElementById("timestamp");

video.addEventListener("click", function() {
    console.log("clicked");
    /* if (this.paused) {
        this.play();
    } else {
        this.pause();
    } */
});

play.addEventListener("click", function() {
    if (video.paused) {
        video.play();
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    } else {
        video.pause();
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }
})

stop.addEventListener("click", function() {
    video.currentTime = 0;
    video.pause();
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
});