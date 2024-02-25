// Selecting Songs
let song1 = document.getElementById("Song1");
let song2 = document.getElementById("Song2");
let song3 = document.getElementById("Song3");
let song4 = document.getElementById("Song4");
let song5 = document.getElementById("Song5");

// Setting buttons
let prevBtn = document.getElementById("prev-btn");
let playBtn = document.getElementById("play-btn");
let nextBtn = document.getElementById("next-btn"); 
let songName = document.querySelector(".song-name");
let playPauseBtn = document.getElementById("play-pause-icon")
const songs = [
    {element: song1 , name : "Death Wish By Talha Anjum"},
    {element : song2 , name : "11K By Seedhee Maut"},
    {element : song3 , name : "Downers At Dusk By TA Produced UMAIR"},
    {element : song4 , name : "Duniyaa Makaar By Karma"},
    {element : song5 , name : "Life Goes On By aleemrk"}
]

let current = 0;
let currentSong = songs[current].element;
songName.textContent = songs[current].name;

playBtn.addEventListener ("click" , ()=>{
 PlayPauseSong();   
});

nextBtn.addEventListener("click" , ()=> {
    updateSong("next");
    PlayPauseSong();
});

prevBtn.addEventListener("click" , ()=> {
    updateSong("prev");
    PlayPauseSong();
})


let updateSong = (p) => {
    currentSong.pause();
    currentSong.nextTime = 0;
    if(p === "next") {
        current++;
        if(current > songs.length - 1) {
            current = 0;
        }
    }

    if(p === "prev") {
        current--;

        if(current < 0) current =  songs.length - 1;
    }
    currentSong = songs[current].element;
    songName.textContent = songs[current].name;
}
 
let PlayPauseSong = () => {
    if(currentSong.paused) {
        currentSong.play();
        playPauseBtn.className = "fa-solid fa-pause";
    } else {
        currentSong.pause();
        playPauseBtn.className = "fa-solid fa-play";
    }
}