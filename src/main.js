const game = document.getElementById('trivia')
const home = document.getElementById('cont-play')
const play = document.getElementById('play')
const videosId = [{id: 'zbyhx5_tk0o', title: 'YSY A - Vamo A Darle'}] //como declarar un video

play.addEventListener('click', (e) =>{
  setTimeout(jugar , 2000)
})

function jugar(){
  home.style.display = 'none'
  game.style.display = 'grid'
}

// Api de youtube

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '300',
    width: '600',
    videoId: videosId[0].id, //cargar video atravez de la id
    playerVars: {
      autoPlay: 1,
      controls: 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
  event.target.mute(); //Quitar para desmutear
}

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 0);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

//Para cambiar el titulo de un boton se usa: document.getElementById('option1').innerText = videosId[0].title
