console.log("Welcome to Spotify Clone");

let songindex = 1;
let audioelement = new Audio('/songs/1.mp3');
let masterplayer = document.getElementById('masterplayer');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif')
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songitemplay = Array.from(document.getElementsByClassName('songitemplay'));
let next = document.getElementById('next');
let previous = document.getElementById('previous');
let mastersongname = document.getElementById('mastersongname');


let songs =
    [{ name: "let me love you ", filePath: '/songs/1.mp3', coverPath: '/covers/1.jpg' },
    { name: "dard der disco", filePath: '/songs/2.mp3', coverPath: '/covers/2.jpg' },
    { name: "Abhilash Album", filePath: '/songs/3.mp3', coverPath: '/covers/3.jpg' },
    { name: "Anna Album", filePath: '/songs/4.mp3', coverPath: '/covers/4.jpg' },
    { name: "Appa Album", filePath: '/songs/5.mp3', coverPath: '/covers/5.jpg' },
    { name: "Amma ALbum", filePath: '/songs/6.mp3', coverPath: '/covers/6.jpg' },
    { name: "let me love by ", filePath: '/songs/7.mp3', coverPath: '/covers/7.jpg' },
    { name: "enjoy enjamii", filePath: '/songs/8.mp3', coverPath: '/covers/10.jpg' },
    { name: "let me go out ", filePath: '/songs/9.mp3', coverPath: '/covers/9.jpg' },
    ]

songItem.forEach((element, i) => {
    // console.log(i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath
    element.getElementsByClassName('songname')[0].innerText = songs[i].name;
});


masterplayer.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplayer.classList.remove('fa-play-circle')
        masterplayer.classList.add('fa-pause-circle')
        gif.style.opacity = 1;

    }
    else {
        audioelement.pause();
        masterplayer.classList.remove('fa-pause-circle');
        masterplayer.classList.add('fa-play-circle')
        gif.style.opacity = 0;
        songitemplay.forEach((element) => {
            // element.target.classList.add('fa-play-circle'); 
            element.classList.add('fa-play-circle');
            element.classList.remove('fa-pause-circle');
            

        })

    }
})

audioelement.addEventListener('timeupdate', () => {
    console.log('timeupdate')
    let progress = parseInt(audioelement.currentTime / audioelement.duration * 100);
    progressbar.value = progress;
})

progressbar.addEventListener('change', () => {
    audioelement.currentTime = (progressbar.value * audioelement.duration) / 100;
})
const makeallplay = () => {
    songitemplay.forEach((element) => {
        // element.target.classList.add('fa-play-circle'); 
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');

    })
}

songitemplay.forEach((element) => {
    element.addEventListener('click', (e) => {
        let songindex = e.target.id
        makeallplay();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `/songs/${songindex}.mp3`
        audioelement.currentTime = 0;
        audioelement.play();
        masterplayer.classList.remove('fa-play-circle')
        masterplayer.classList.add('fa-pause-circle')
        mastersongname.innerText = songs[songindex-1].name;
        gif.style.opacity = 1;


    })
})

next.addEventListener('click', () => {
    if (songindex >= 9 ) {
        songindex = 1;
    }
    else {
        songindex += 1;
    }
    audioelement.src = `/songs/${songindex}.mp3`
    audioelement.currentTime = 0;
    audioelement.play();
    masterplayer.classList.remove('fa-play-circle')
    masterplayer.classList.add('fa-pause-circle')
    console.log(songindex);
    mastersongname.innerText = songs[songindex-1].name;


})
previous.addEventListener('click', () => {
    if (songindex <= 1) {
        songindex = 9;
    }
    else {
        songindex -= 1;
    }
    audioelement.src = `/songs/${songindex}.mp3`
    audioelement.currentTime = 0;
    audioelement.play();
    masterplayer.classList.remove('fa-play-circle')
    masterplayer.classList.add('fa-pause-circle')
    console.log(songindex);
    mastersongname.innerText = songs[songindex-1].name;

})