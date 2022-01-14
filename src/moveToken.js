// Initialize required variable
let path = 0;
let dx = 0;
let next = 0;

// to check if the particular token is outside or not
let redOutside = 0;
let greenOutside = 0;
let yellowOutside = 0;
let blueOutside = 0;

// increase the z-index per each turn
let z_index = 0;

let color;

// use to activate each player
let toggle = 0;
let redToggle = 0;
let greenToggle = 0;
let yellowToggle = 0;
let blueToggle = 0;

// use to set and check for the interval
let interval;
let isIntervalCleared;
let trigger;
let createInterval;
let triggerInterval;

// use to store each player score
let redScore = 0;
let greenScore = 0;
let blueScore = 0;
let yellowScore = 0;

// token get pushed after they reached their home
let red_winner_token = [];
let blue_winner_token = [];
let yellow_winner_token = [];
let green_winner_token = [];

let forTheFirstTime = 1;
let goToTheFunc = 0;

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


// get highscore and player name from our local storage
let highScore = localStorage.getItem("highScore") || 0;
high_score_value.innerHTML = highScore; 

let highScore_player = localStorage.getItem("player-name");
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

    // initialize some required variables
    // this variables is just like switch (0/1)
    // so, it is placed inside this function
    trigger = 0;
    triggerInterval = 0;
    intervalOver = 0;
    goToTheFunc = 0;
    
    // make AI wait
    response1 = 0;
    response2 = 0;

    // change the color turn by turn
    color = turn;
    eval(color + "Toggle = " + 1);

    // increase the zIndex value per each turn
    z_index++;
    for (let i=0; i < total_token; i++) eval(color + 'Token')[i].style.zIndex = String(z_index);

    // check if the interval has been cleared or not
    isIntervalCleared = 0;
    intervalCleared = 0;

    waitForReset = 0;

    isPlayed.style.display = "none";

    // get random value from 1 to 6
    random_num = getRandomInt(1,7);
    
    // show random_num in dice
    showClass = 'show-' + random_num;

    // update current class
    if (currentClass) {
      cube.classList.remove(currentClass);
    }

    cube.classList.add(showClass);
    currentClass = showClass;
    
    // update the numberPerTurn if player gets 1 or 6
    // mostly use in medium and hard mode
    if (random_num === 1 || random_num === 6) numberPerTurn++;

    if (numberPerTurn === 3 && level !== 'easy'){
      if (level === 'medium') turn = mediumLevel(color);
      else if (level === 'hard') turn = hardLevel(color);
    }
    else if(!(random_num === 1 || random_num === 6)){
      for (let i=0; i < total_token; i++){
        
        // check the space
        // mostly useful when token in near to its home
        if (total_cell - position[color + i] >= random_num && isOutside[color + i] === 1) {
          getMove(color, i);
          goToTheFunc = 1;
        }
        if (i === total_token - 1 && !goToTheFunc) changeTheTurn(color);
      }     
    }
    else{
      for (let i=0; i < total_token; i++){
        
        // move the token if there is space/cell
        if (total_cell - position[color + i] >= random_num) {

          //calling the main function
          getMove(color, i);
          goToTheFunc = 1;
        }
        if (i === total_token - 1 && !goToTheFunc) changeTheTurn(color);
      }
    }

  }
  else{
    isPlayed.style.display = "block";
  }
}




//=========================================================================
// This is the main function that encounter where to move and by how much
//=========================================================================

function getMove(color, index){

  // move the token based on the random number of dice rolled
  if ((random_num === 1 || random_num === 6) && eval(color + 'Outside') === 0 && forTheFirstTime){ 
    if (eval(color + 'Toggle')){
      color, index = moveAtOnce(color, index);
      toggle = 0;
      response1 = 1;
      response2 = 1;
      firstTurn++;
      eval(color + "Toggle = " + 0);
    }
  }

  else if (random_num === 1 || random_num === 6){ 
    // Human vs AI
    if (turn !== user && opponent === 'computer') {
      color, index = callAI(color, index);
      call_16(color, index);
    } 

    // Human vs Human
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


/**
 * Change the turn if one player turns over
 *
 * @param {color} - can be red, green, yellow and blue
 */
function changeTheTurn(color){
  next += 1;
  if (next > total_player-1) {
    next = 0;
  }
  eval(color+'_sub_region').style.background = "ivory";
  turn = PlayerId[next];

  active_turn.innerHTML = turn.charAt(0).toUpperCase() + turn.slice(1);
  active_turn.style.color = turn;

  eval(turn+'_sub_region').style.background = "#556B2F";
  toggle = 0;
  eval(color + "Toggle = " + 0);

  numberPerTurn = 0;
  firstTurn = 0;
  response1 = 1;
  response2 = 1;
}


/**
 * when the random number (dice rolled) is 1 and 6
 *
 * @param {color} - can be red, green, yellow and blue
 * @param {index} - can be 0, 1, 2 and 3
 */
function call_16(color, index){
  if (eval(color + 'Toggle')){  
    if ((random_num === 1 || random_num === 6) && isOutside[color+index] === 0){
      color, index = moveAtOnce(color, index);  
      toggle = 0;
      firstTurn++;
      response1 = 1;
      response2 = 1;
      eval(color + "Toggle = " + 0);
    }
    else if (random_num === 1 || random_num === 6){
      color, index = moveStepByStep(color, index);
      toggle = 0;
      eval(color + "Toggle = " + 0);
      color, index = checkCollision(color, index);
    }
  }
}

/**
 * when the random number (dice rolled) is other than 1 and 6
 *
 * @param {color} - can be red, green, yellow and blue
 * @param {index} - can be 0, 1, 2 and 3
 */
function call_2345(color, index){
  if (eval(color + 'Toggle')){
    if (isOutside[color+index] === 1){
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

        active_turn.innerHTML = turn.charAt(0).toUpperCase() + turn.slice(1);
        active_turn.style.color = turn;

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
        eval(color + '_winner_token').push(color+index);

        forTheFirstTime = 0;

        eval(color + "Outside -= " + 1);
        isOutside[color+index] = 0;

        // Decrese the token opacity after reaching its home
        eval(color + 'Token')[index].style.opacity = "0.5";

        let removeToken = setInterval(() => {
          eval(color + 'Token')[index].style.display = "none";
          clearInterval(removeToken);
        }, 3000);

        if (eval(color + '_winner_token').length === 4){
          winner_sound.play(); //play it again
          winner_color.innerHTML = color.charAt(0).toUpperCase() + color.slice(1) + ' Color Wins';

          container.style.opacity = "0.4";
          dice_container.style.visibility = "hidden";
          end_screen.style.display = "block";

          response1 = 0;
          response2 = 0;
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