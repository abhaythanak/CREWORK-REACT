console.log("this is my payList")
let songIndex = 0;
let audioElement = new Audio('./mp3/Bones.mp3');
let masterPlay = document.getElementById('play')
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif')

const songs = [
    {
        id:1,
        songName: 'bones',
        filePath:"./mp3/Bones.mp3",
        coverPath:"./img/jocker.png",

    }
]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.pause || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
})

myProgressBar.addEventListener('timeupdate',()=>{
    console.log("timeupdate")
})