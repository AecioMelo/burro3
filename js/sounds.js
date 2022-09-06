//variavel de som
var sound

//numero aleatorio
function generateRandomNumber() {
  return Math.floor(Math.random() * 7 + 1)
}

function playSound() {
  //atribuindo numero aleatorio pra variavel
  var x = generateRandomNumber()

  //se o som existir pausa senao cria outro
  if (sound) {
    sound.pause()
  } else {
    sound = new Audio()
  }

  if (x == 1) {
    sound.src = './sounds/receba.mp3'
  } else if (x == 2) {
    sound.src = './sounds/pedro.mp3'
  } else if (x == 3) {
    sound.src = './sounds/pe.mp3'
  } else if (x == 4) {
    sound.src = './sounds/aecio.mp3'
  } else if (x == 5) {
    sound.src = './sounds/alerta.mp3'
  } else if (x == 6) {
    sound.src = './sounds/pemorreu.mp3'
  } else if (x == 7) {
    sound.src = './sounds/calaboca.mp3'
  }
  //solta o som dj
  sound.play()
}

document.getElementById('soundbutton').addEventListener('click', playSound)
