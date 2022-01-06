// Initialize required variable
let path = 0;
let dx = 0;
let score = 0;
let next = 0;

let redOutside = 0;
let greenOutside = 0;
let yellowOutside = 0;
let blueOutside = 0;

let z_index = 0;
let color;

let toggle = 0;
let redToggle = 0;
let greenToggle = 0;
let yellowToggle = 0;
let blueToggle = 0;

let winner_token = [];
let interval;

let isIntervalCleared;
let trigger;
let createInterval;
let triggerInterval;

//======================================================================
// This will encounter if a token is outside its initial position or not
// 0 refers --> a token is inside and 1 refers --> a token is outside
//=====================================================================
let isOutside = {
  'red0': 0, 'red1': 0, 'red2': 0, 'red3': 0,
  'green0': 0, 'green1': 0, 'green2': 0, 'green3': 0,
  'blue0': 0, 'blue1': 0, 'blue2': 0, 'blue3': 0,
  'yellow0': 0, 'yellow1': 0, 'yellow2': 0, 'yellow3':0
};

//=================================================
// Let's track the position of each token
//=================================================
let position = {
  'red0': 0, 'red1': 0, 'red2': 0, 'red3': 0,
  'green0': 0, 'green1': 0, 'green2': 0, 'green3': 0,
  'blue0': 0, 'blue1': 0, 'blue2': 0, 'blue3': 0,
  'yellow0': 0, 'yellow1': 0, 'yellow2': 0, 'yellow3':0
};


//================================
// when the dice is rolled
//================================
cube.addEventListener("click", ()=>{
  
  // roll the dice only when previous moves is completed
  if (!toggle){
    dice_sound.play();
    toggle = 1;

    clearInterval(createInterval);
    trigger = 0;
    triggerInterval = 0;

    color = turn;
    eval(color + "Toggle = " + 1);

    z_index++;
    for (let i=0; i<4; i++) eval(color + 'Token')[i].style.zIndex = String(z_index);

    isIntervalCleared = 0;

    isPlayed.style.display = "none";

    random_num = getRandomInt(1,7);
    
    showClass = 'show-' + random_num;

    if (currentClass) {
      cube.classList.remove(currentClass);
    }

    cube.classList.add(showClass);
    currentClass = showClass;
    
    for (let i=0; i<4; i++) getMove(color, i);
    // getMove(color, 0);
  }
  else{
    isPlayed.style.display = "block";
  }
});


//=========================================================================
// This is the main function that encounter where to move and by how much
//=========================================================================

