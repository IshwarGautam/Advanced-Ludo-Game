let random_num;
let showClass;
let currentClass = '';
let PlayerName = [];
let PlayerId = ["red", "green", "yellow", "blue"];
let index = 0;
let turn = PlayerId[index];
let total_cell = 56;
let total_color;
eval(turn+'_sub_region').style.background = "#556B2F";
let checkmate;
let total_player = PlayerId.length;

// Get the random number between min and max provided
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

// Get the sound during dice rolled, and when moving tokens
let dice_sound = new Audio('./audio/dice.mp3');
let step_sound = new Audio('./audio/step.mp3');
let inout_sound = new Audio('./audio/whoosh.mp3');
let winner_sound = new Audio('./audio/winner.mp3');
let killed_sound = new Audio('./audio/killed.mp3');

// Let track the path of each token
let redBottomPath = [40, 80, 120, 160, 200, 240, 240, 240, 240, 240, 240, 280, 320, 320, 320, 320, 320, 320, 360, 400, 440, 480, 520, 560, 560, 560, 520, 480, 440, 400, 360, 320, 320, 320, 320, 320, 320, 280, 240, 240, 240, 240, 240, 240, 200, 160, 120, 80, 40, 0, 0, 40, 80, 120, 160, 200, 240];
let redLeftPath = [240, 240, 240, 240, 240, 200, 160, 120, 80, 40, 0, 0, 0, 40, 80, 120, 160, 200, 240, 240, 240, 240, 240, 240, 280, 320, 320, 320, 320, 320, 320, 360, 400, 440, 480, 520, 560, 560, 560, 520, 480, 440, 400, 360, 320, 320, 320, 320, 320, 320, 280, 280, 280, 280, 280, 280, 280];

let greenBottomPath = [320, 320, 320, 320, 320, 360, 400, 440, 480, 520, 560, 560, 560, 520, 480, 440, 400, 360, 320, 320, 320, 320, 320, 320, 280, 240, 240, 240, 240, 240, 240, 200, 160, 120, 80, 40, 0, 0, 0, 40, 80, 120, 160, 200, 240, 240, 240, 240, 240, 240, 280, 280, 280, 280, 280, 280, 280];
let greenLeftPath = [40, 80, 120, 160, 200, 240, 240, 240, 240, 240, 240, 280, 320, 320, 320, 320, 320, 320, 360, 400, 440, 480, 520, 560, 560, 560, 520, 480, 440, 400, 360, 320, 320, 320, 320, 320, 320, 280, 240, 240, 240, 240, 240, 240, 200, 160, 120, 80, 40, 0, 0, 40, 80, 120, 160, 200, 240 ];

let yellowBottomPath = [520, 480, 440, 400, 360, 320, 320, 320, 320, 320, 320, 280, 240, 240, 240, 240, 240, 240, 200, 160, 120, 80, 40, 0, 0, 0, 40, 80, 120, 160, 200, 240, 240, 240, 240, 240, 240, 280, 320, 320, 320, 320, 320, 320, 360, 400, 440, 480, 520, 560, 560, 520, 480, 440, 400, 360, 320];
let yellowLeftPath = [320, 320, 320, 320, 320, 360, 400, 440, 480, 520, 560, 560, 560, 520, 480, 440, 400, 360, 320, 320, 320, 320, 320, 320, 280, 240, 240, 240, 240, 240, 240, 200, 160, 120, 80, 40, 0, 0, 0, 40, 80, 120, 160, 200, 240, 240, 240, 240, 240, 240, 280, 280, 280, 280, 280, 280, 280];

let blueBottomPath = [240, 240, 240, 240, 240, 200, 160, 120, 80, 40, 0, 0, 0, 40, 80, 120, 160, 200, 240, 240, 240, 240, 240, 240, 280, 320, 320, 320, 320, 320, 320, 360, 400, 440, 480, 520, 560, 560, 560, 520, 480, 440, 400, 360, 320, 320, 320, 320, 320, 320, 280, 280, 280, 280, 280, 280, 280];
let blueLeftPath = [520, 480, 440, 400, 360, 320, 320, 320, 320, 320, 320, 280, 240, 240, 240, 240, 240, 240, 200, 160, 120, 80, 40, 0, 0, 0, 40, 80, 120, 160, 200, 240, 240, 240, 240, 240, 240, 280, 320, 320, 320, 320, 320, 320, 360, 400, 440, 480, 520, 560, 560, 520, 480, 440, 400, 360, 320];

