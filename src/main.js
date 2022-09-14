// Api de youtube

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('playerOne', {
    height: '200',
    width: '400',
    videoId: videosId[videoWin].id, //cargar video atravez de la id
    playerVars: {
      autoPlay: 1,
      controls: 0,
      disablekb: 0
    },
  });
}

function stopVideo() {
  player.stopVideo();
}


//Fin de la api de youtube

const video = document.getElementById('video')
const game = document.getElementById('trivia')
const home = document.getElementById('cont-play')
const play = document.getElementById('play')
const lv1 = document.getElementById('lv1')
let point1 = 100
lv1.innerText = point1
const lv2 = document.getElementById('lv2')
let point2 = 100
lv2.innerText = point2
const lv3 = document.getElementById('lv3')
let point3 = 100
lv3.innerText = point3
const soundPlay = new Audio('./sound/play.mp3')
const soundWin = new Audio('./sound/victory.mp3')
const soundError = new Audio('./sound/error.mp3')
const videoWin = Math.floor(Math.random() * 15)
const numRandomBoton = Math.floor(Math.random() * 4)
const botonWin = document.getElementById(`option${numRandomBoton}`)
const arrTitle = []

while(arrTitle.length < 8){

  let n = Math.floor(Math.random() * 15)

  if(n !== videoWin){
    arrTitle.push(n)
  }
}

const newArrTitle = [...new Set(arrTitle)]

const arr = [0,1,2,3,4]
const newArr = arr.filter(ele => ele !== numRandomBoton)

const botonDefear = document.getElementById(`option${newArr[0]}`)
const botonDefear2 = document.getElementById(`option${newArr[1]}`)
const botonDefear3 = document.getElementById(`option${newArr[2]}`)
const botonDefear4 = document.getElementById(`option${newArr[3]}`)
const botones = document.querySelectorAll('.btn')

const videosId = [
  //{id: 'id del video', title: 'titulo'}
  {id: '-10ZXMMc4x4', title: 'YSY A - Silbando (prod. Club Hats) | #YSYA2020 Vol. 5'},
  {id: 'OWoMlr4bUQ4', title: 'DUKI - Rockstar (Video Oficial)'},
  {id: 'rQ2KLveYGDU', title: 'DUKI, Aleman - Me Gusta lo Simple (Video Lyric)'},
  {id: 'uc8Fr6m_6qU', title: 'DUKI x YSY A - A Punta de Espada (Video Oficial)'},
  {id: 'AmNOfqeUFLk', title: 'WOS - FRESCO'},
  {id: 'VVPgs_MDSoI', title: 'YSY A - Una de Dos (prod. Club Hats) | #YSYA2020 Vol. 1'},
  {id: 'mLUZel-6p-g', title: 'YSY A - Un flow de infarto (prod. Bizarrap) | #YSYA2020 Vol. 6'},
  {id: 'y9hR9e6u1dg', title: 'Falke 912, Bhavi Ft. LIT Killah - Nat Geo Remix [Video Oficial]'},
  {id: '5K37BDfzPKk', title: 'Tiago PZK x Rusherking x LIT killah x Seven Kayne x Bhavi x Tobi - Cerca De Ti (Remix)'},
  {id: 'BPOTsDH3BaU', title: 'Seven Kayne - Buenos Aires (feat BHAVI, KHEA)'},
  {id: 'b-WbKJJjetQ', title: 'WOS - TERRAZA (Video Oficial)'},
  {id: 'l5QAOvBqT3c', title: 'WOS - CANGURO (Video Oficial)'},
  {id: 'gfhwR0hzGA0', title: 'ZANTO - ATURDIDO'},
  {id: 'xGIsFhzg9NA', title: 'Ecko, Khea, Seven Kayne & Iacho - Rebota (Prod. by Omar Varela)'},
  {id: 'ucD-T9hH7-w', title: 'Frijo - LIKE BOSS Remix ft. Moonkey, Polimá, Akapellah, Duki, Santoz, Zanto [Lyrics Video]'},
  {id: 'DeE8gnjfsrA', title: 'YSY A - Pasa que yo (prod. yesan) | #YSYA2020 Vol. 4'},
] 

play.addEventListener('click', () =>{
  soundPlay.play()
  setTimeout(jugar , 2000)
})

function jugar(){
  home.style.display = 'none'
  game.style.display = 'grid'
  player.playVideo()

  botonWin.innerText = player.videoTitle
  botonDefear.innerText = videosId[newArrTitle[0]].title
  botonDefear2.innerText = videosId[newArrTitle[1]].title
  botonDefear3.innerText = videosId[newArrTitle[2]].title
  botonDefear4.innerText = videosId[newArrTitle[3]].title
}

botonWin.addEventListener('click', () =>{
  soundWin.play()
  botonWin.style.background = 'var(--verde)'
  botonWin.style.border = '5px solid var(--verde-borde)'
  botonWin.style.color = 'white'
  video.style.filter = 'none'
  lv1.style.backgroundColor = 'var(--verde)'
  botones.forEach(ele => {
    ele.style.pointerEvents = 'none'
  });
})

function botonD(e){
  soundError.play()
  e.target.style.background = 'var(--rojo)'
  e.target.style.border = '5px solid var(--rojo-borde)'
  e.target.style.color = 'white'
  point1 -= 20
  lv1.innerHTML = point1
}

botonDefear.addEventListener('click', (e) =>{
  botonD(e)
})

botonDefear2.addEventListener('click', (e) =>{
  botonD(e)
})

botonDefear3.addEventListener('click', (e) =>{
  botonD(e)
})

botonDefear4.addEventListener('click', (e) =>{
  botonD(e)
})