function getMove(color, index){

  // otherwise, move the token based on the random number of dice rolled
  if ((random_num === 1 || random_num === 6) && eval(color + 'Outside') === 0 ){ 
    if (eval(color + 'Toggle')){
      inout_sound.play();
      
      eval(color + 'Token')[index].style.bottom = eval(color + 'BottomPath')[0] + "px";
      eval(color + 'Token')[index].style.left = eval(color + 'LeftPath')[0] + "px";
      eval(color + 'Token')[index].style.transition = '0.5s';
 
      eval(color + "Outside += " + 1);
      isOutside[color+index] = 1;
      score++;
      turn = PlayerId[next];
      toggle = 0;
      eval(color + "Toggle = " + 0);
    }
  }
  else if (random_num === 1 || random_num === 6 ){ 
    
    eval(color + 'Token')[index].addEventListener("click", function(){
      if (eval(color + 'Toggle')){
        if ((random_num === 1 || random_num === 6) && isOutside[color+index] === 0){
          inout_sound.play();
          
          eval(color + 'Token')[index].style.bottom = eval(color + 'BottomPath')[0] + "px";
          eval(color + 'Token')[index].style.left = eval(color + 'LeftPath')[0] + "px";
          eval(color + 'Token')[index].style.transition = '0.5s';

          eval(color + "Outside += " + 1);
          isOutside[color+index] = 1;
          score++;
          turn = PlayerId[next];
          toggle = 0;
          eval(color + "Toggle = " + 0);

        }
        else if (random_num === 1 || random_num === 6){
          interval = setInterval(() => {
            step_sound.play();
            dx ++;
            position[color+index] ++;

            Cell[color + 'Cell' + index] ++;
            if (color !== 'red'){
              if (Cell[color + 'Cell' + index] >= TOTAL_COMMON_CELL) Cell[color+ 'Cell' + index] = 0;
            }

            path = position[color+index];
            
            eval(color + 'Token')[index].style.bottom = eval(color + 'BottomPath')[path] + "px";
            eval(color + 'Token')[index].style.left = eval(color + 'LeftPath')[path] + "px";
            
            if (dx >= random_num){
              clearInterval(interval);
              isIntervalCleared = 1;
              dx = 0;
            }

            if (isIntervalCleared){
              trigger = 1;
              score += random_num;

              if (position[color + index] >= total_cell){
                winner_sound.play();
                winner_token.push(eval(color + 'Token')[index]);
              }
              turn = PlayerId[next];
            }
          }, 300);

          toggle = 0;
          eval(color + "Toggle = " + 0);

          createInterval = setInterval(() => {
            if (trigger === 1){
              color, index = withCoin(color, index);
              color, index = withLadder(color, index);
              color, index = withSnake(color, index);
              color, index  = resetToken(color,index);
              clearInterval(createInterval);
            } 
          });
        }
      }
    }, {once:true});    
  }
  else if (eval(color + 'Outside') === 1 ){
    if (eval(color + 'Toggle')){
      interval = setInterval(() => {
        step_sound.play();
        dx ++;
        position[color+index] ++;
        path = position[color+index];

        Cell[color + 'Cell' + index] ++;
        if (color !== 'red'){
          if (Cell[color + 'Cell' + index] >= TOTAL_COMMON_CELL) Cell[color+ 'Cell' + index] = 0;
        }
        
        eval(color + 'Token')[index].style.bottom = eval(color + 'BottomPath')[path] + "px";
        eval(color + 'Token')[index].style.left = eval(color + 'LeftPath')[path] + "px";
        
        if (dx >= random_num){
          clearInterval(interval);
          isIntervalCleared = 1;
          dx = 0;
        }

        if (isIntervalCleared){
          trigger = 1;
          eval(color+'_sub_region').style.background = "ivory";

          next += 1;
          if (next > total_player-1) {
            next = 0;
          }
          turn = PlayerId[next];
          eval(turn+'_sub_region').style.background = "#556B2F";
  
          score += random_num;

          if (position[color + index] >= total_cell){
            winner_sound.play();
            winner_token.push(eval(color + 'Token')[index]);
            next--;
            turn = PlayerId[next];

          }
        }

      }, 300);
      toggle = 0;
      eval(color + "Toggle = " + 0);

      createInterval = setInterval(() => {
        if (trigger === 1){
          color, index = withCoin(color, index);
          color, index = withLadder(color, index);
          color, index = withSnake(color, index);
          color, index = resetToken(color, index);
          clearInterval(createInterval);
        } 
      });

    }
  }
  else if (eval(color + "Outside") >= 2 ){
    eval(color + 'Token')[index].addEventListener("click", function(){
      if (eval(color + 'Toggle')){
        if (isOutside[color+index] === 1){
          interval = setInterval(() => {
            step_sound.play();
            dx ++;
            position[color+index] ++;
            path = position[color+index];
            
            Cell[color + 'Cell' + index] ++;
            if (color !== 'red'){
              if (Cell[color + 'Cell' + index] >= TOTAL_COMMON_CELL) Cell[color+ 'Cell' + index] = 0;
            }

            eval(color + 'Token')[index].style.bottom = eval(color + 'BottomPath')[path] + "px";
            eval(color + 'Token')[index].style.left = eval(color + 'LeftPath')[path] + "px";
            
            if (dx >= random_num){
              clearInterval(interval);
              isIntervalCleared = 1;
              dx = 0;
            }

            if (isIntervalCleared){
              trigger = 1;
              eval(color+'_sub_region').style.background = "ivory";

              score+=random_num;

              next += 1;
              if (next > total_player-1) {
                next = 0;
              }
              turn = PlayerId[next];

              eval(turn+'_sub_region').style.background = "#556B2F";

              if (position[color + index] >= total_cell){
                winner_sound.play();
                winner_token.push(eval(color + 'Token')[index]);
                next--;
                turn = PlayerId[next];
              }
            }

          }, 300);
          toggle = 0;
          eval(color + "Toggle = " + 0);

          createInterval = setInterval(() => {
            if (trigger === 1){
              color, index = withCoin(color, index);
              color, index = withLadder(color, index);
              color, index = withSnake(color, index);
              color, index  = resetToken(color,index);
              clearInterval(createInterval);
            } 
          });
        }
      }
    }, {once:true});  
  }
  else if (eval(color + 'Toggle')){
    next += 1;
    if (next > total_player-1) {
      next = 0;
    }
    eval(color+'_sub_region').style.background = "ivory";
    turn = PlayerId[next];
    eval(turn+'_sub_region').style.background = "#556B2F";
    toggle = 0;
    eval(color + "Toggle = " + 0);
  }
}