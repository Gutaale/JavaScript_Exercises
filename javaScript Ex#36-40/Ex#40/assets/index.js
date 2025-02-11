const videoElement=document.createElement('video')
const container=document.querySelector('.container')
const videoPlayer=document.querySelector('.video-player')
const videoContent=document.querySelector('#video-content')
const playBtn=document.querySelector('#playBtn')
const prevBtn=document.querySelector('#prevBtn')
const nextBtn=document.querySelector('#nextBtn')
const volumeSlider=document.querySelector('#volume')
const currentTimeEl=document.querySelector('.current-time')
const durationEl=document.querySelector('.video-duration')
const progress=document.querySelector('.progress')
const progressContainer=document.querySelector('.progress-bar')
const speedSelect=document.querySelector('#speed')
const screenControlls=document.querySelector('.screen-controlls')
const title=document.querySelector('#title')




let videoIndex=0
let isPlaying=false
let speed=1

const videos=[
    {title:"Trump imposes 25% tariffs on steel and aluminum, EU pushes back",artist:'Artist one',src:"assets/videos/video-1.mp4" },
    {title:"Can Trump win a trade war with China? - The Global Story podcast, BBC World Service",artist:'Artist two',src:'assets/videos/video-2.mp4' },
    {title:"DeepSeek, TikTok, Temu: How China is taking the lead in tech - BBC World Service",artist:'Artist three',src:'assets/videos/video-3.mp4' },
]


// Functions Coming Here

function loadVideo(video) {
    // title.textContent = video.title;
    // artist.textContent = video.artist;
    console.log(video)
    videoElement.setAttribute('src', video.src);
    videoContent.appendChild(videoElement)
    title.textContent=video.title
}
loadVideo(videos[videoIndex]);
// Play the video
function playVideo() {
    playBtn.querySelector('i').classList.remove('fa-play');
    playBtn.querySelector('i').classList.add('fa-pause');
    videoElement.play().catch(e => console.error("Error playing audio:", e));
    isPlaying = true;
}

// Pause the video
function pauseVideo() {
    playBtn.querySelector('i').classList.remove('fa-pause');
    playBtn.querySelector('i').classList.add('fa-play');
    videoElement.pause();
    isPlaying = false;
}

// play the previous video
function prevVideo() {
    pauseVideo();
    setTimeout(() => {
        videoIndex--;
        if (videoIndex < 0) {
            videoIndex = videos.length - 1;
        }
        loadVideo(videos[videoIndex]);
        playVideo();
    }, 300);
}

// Next song
function nextVideo() {
    pauseVideo();
    setTimeout(() => {
        videoIndex++;
        if (videoIndex > videos.length - 1) {
            videoIndex = 0;
        }
        loadVideo(videos[videoIndex]);
        playVideo();
    }, 300);
}


// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    if (isNaN(duration)) return;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    // console.log('duration', duration)
    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
        durationSeconds = `0${durationSeconds}`;
    }
    
    // Update duration Element
    durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    
    // Calculate display for current
    const currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
        currentSeconds = `0${currentSeconds}`;
    }
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;

    videoElement.playbackRate = speed;
}

// Set progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = videoElement.duration;
    if (isNaN(duration)) return;
    const newTime = (clickX / width) * duration;

  // isFinite() is a JavaScript function that determines whether a value is a finite number. It returns true if the value is a number that is not positive infinity, negative infinity, or NaN (Not-a-Number).

    if (isFinite(newTime)) {
        videoElement.currentTime = newTime;
    }
}

// Change speed
speedSelect.addEventListener('change', (e) => {
    speed =  parseFloat(e.target.value);
    audioElement.playbackRate = speed;
});


//  Events goes here

playBtn.addEventListener('click', ()=>{
    if (isPlaying) {
        pauseVideo();
    } else {
        playVideo();
    }
})

prevBtn.addEventListener('click', prevVideo);
nextBtn.addEventListener('click', nextVideo);

volumeSlider.addEventListener('input', (e) => {
    videoElement.volume = e.target.value;
});

// Time/Video update
videoElement.addEventListener('click', ()=>{
    if (isPlaying) {
        pauseVideo();
    } else {
        playVideo();
    }
});
videoElement.addEventListener('timeupdate', updateProgress);
videoElement.addEventListener('dblclick', ()=>{
    videoElement.requestFullscreen()
});

// click on the progress bar

progressContainer.addEventListener('click', setProgress);

// Change speed
speedSelect.addEventListener('change', (e) => {
    speed =  parseFloat(e.target.value);
    videoElement.playbackRate = speed;
});

screenControlls.addEventListener('click', ()=>{
    videoElement.requestFullscreen()
})


