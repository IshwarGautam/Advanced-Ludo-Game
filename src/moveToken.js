// Initialize required variable
let path = 0;
let dx = 0;
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

let interval;
let isIntervalCleared;
let trigger;
let createInterval;
let triggerInterval;

let redScore = 0;
let greenScore = 0;
let blueScore = 0;
let yellowScore = 0;

let timeInterval;


let winner_token = {
  'red':0, 'green':0, 'yellow':0, 'blue':0
}

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


// get highscore from our local storage
let highScore = localStorage.getItem("highScore") || 0;
high_score_value.innerHTML = highScore; 

let highScore_player = localStorage.getItem("highScore-player") || '';
high_score_name.innerHTML = highScore_player;


//================================
// when the dice is rolled
//================================

function rollDice(){
  // roll the dice only when previous moves is completed
  if (!toggle){
    dice_sound.play();
    toggle = 1;

    // clear the interval (named createInterval) if any
    clearInterval(createInterval);

    trigger = 0;
    triggerInterval = 0;
    intervalOver = 0;

    response = 0;

    color = turn;
    eval(color + "Toggle = " + 1);

    z_index++;
    for (let i=0; i<4; i++) eval(color + 'Token')[i].style.zIndex = String(z_index);

    isIntervalCleared = 0;
    intervalCleared = 0;

    isPlayed.style.display = "none";

    random_num = getRandomInt(1,7);
    
    showClass = 'show-' + random_num;

    if (currentClass) {
      cube.classList.remove(currentClass);
    }

    cube.classList.add(showClass);
    currentClass = showClass;
    
    if (random_num === 1 || random_num === 6) numberPerTurn++;

    if (numberPerTurn === 3 && level !== 'easy'){
      if (level === 'medium') turn = mediumLevel(color);
      else if (level === 'hard') turn = hardLevel(color);
    }
    else{
     for (let i=0; i<4; i++) getMove(color, i);
    }

  }
  else{
    isPlayed.style.display = "block";
  }
}


// =========================================
// Implementing AI (roll dice automatically)
// =========================================
if (opponent === 'computer') timeInterval = 2000;
else timeInterval = 1;
setInterval(() => {
  if (turn !== user && opponent === 'computer' && response === 1){
    cube.click();
    cube.addEventListener("click", rollDice, {once:true});
  }
  else{
    cube.addEventListener("click", rollDice, {once:true});
  }
}, timeInterval);




// =========================================
// Implementing AI (move token automatically)
// =========================================

let j;

function callAI(color, index){

  let isMoved = 1;
  let nowMoved = 1;


  let other_color = PlayerId.filter(function(value){ 
    return value != color;
  });
  
  for (let i=0; i<other_color.length; i++){
    for (j=0; j<4; j++){
      if (isOutside[color + index] === 1 && Cell[color + 'Cell' + index] + random_num === Cell[other_color[i] + 'Cell' + j]){
        eval(color + 'Token')[index].click();
        return (color, index);
      }
    }
    if (i === 2) isMoved = 0;
  }
  
  if (!isMoved){
    for (j=0; j<4; j++){
      if (isOutside[color + j] === 0 && (random_num === 1 || random_num === 6)){
        eval(color + 'Token')[j].click();
        return (color, j);
      }
      if (j === 3) nowMoved = 0;
    }
  }

  if (!nowMoved) {
    for (j=0; j<4; j++){
      if (isOutside[color + j] === 1){
        eval(color + 'Token')[j].click();
        return (color, j);
      }
    }  
  }
}




//=========================================================================
// This is the main function that encounter where to move and by how much
//=========================================================================

function getMove(color, index){

  // move the token based on the random number of dice rolled
  if ((random_num === 1 || random_num === 6) && eval(color + 'Outside') === 0){ 
    if (eval(color + 'Toggle')){
      color, index = moveAtOnce(color, index);
      toggle = 0;
      response = 1;
      firstTurn++;
      eval(color + "Toggle = " + 0);
    }
  }

  else if (random_num === 1 || random_num === 6){ 
    if (turn !== user && opponent === 'computer') {
      color, index = callAI(color, index);
      call_16(color, index);
    } 
    else {
      eval(color + 'Token')[index].addEventListener("click", function(){
        call_16(color, index);
      }, {once:true}); 
    }       
  }
  else if (eval(color + 'Outside') === 1){
    if (eval(color + 'Toggle')){
      if (isOutside[color+index] === 1){
        color, index = moveStepByStep(color, index);
        toggle = 0;
        eval(color + "Toggle = " + 0);

        color, index = checkCollision(color, index);
      }
    }
  }
  else if (eval(color + "Outside") >= 2){
    if (turn !== user && opponent === 'computer') {
      color, index = callAI(color, index);
      call_2345(color, index);
    } 
    else {
      eval(color + 'Token')[index].addEventListener("click", function(){
        call_2345(color, index);
      }, {once:true}); 
    }
  }
  else if (eval(color + 'Toggle')) changeTheTurn(color);
}



