let path = 0;
let dx = 0;
let score = 0;
let next = 0;

let redOutside = 0;
let greenOutside = 0;
let yellowOutside = 0;
let blueOutside = 0;

let toggle;
let newValue=1;

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

cube.addEventListener("click", ()=>{

  dice_sound.play();
  toggle = 1;

  random_num = getRandomInt(1,7);
 
  showClass = 'show-' + random_num;

  if (currentClass) {
    cube.classList.remove(currentClass);
  }

  cube.classList.add(showClass);
  currentClass = showClass;
 
  for (let i=0; i<4; i++) getMove(turn, i);
  
  // next++;
  // if (next > total_player-1) {
  //   next = 0;
  // }
  // eval(turn+'_sub_region').style.background = "ivory";
  // turn = PlayerId[next];
  // eval(turn+'_sub_region').style.background = "#556B2F";

  
  // setInterval(() => {
  //   if (turn !== 'red') cube.click();
  // }, 3000);
  
  // if (eval(turn + 'All') === 1){
  //   eval(turn+'_sub_region').style.background = "#556B2F";
  // }
  // else{
  //   setInterval(() => {
  //     eval(turn+'_sub_region').style.background = "#556B2F";
  //   }, 1000);
  // }
})

function getMove(color, index){
  if ((random_num === 1 || random_num === 6) && eval(color + 'Outside') === 0){ 
    if (toggle){
      console.log("first");
      inout_sound.play();
      eval(color + 'Token')[index].style.bottom = eval(color + 'BottomPath')[0] + "px";
      eval(color + 'Token')[index].style.left = eval(color + 'LeftPath')[0] + "px";
      eval(color + 'Token')[index].style.transition = '0.5s';
 
      eval(color + "Outside += " + 1);
      isOutside[color+index] = 1;
      score++;
      toggle = 0;
    }
  }
  else if (random_num === 1 || random_num === 6){ 
    eval(color + 'Token')[index].addEventListener("click", ()=>{
      if (toggle){
        console.log("second");
        if (isOutside[color+index] === 0){
          inout_sound.play();
          eval(color + 'Token')[index].style.bottom = eval(color + 'BottomPath')[0] + "px";
          eval(color + 'Token')[index].style.left = eval(color + 'LeftPath')[0] + "px";
          eval(color + 'Token')[index].style.transition = '0.5s';

          eval(color + "Outside += " + 1);
          isOutside[color+index] = 1;
          score++;
        }
        else{
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
            score++;
          }, 300);
        }
      
        toggle = 0;
      }
    }, {once:true});    
  }
  else if (eval(color + 'Outside') < 2 && isOutside[color+index] === 1){
    if (toggle){
      console.log("third");
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
      toggle = 0;
      next++;
      if (next > total_player-1) {
        next = 0;
      }
      eval(turn+'_sub_region').style.background = "ivory";
      turn = PlayerId[next];
      eval(turn+'_sub_region').style.background = "#556B2F";
    }
  }
  else if (eval(color + "Outside") >= 2 ){
    eval(color + 'Token')[index].addEventListener("click", ()=>{
      if (toggle){
        console.log('forth');
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
        toggle = 0;
        next++;
        score+=random_num;
        if (next > total_player-1) {
          next = 0;
        }
        eval(turn+'_sub_region').style.background = "ivory";
        turn = PlayerId[next];
        eval(turn+'_sub_region').style.background = "#556B2F";
      }
    }, {once:true})  
  }
  else if (toggle){
    next++;
    if (next > total_player-1) {
      next = 0;
    }
    eval(turn+'_sub_region').style.background = "ivory";
    turn = PlayerId[next];
    eval(turn+'_sub_region').style.background = "#556B2F";
    toggle = 0;
  }
}