let safeCell = [0, 8, 13, 21, 26, 34, 39, 47]

let coinPlace = [4, 12, 17, 25, 30, 38, 41]

function getRandomFromArray(quantity, arr, max){
  let getRandom = []
  let isRepeat;

  for (let i = 0; i < quantity; i++) {
    do {
      let random_index = getRandomInt(0, max);
      let random_value = arr[random_index];
      isRepeat = getRandom.includes(random_value);
      if(!isRepeat){
        getRandom.push(random_value);
      }
    }
    while(isRepeat);
  }
  return getRandom;
}

// Initial position for each color token
const Red_bottomPos = ['58', '58', '142', '142'];
const Red_leftPos = ['58', '142', '58', '142'];

const Green_bottomPos = ['418', '418', '502', '502'];
const Green_leftPos = ['58', '142', '58', '142'];

const Yellow_bottomPos = ['418', '418', '502', '502'];
const Yellow_leftPos = ['418', '502', '418', '502'];

const Blue_bottomPos = ['58', '58', '142', '142'];
const Blue_leftPos = ['418', '502', '418', '502'];

let Cell = {
  'redCell0':0, 'redCell1':0, 'redCell2':0, 'redCell3':0,
  'greenCell0':13, 'greenCell1':13, 'greenCell2':13, 'greenCell3':13,
  'blueCell0':39, 'blueCell1':39, 'blueCell2':39, 'blueCell3':39,
  'yellowCell0':26, 'yellowCell1':26, 'yellowCell2':26, 'yellowCell3':26
};

let Cell_copy = {
  'redCell0':0, 'redCell1':0, 'redCell2':0, 'redCell3':0,
  'greenCell0':13, 'greenCell1':13, 'greenCell2':13, 'greenCell3':13,
  'blueCell0':39, 'blueCell1':39, 'blueCell2':39, 'blueCell3':39,
  'yellowCell0':26, 'yellowCell1':26, 'yellowCell2':26, 'yellowCell3':26
};

function resetToken(color, index){
  checkmate = 0;

  if (color !== 'red'){
    if (Cell[color + 'Cell' + index]>=52) Cell[color+ 'Cell' + index] = 0;
  }

  if (!(safeCell.includes(Cell[color + 'Cell' + index]))){

    let total_color = PlayerId.filter(function(value){ 
      return value != color;
    });

    for (let i=0; i<total_color.length; i++){
      for (let j=0; j<3; j++){
        
        if (Cell[color + 'Cell' + index] === Cell[total_color[i] + 'Cell' + j]){
        
          killed_sound.play();
          let dx = Cell[total_color[i] + 'Cell' + j];
          let interval1 = setInterval(() => {
            dx --;
            position[total_color[i]+j] --;
            path = position[total_color[i]+j];
            eval(total_color[i] + 'Token')[j].style.bottom = eval(total_color[i] + 'BottomPath')[path] + "px";
            eval(total_color[i] + 'Token')[j].style.left = eval(total_color[i] + 'LeftPath')[path] + "px";
            if (dx < 0){
              clearInterval(interval1);
              checkmate = 1;
              dx = 0;
            }

            if (checkmate){
              eval(total_color[i] + 'Token')[j].style.bottom = eval(total_color[i].charAt(0).toUpperCase() + total_color[i].slice(1) + '_bottomPos')[j] + 'px';
              eval(total_color[i] + 'Token')[j].style.left = eval(total_color[i].charAt(0).toUpperCase() + total_color[i].slice(1) + '_leftPos')[j] + 'px';
              Cell[total_color[i] + 'Cell' + j] = Cell_copy[total_color[i] + 'Cell' + j];
              isOutside[total_color[i]+j] = 0;
              eval(total_color[i] + "Outside -= " + 1);

              if (position[color + index] < total_cell && (random_num !== 1 || random_num !==6)) next--;
            }
            
          }, 100);
        }
      }
    }
  }
  return (color, index);
}