function changeTheTurn(color){
  next += 1;
  if (next > total_player-1) {
    next = 0;
  }
  eval(color+'_sub_region').style.background = "ivory";
  turn = PlayerId[next];
  eval(turn+'_sub_region').style.background = "#556B2F";
  toggle = 0;
  eval(color + "Toggle = " + 0);

  numberPerTurn = 0;
  firstTurn = 0;
  response = 1;
}


function call_16(color, index){
  if (eval(color + 'Toggle')){  
    if ((random_num === 1 || random_num === 6) && isOutside[color+index] === 0){
      color, index = moveAtOnce(color, index);  
      toggle = 0;
      firstTurn++;
      response = 1;
      eval(color + "Toggle = " + 0);
    }
    else if (random_num === 1 || random_num === 6 ){
      color, index = moveStepByStep(color, index);
      toggle = 0;
      eval(color + "Toggle = " + 0);
      firstTurn++;
      response = 1;
      color, index = checkCollision(color, index);
    }
  }
}

function call_2345(color, index){
  if (eval(color + 'Toggle')){
    if (isOutside[color+index] === 1 && ((total_cell - position[color + index]) >= random_num)){
      color, index = moveStepByStep(color, index);
      toggle = 0;
      eval(color + "Toggle = " + 0);

      color, index = checkCollision(color, index);
    }
  }
}


/**
 * Move token step by step (not at once)
 *
 * @param {color} - can be red, green, blue, yellow
 * @param {index} - can be 0, 1, 2 and 3
 */
function moveStepByStep(color, index){
  interval = setInterval(() => {
    step_sound.play();
    dx ++;
    position[color+index] ++;

    if (position[color+index] >= TOTAL_COMMON_CELL - 1) Cell[color + 'Cell' + index] = -TOTAL_COMMON_CELL;

    path = position[color+index];

    eval(color + 'Score +=' + 1);
    eval(color + "_score").innerHTML = eval(color + 'Score');

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

      if (eval(color + 'Score')>highScore) {
        highScore = eval(color + 'Score');
        localStorage.setItem("highScore", highScore);
        high_score_value.innerHTML = highScore; 

        highScore_player = eval(color + 'PlayerName');
        localStorage.setItem("player-name", highScore_player);
        high_score_name.innerHTML = highScore_player;
      }
    }
  
    if (isIntervalCleared){
      trigger = 1;

      if (!(random_num === 1 || random_num === 6)){
        eval(color+'_sub_region').style.background = "ivory";
        next += 1;
        if (next > total_player-1) {
          next = 0;
        }
        turn = PlayerId[next];
        eval(turn+'_sub_region').style.background = "#556B2F";

        numberPerTurn = 0;
        firstTurn = 0;

        redPointPerTurn = [0,0,0,0];
        greenPointPerTurn = [0,0,0,0];
        bluePointPerTurn = [0,0,0,0];
        yellowPointPerTurn = [0,0,0,0];
      }
      else {
        turn = PlayerId[next];
        eval(color + 'PointPerTurn')[index] += random_num;
      }

      if (position[color + index] >= total_cell){
        winner_sound.play();
        winner_token[color]++;

        if (winner_token[color] === 4){
          winner_sound.play(); //play it again
          winner_color.innerHTML = color.charAt(0).toUpperCase() + color.slice(1) + ' Color Wins';
          container.style.opacity = "0.4";
          dice_container.style.visibility = "hidden";
          end_screen.style.display = "block";
        }
      }
    }
  }, 300);

  return (color, index);
}


/**
 * Move token at once (possibly when player gets 1 or 6)
 *
 * @param {color} - can be red, green, blue, yellow
 * @param {index} - can be 0, 1, 2 and 3
 */
function moveAtOnce(color, index){
  inout_sound.play();
  
  eval(color + 'Token')[index].style.bottom = eval(color + 'BottomPath')[0] + "px";
  eval(color + 'Token')[index].style.left = eval(color + 'LeftPath')[0] + "px";
  eval(color + 'Token')[index].style.transition = '0.5s';

  eval(color + 'Score +=' + 5);
  eval(color + "_score").innerHTML = eval(color + 'Score');

  if (eval(color + 'Score')>highScore) {
    highScore = eval(color + 'Score');
    localStorage.setItem("highScore", highScore);
    high_score_value.innerHTML = highScore; 

    highScore_player = eval(color + 'PlayerName');
    localStorage.setItem("player-name", highScore_player);
    high_score_name.innerHTML = highScore_player;
  }

  eval(color + "Outside += " + 1);
  isOutside[color+index] = 1;
  
  turn = PlayerId[next];

  return (color, index);
}


/**
 * Check for coin, tokens, ladder and snake while moving
 *
 * @param {color} - can be red, green, blue, yellow
 * @param {index} - can be 0, 1, 2 and 3
 */
function checkCollision(color, index){
  createInterval = setInterval(() => {
    if (trigger === 1){
      color, index = withCoin(color, index);
      color, index = withLadder(color, index);
      color, index = withSnake(color, index);
      color, index = resetToken(color, index);
      clearInterval(createInterval);
    } 
  });

  return (color, index);
}