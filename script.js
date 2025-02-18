
const video = document.getElementById('video');
const play = document.getElementById('play');
const pouse = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


// ? play/pouse video
function toggleVideoStatus(){
    if(video.paused){
        video.play()
    } else{
        video.pause()
    }
}

// ? update play/pouse icon
function updatePlayIcon(){
    if(video.poused){
        play.innerHTML = '<li class = "fa fa-stop fa-2x"></li>'
    }else{
        play.innerHTML = '<li class= "fa fa-pause fa-2x"></li>'
    }
}

// ? update progress and timestamp
function updateProgress(){
    progress.value = (video.currentTime / video.duration) *100

    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10){
        mins = '0' + String(mins)
    }

    let sec = Math.floor(video.currentTime % 60);
        if(sec < 10){
        sec = '0' + String(sec)
        }

        timestamp.innerHTML = `${mins}:${sec} `
}


// ?set video time to progress
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration) / 100
}

// ? Stop the video
function stopVideo(){
    video.currentTime = 0;
    video.pause()
}


// ? Event listeners

video.addEventListener('click', toggleVideoStatus)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toggleVideoStatus)
pouse.addEventListener('click', stopVideo)

progress.addEventListener('change', setVideoProgress)
