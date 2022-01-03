let path = 0;
let dx = 0;
let score = 0;
let next = 0;

let redAll = 1;
let greenAll = 1;
let yellowAll = 1;
let blueAll = 1;

let isOutside = {
  'red0': 0, 'red1': 0, 'red2': 0, 'red3': 0,
  'green0': 0, 'green1': 0, 'green2': 0, 'green3': 0,
  'blue0': 0, 'blue1': 0, 'blue2': 0, 'blue3': 0,
  'yellow0': 0, 'yellow1': 0, 'yellow2': 0, 'yellow3':0,
  'blue0': 0, 'blue1': 0, 'blue2': 0, 'blue3': 0
}

let position = {
  'red0': 0, 'red1': 0, 'red2': 0, 'red3': 0,
  'green0': 0, 'green1': 0, 'green2': 0, 'green3': 0,
  'blue0': 0, 'blue1': 0, 'blue2': 0, 'blue3': 0,
  'yellow0': 0, 'yellow1': 0, 'yellow2': 0, 'yellow3':0,
  'blue0': 0, 'blue1': 0, 'blue2': 0, 'blue3': 0
}


function moveToken(){

  cube.addEventListener("click", ()=>{

    dice_sound.play();

    random_num = getRandomInt(1,7);
    
    showClass = 'show-' + random_num;

    if (currentClass) {
      cube.classList.remove(currentClass);
    }

    cube.classList.add(showClass);
    currentClass = showClass;
    

    // for (let i=0; i<4; i++) getMove(turn, i);
    // if (eval(turn + 'All') === 1) getMove(turn, 0);
    getMove(turn, 0);
    getMove(turn, 1);
    getMove(turn, 2);
    getMove(turn, 3);
    next++;
    if (next > total_player-1) {
      next = 0;
    }
    eval(turn+'_sub_region').style.background = "ivory";
    turn = PlayerId[next];
    eval(turn+'_sub_region').style.background = "#556B2F";

  })
}

moveToken();

function getMove(color, index){
  if ((random_num === 1 || random_num === 6) && eval(color + 'All') === 1 && turn === color){ 
    inout_sound.play();

    eval(color + 'Token')[index].style.bottom = eval(color + 'BottomPath')[0] + "px";
    eval(color + 'Token')[index].style.left = eval(color + 'LeftPath')[0] + "px";
    eval(color + 'Token')[index].style.transition = '0.5s';

    eval(color + 'All') === 0;
    let newValue = 0;
    eval(color + "All = " + newValue);
    isOutside[color+index] = 1;
    next--;
    score++;
  }
  else if (random_num === 1 || random_num === 6 && isOutside[color+index] === 1){
    eval(color + 'Token')[index].addEventListener("click", ()=>{
      step_sound.play();

      let interval = setInterval(() => {
        dx ++;
        position[color+index] ++;
        path = position[color+index];
        eval(color + 'Token')[index].style.bottom = eval(color + 'BottomPath')[path] + "px";
        eval(color + 'Token')[index].style.left = eval(color + 'LeftPath')[path] + "px";
        if (dx >= random_num){
          clearInterval(interval);
          dx = 0;
        }
      }, 300);
      next--;

      score += random_num;
      // turn  = playerId[next-1];
    }, {once:true})
  }
  else if (isOutside[color+index] === 1){

    eval(color + 'Token')[index].addEventListener("click", ()=>{
      let interval = setInterval(() => {
        step_sound.play();
        dx ++;
        position[color+index] ++;
        path = position[color+index];
        eval(color + 'Token')[index].style.bottom = eval(color + 'BottomPath')[path] + "px";
        eval(color + 'Token')[index].style.left = eval(color + 'LeftPath')[path] + "px";
        if (dx >= random_num){
          clearInterval(interval);
          dx = 0;
        }
      }, 300);
      score += random_num;
    }, {once:true})
  }
}