var cube = document.querySelector('.ThreeD-dice');
var currentClass = '';

// Get the random number between min and max provided
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

// Get the sound during dice rolled
let dice_sound = new Audio('./audio/dice.mp3');

function rollDice() {
  cube.addEventListener("click", function () {
    dice_sound.play();
  })

  var random_num =getRandomInt(1,7);

  var showClass = 'show-' + random_num;

  if (currentClass) {
    cube.classList.remove(currentClass);
  }

  cube.classList.add(showClass);
  currentClass = showClass;
}

rollDice();

cube.addEventListener("click", rollDice);