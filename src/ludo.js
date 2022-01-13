//Let's initialize and declare some variables

let isRolled;
let turn;

let ai_msg_interval;
let timeInterval;
let interval_for_msg;

//put all the token in their respective color
let redToken = [];
let greenToken = [];
let blueToken = [];
let yellowToken = [];

//To get coin, ladder and snake in random position
let random_location1 = [];
let random_location2 = [];
let random_location3 = [];

let dy;
let TOTAL_COMMON_CELL = 52;

//checking the point obtained per turn. 
//Use in medium level to reset the token if he/she gets 1 or 6 continuously for three times
let redPointPerTurn = [0, 0, 0, 0];
let greenPointPerTurn = [0, 0, 0, 0];
let bluePointPerTurn = [0, 0, 0, 0];
let yellowPointPerTurn = [0, 0, 0, 0];

let numberPerTurn = 0;
let firstTurn = 0;

// Get level, opponent and user from the initial form
let level = '';
let opponent = '';
let user = '';

let isAgain;
let index2;

// check for the response obtained after reseting the token and after coin moves completed
let response1 = 1;
let response2 = 1;

let intervalOver;
let intervalCleared;

// Get the player name
let redPlayerName;
let greenPlayerName;
let yellowPlayerName;
let bluePlayerName;

// Get the boolean value to check if the radio button has been checked or not
let radioBtnChecked;
let radioBtn2Checked;
let radioBtn3Checked;

let start = 0;

let snakeInSafeCell = 0;

//Add background music while filling form
document.body.addEventListener("click", function () {
  background_sound.play();
  background_sound.volume = 0.3;
  background_sound.loop = true;
}, {once:true});


/**
 * Create our main function to create tokens
 *
 * @param {background} - can be red, green, yellow and blue
 * @param {bottomPos} - bottom position for each token
 * @param {leftPos} - left position for each token
 * @param {id} - id's for each token 
 */
function playGame(background, bottomPos, leftPos, id){

  this.background = background;
  this.bottomPos = bottomPos;
  this.leftPos = leftPos;
  this.id = id;
  
  // create each token
  this.createToken = function(){
    this.token = document.createElement('div');
    this.token.style.width = "40px";
    this.token.style.height = "40px";
    this.token.style.borderRadius = "50%";
    this.token.style.background = this.background;
    this.token.style.position = "absolute";
    this.token.style.bottom = this.bottomPos+"px";
    this.token.style.left = this.leftPos+"px";
    this.token.style.cursor = "pointer";
    this.token.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
    this.token.style.zIndex = "2";

    this.token.onmouseover = () => {
      this.token.style.opacity = "90%";
      this.token.style.width = "42px";
      this.token.style.height = "42px";
    };

    this.token.onmouseout = () => {
      this.token.style.opacity = "100%";
      this.token.style.width = "40px";
      this.token.style.height = "40px";
    };
    
    if (this.id === 'red') redToken.push(this.token);
    else if (this.id === 'green') greenToken.push(this.token);
    else if (this.id === 'yellow') yellowToken.push(this.token);
    else if (this.id === 'blue') blueToken.push(this.token);
   
    container.appendChild(this.token);
  };

}

// Create game based on the user input on the start page
function createGame(){
  for (let i=0; i<Red_bottomPos.length; i++){
    if (PlayerId.includes("red")){
      const obj1 = new playGame('#800000', Red_bottomPos[i], Red_leftPos[i], "red");
      obj1.createToken();
    }
  
    if (PlayerId.includes("green")){
      const obj2 = new playGame('#006400', Green_bottomPos[i], Green_leftPos[i], "green");
      obj2.createToken();
    }
    
    if (PlayerId.includes("yellow")){
      const obj3 = new playGame('#FF8C00', Yellow_bottomPos[i], Yellow_leftPos[i], "yellow");
      obj3.createToken();
    }
   
    if (PlayerId.includes("blue")){
      const obj4 = new playGame('#800080', Blue_bottomPos[i], Blue_leftPos[i], "blue");
      obj4.createToken();
    } 
  }  

  // Initial player's turn
  turn = PlayerId[index];
  
  total_player = PlayerId.length;

  if (!PlayerId.includes(user)) user = PlayerId[index];

  your_color.innerHTML = user.charAt(0).toUpperCase() + user.slice(1);;
  your_color.style.color = user;

  // Initial colored region (Active region)
  eval(turn+'_sub_region').style.background = "#556B2F";
  active_turn.innerHTML = turn.charAt(0).toUpperCase() + turn.slice(1);
  active_turn.style.color = turn;

  // create coin, ladder and snake based on level chosen (easy, medium and hard)
  createCoin(level);
  createLadder(level);
  createSnake(level);

  // Start the game after 3 second
  // mostly useful when we play with AI/computer
  let firstInterval = setInterval(() => {
    start = 1;
    clearInterval(firstInterval);
  }, 3000);

  invokeAI(); //Calling AI function if played with computer else it will invoke in normal mode
}



/**
 * When one token comes in the place of another color token, that token must return back to its initial position
 *
 * @param {color} - can be red, green, yellow and blue
 * @param {index} - can be 0, 1, 2 and 3 (as each player has 4 tokens)
 */
function resetToken(color, index){
  checkmate = 0;

  //check when the token is outside of safe region 
  if ((!(safeCell.includes(Cell[color + 'Cell' + index]))) && Cell[color + 'Cell' + index] >= 0){

    // get the other player
    let other_color = PlayerId.filter(function(value){ 
      return value != color;
    });

    // iterate on that player
    for (let i=0; i<other_color.length; i++){
      for (let j=0; j<total_token; j++){
        
        //check for their position and reset if the condition met
        if (Cell[color + 'Cell' + index] === Cell[other_color[i] + 'Cell' + j]){
          waitForReset = 1;
          let Interval1 = setInterval(() => {
            killed_sound.play();

            if (Cell[other_color[i] + 'Cell' + j] <= Cell_copy[other_color[i] + 'Cell' + j]){
              dy = TOTAL_COMMON_CELL + Cell[other_color[i] + 'Cell' + j];
            }
            else dy = Cell[other_color[i] + 'Cell' + j];

            //let's create interval for resetting token
            let interval1 = setInterval(() => {
              dy --;
              position[other_color[i]+j] --;
              path = position[other_color[i]+j];

              // update the score
              eval(color + 'Score +=' + 1);
              eval(color + "_score").innerHTML = eval(color + 'Score');

              eval(other_color[i] + 'Score -=' + 1);
              eval(other_color[i] + "_score").innerHTML = eval(other_color[i] + 'Score');

              // change its position in ludo container
              eval(other_color[i] + 'Token')[j].style.bottom = eval(other_color[i] + 'BottomPath')[path] + "px";
              eval(other_color[i] + 'Token')[j].style.left = eval(other_color[i] + 'LeftPath')[path] + "px";
              
              // if token comes to its original position, clear the interval
              if (dy <= Cell_copy[other_color[i] + 'Cell' + j]){
                clearInterval(interval1);
                checkmate = 1;
              }
            }, 100);
            clearInterval(Interval1);
          }, 300);

          let interval7 = setInterval(() => {
            if (checkmate){

              // the token should be in the place where it belongs to
              eval(other_color[i] + 'Token')[j].style.bottom = eval(other_color[i].charAt(0).toUpperCase() + other_color[i].slice(1) + '_bottomPos')[j] + 'px';
              eval(other_color[i] + 'Token')[j].style.left = eval(other_color[i].charAt(0).toUpperCase() + other_color[i].slice(1) + '_leftPos')[j] + 'px';

              // update its cell state
              Cell[other_color[i] + 'Cell' + j] = Cell_copy[other_color[i] + 'Cell' + j];

              // now, the token is not outside
              isOutside[other_color[i]+j] = 0;
              eval(other_color[i] + "Outside -= " + 1);

              // update the score
              eval(other_color[i] + 'Score -=' + 5);
              eval(other_color[i] + "_score").innerHTML = eval(other_color[i] + 'Score');

              // check if current score beat highscore
              if (eval(color + 'Score')>highScore) {
                highScore = eval(color + 'Score');
                localStorage.setItem("highScore", highScore);
                high_score_value.innerHTML = highScore;

                // also, display player name
                highScore_player = eval(color + 'PlayerName');
                localStorage.setItem("player-name", highScore_player);
                high_score_name.innerHTML = highScore_player;
              }

              // update the point per turn on getting 1 or 6
              if (random_num === 1 || random_num === 6){
                eval(other_color[i] + 'PointPerTurn')[j] = 0;
              }

              // delay by 2 sec. Esp. use when play with AI
              let delayInterval = setInterval(() => {
                response2 = 1;
                clearInterval(delayInterval);
              }, 2000);

              clearInterval(interval7);
            } 
          });
          return (color, index);
        }
      }
      // turn on the response to indicate that the reset has been completed and now AI can move its turn
      if ( i === other_color.length - 1 && waitForReset === 0) response2 = 1;
    }
  }
  else response2 = 1;

  return (color, index);
}




//===============================================
// Let's add coin in the game and implement it
//================================================

// This is the cell where coin can be placed
let coinPlace = [4, 12, 17, 25, 28, 38, 41];


/**
 * Add coins in the container
 *
 * @param {mode} - can be easy, medium and hard
 */
function createCoin(mode){
 
  //create 5 coins when the game mode is easy
  if (mode === 'easy'){
    random_location1 = getRandomFromArray(5, coinPlace, coinPlace.length);
  }

  // create 3 coins when the game mode is medium
  else if(mode === 'medium'){
    random_location1 = getRandomFromArray(3, coinPlace, coinPlace.length);
  }

  // create only 1 coin when the game mode is hard
  else if(mode === 'hard'){
    random_location1 = getRandomFromArray(1, coinPlace, coinPlace.length);
  }

  // create coin based on chosen game mode
  for (let i=0; i<random_location1.length; i++){
    let coin = document.createElement('div');
    coin.style.background = `url('./images/coin.png')`;
    coin.style.bottom = redBottomPath[random_location1[i]] + 'px';
    coin.style.left = redLeftPath[random_location1[i]] + 'px';
    coin.style.width = "40px";
    coin.style.height = "40px";
    coin.style.position = "absolute";

    container.appendChild(coin);
  } 
}

/**
 * Increase token by 12 cell/point if it is in the coin
 *
 * @param {color} - can be red, green, blue, yellow
 * @param {index} - can be 0, 1, 2 and 3
 */
function withCoin(color, index){

  // randomlocation1 includes the position where coin has been placed
  if (random_location1.includes(Cell[color + 'Cell' + index])){

    // make AI wait
    response2 = 0;

    // display message - what happens with coin
    instant_msg[0].style.display = "block";

    interval_for_msg = setInterval(() => {
      instant_msg[0].style.display = "none";
      clearInterval(interval_for_msg);
    }, 5000);
    
    // increase 12 points step by step
    let Interval2 = setInterval(() => {
      let dz = 0;
      let interval2 = setInterval(() => {
        step_sound.play();
        dz ++;
        position[color+index] ++;

        // update the cell state if the token is near to its winner region.
        // I am just giving negative value to cell state so that it will not interfare other 
        if (position[color+index] > TOTAL_COMMON_CELL - 1) Cell[color + 'Cell' + index] = -TOTAL_COMMON_CELL;
        path = position[color+index];

        // update the score
        eval(color + 'Score +=' + 2);
        eval(color + "_score").innerHTML = eval(color + 'Score');

        // update the cell state
        Cell[color + 'Cell' + index]++;
        if (color !== 'red'){
          if (Cell[color + 'Cell' + index] >= TOTAL_COMMON_CELL) Cell[color+ 'Cell' + index] = 0;
        }

        // make it moves
        eval(color + 'Token')[index].style.bottom = eval(color + 'BottomPath')[path] + "px";
        eval(color + 'Token')[index].style.left = eval(color + 'LeftPath')[path] + "px";
        
        // stop when it moves by 12 cell
        if (dz >= 12){
          triggerInterval = 1;
          clearInterval(interval2);

          // check if score beat high score
          if (eval(color + 'Score') > highScore) {
            highScore = eval(color + 'Score');
            localStorage.setItem("highScore", highScore);
            high_score_value.innerHTML = highScore;

            highScore_player = eval(color + 'PlayerName');
            localStorage.setItem("player-name", highScore_player);
            high_score_name.innerHTML = highScore_player;
          }
        }

        // do some stuff when completing above step
        if (triggerInterval) {
          response2 = 0;
          response1 = 1;

          // again check if it requires to reset other token or not
          color, index = resetToken(color, index);

          if (random_num === 1 || random_num === 6){
            eval(color + 'PointPerTurn')[index] += 12;
          }
        }
      }, 300);
      clearInterval(Interval2);
    }, 300);
  }
  else response1 = 1;

  return (color, index);
}



//====================================
// Let's add ladder in the container
//====================================
let ladderBottomPos = [338, 330, 148, 112];
let ladderLeftPos = [120, 300, 282, 135];
let ladderRotate = [5, -50, 8, -62];
let ladderHeight = [200, 160, 115, 140];

let ladderStartPos = [15, 27, 42, 2];
let ladderEndPos = [22, 32, 46, 6];

// This is the place where ladder can be placed (this is just index of above array)
let ladderPlace = [0, 1, 2, 3];


/**
 * Add ladders in the container
 *
 * @param {mode} - can be easy, medium and hard
 */
function createLadder(mode){

  // create 3 ladders in easy mode
  if (mode === 'easy'){
    random_location2 = getRandomFromArray(3, ladderPlace, ladderPlace.length);
  }

  // create 2 ladders in medium mode
  else if(mode === 'medium'){
    random_location2 = getRandomFromArray(2, ladderPlace, ladderPlace.length);
  }

  // create only 1 ladder in hard mode
  else if(mode === 'hard'){
    random_location2 = getRandomFromArray(1, ladderPlace, ladderPlace.length);
  }

  // create lader based on chosen game mode
  for (let i=0; i< random_location2.length; i++){
    let ladder = document.createElement('div');
    ladder.style.background = `url('./images/ladder.png')`;
    ladder.style.bottom = ladderBottomPos[random_location2[i]] + 'px';
    ladder.style.left = ladderLeftPos[random_location2[i]] + 'px';
    ladder.style.width = "150px";
    ladder.style.height = ladderHeight[random_location2[i]] + 'px';
    ladder.style.position = "absolute";
    ladder.style.transform = "rotate("+ ladderRotate[random_location2[i]] + "deg)";

    container.appendChild(ladder);
  } 
}


/**
 * Increase token position with ladder
 *
 * @param {color} - can be red, green, blue, yellow
 * @param {index} - can be 0, 1, 2 and 3
 */
function withLadder(color, index){

  // randomlocation2 includes where the ladder has been placed
  for (let i=0; i<random_location2.length; i++){

    // if there is ladder in the cell where token is, just use that ladder
    if (Cell[color + 'Cell' + index] === ladderStartPos[random_location2[i]]){
      
      // make AI wait for this execution
      response2 = 0;

      let Interval3 = setInterval(() => {
        // play the sound
        inout_sound.play();

        // redirect token to required position
        eval(color + 'Token')[index].style.bottom = redBottomPath[ladderEndPos[random_location2[i]]] + 'px';
        eval(color + 'Token')[index].style.left = redLeftPath[ladderEndPos[random_location2[i]]] + 'px';
        eval(color + 'Token')[index].style.transition = "1s";

        Cell[color + 'Cell' + index] = ladderEndPos[random_location2[i]];
        position[color + index] += (ladderEndPos[random_location2[i]] - ladderStartPos[random_location2[i]]);

        // update the score
        eval(color + 'Score +=' + (ladderEndPos[random_location2[i]] - ladderStartPos[random_location2[i]]) * 2);
        eval(color + "_score").innerHTML = eval(color + 'Score');

        // check if score beat high score
        if (eval(color + 'Score') > highScore) {
          highScore = eval(color + 'Score');
          localStorage.setItem("highScore", highScore);
          high_score_value.innerHTML = highScore;

          highScore_player = eval(color + 'PlayerName');
          localStorage.setItem("player-name", highScore_player);
          high_score_name.innerHTML = highScore_player;
        }

        clearInterval(Interval3);
        intervalOver = 1;
      }, 300);

      let interval4 = setInterval(() => {
        if (intervalOver){

          // again check, if it requires to reset other token
          color, index = resetToken(color, index);
        
          // reset the transition effect
          eval(color + 'Token')[index].style.transition = "0.5s";
      
          if (random_num === 1 || random_num === 6){
            eval(color + 'PointPerTurn')[index] += (ladderEndPos[random_location2[i]] - ladderStartPos[random_location2[i]]);
          }

          clearInterval(interval4);
        }
      });
    } 
  }
  return (color, index);
}


//==================================
// Let's add snake in the container
//==================================
let snakeBottomPos = [335, 390, 120, 85, 315];
let snakeLeftPos = [50, 290, 0, 225, 500];
let snakeRotate = [0, 65, -120, 110, 10];
let snakeWidth = [240, 250, 290, 290, 100];


let snakeMouthPos = [18, 33, 8, 49, 36];
let snakeTailPos = [13, 26, 0, 43, 34];

// This is the place where snake can be placed (this is just index of above array)
let snakePlace = [0, 1, 2, 3, 4];


/**
 * Add snakes in the container
 *
 * @param {mode} - can be easy, medium and hard
 */
function createSnake(mode){

  // create only 1 snake if the game mode is easy
  if (mode === 'easy'){
    random_location3 = getRandomFromArray(1, snakePlace, snakePlace.length);
  }

  // create 2 snakes if the game mode is medium
  else if(mode === 'medium'){
    random_location3 = getRandomFromArray(2, snakePlace, snakePlace.length);
  }

  // create 4 snakes if the game mode is hard
  else if(mode === 'hard'){
    random_location3 = getRandomFromArray(4, snakePlace, snakePlace.length);
  }

  // create snake based on game mode chosen
  for (let i=0; i<random_location3.length; i++){
    const snake = document.createElement('div');
    snake.style.background = `url('./images/snake.png')`;
    snake.style.bottom = snakeBottomPos[random_location3[i]] + 'px';
    snake.style.left = snakeLeftPos[random_location3[i]] + 'px';
    snake.style.width = snakeWidth[random_location3[i]] + 'px';
    snake.style.height = "80px";
    snake.style.backgroundSize = "90% 90%";
    snake.style.backgroundRepeat = "no-repeat";
    snake.style.position = "absolute";
    snake.style.transform = "rotate(" + snakeRotate[random_location3[i]] + "deg)";

    container.appendChild(snake);
  }
}



/**
 * Decrease token position with snake
 *
 * @param {color} - can be red, green, blue, yellow
 * @param {index} - can be 0, 1, 2 and 3
 */
function withSnake(color, index){

  // randomlocation3 indicates where the snake has been placed
  for (let i=0; i<random_location3.length; i++){

    // if the token reach to the snake mouth position, the cell state of that token get reduced
    if (Cell[color + 'Cell' + index] === snakeMouthPos[random_location3[i]]){

      // make AI wait
      response2 = 0;

      let Interval4 = setInterval(() => {

        // play the sound
        inout_sound.play();

        // redirect token to required position
        eval(color + 'Token')[index].style.bottom = redBottomPath[snakeTailPos[random_location3[i]]] + 'px';
        eval(color + 'Token')[index].style.left = redLeftPath[snakeTailPos[random_location3[i]]] + 'px';
        eval(color + 'Token')[index].style.transition = "1s";

        // update the cell state
        Cell[color + 'Cell' + index] = snakeTailPos[random_location3[i]];
        
        // update its position
        position[color + index] -= (snakeMouthPos[random_location3[i]] - snakeTailPos[random_location3[i]]);

        // update the score
        eval(color + 'Score -=' + (snakeMouthPos[random_location3[i]] - snakeTailPos[random_location3[i]])*2);
        eval(color + "_score").innerHTML = eval(color + 'Score');

        clearInterval(Interval4);

        intervalOver = 1;
      }, 300);

      let interval5 = setInterval(() => {
        if (intervalOver){

          // again check, if it requires to reset other token
          color, index = resetToken(color, index);
        
          // reset the transition effect
          eval(color + 'Token')[index].style.transition = "0.5s";
          clearInterval(interval5);

          if (random_num === 1 || random_num === 6){
            eval(color + 'PointPerTurn')[index] -= (snakeMouthPos[random_location3[i]] - snakeTailPos[random_location3[i]]);
          }
        }
      });
    } 
  }

  return (color, index);
}



/**
 * The changes/position of token for that turn get reset if he/she get 1 or 6 continuously for 3 times
 *
 * @param {color} - can be red, green, yellow and blue
 */
function mediumLevel(color){

  // display message when player gets 1 or 6 continuously for 3 times
  instant_msg[1].style.display = "block";

  interval_for_msg = setInterval(() => {
    instant_msg[1].style.display = "none";
    clearInterval(interval_for_msg);
  }, 9000);

  for (let i=0; i < total_token; i++){
  
    // if player gets 1 or 6 continuously for 3 times, the current moves for that turn has to be reset
    if (eval(color + 'PointPerTurn')[i] > 0 && position[color+i] < total_cell){

      let interval6 = setInterval(() => {
      
        eval(color + 'PointPerTurn')[i]--;

        // play the sound
        step_sound.play();

        // reduce its position
        position[color+i] --;

        // reduce its cell state
        Cell[color + 'Cell' + i]--;

        if (Cell[color + 'Cell' + i] < 0){
          Cell[color + 'Cell' + i] = TOTAL_COMMON_CELL - 1;
        }

        path = position[color+i];
    
        eval(color + 'Token')[i].style.bottom = eval(color + 'BottomPath')[path] + "px";
        eval(color + 'Token')[i].style.left = eval(color + 'LeftPath')[path] + "px";
    
        eval(color + 'Score -=' + 1);
        eval(color + "_score").innerHTML = eval(color + 'Score');
    
        if (eval(color + 'PointPerTurn')[i] <= 0){
          clearInterval(interval6);

          if (i === 3) intervalCleared = 1;
        }
      }, 300);
    }
    else if(i === 3) intervalCleared = 1;  
  }

  let interval8 = setInterval(() => {
    if (intervalCleared){
      index2 = 0;

      // make AI ready for the next moves
      response1 = 1;
      response2 = 1;

      // check if any token has been came outside in this turn
      // if yes, reset it
      for (let j=0; j<firstTurn; j++){
        isAgain = 1;

        do{
          if (position[color+index2] === 0 && isOutside[color+index2]  === 1){
            inout_sound.play();
            eval(color + 'Token')[index2].style.bottom = eval(color.charAt(0).toUpperCase() + color.slice(1) + '_bottomPos')[index2] + 'px';
            eval(color + 'Token')[index2].style.left = eval(color.charAt(0).toUpperCase() + color.slice(1) + '_leftPos')[index2] + 'px';
            isAgain = 0;

            Cell[color + 'Cell' + index2] = Cell_copy[color + 'Cell' + index2];
            isOutside[color+index2] = 0;
            eval(color + "Outside -= " + 1);

            eval(color + 'Score -=' + 5);
            eval(color + "_score").innerHTML = eval(color + 'Score');
          }

          index2++;
          if (index2 >= total_token) break;
        }while(isAgain);
        clearInterval(interval8);
      }
      firstTurn = 0;
    }
  });

  // change the turn
  next += 1;
  if (next > total_player-1) {
    next = 0;
  }
  eval(color+'_sub_region').style.background = "ivory";
  turn = PlayerId[next];

  // update about whose turn
  active_turn.innerHTML = turn.charAt(0).toUpperCase() + turn.slice(1);
  active_turn.style.color = turn;

  eval(turn+'_sub_region').style.background = "#556B2F";
  toggle = 0;
  eval(color + "Toggle = " + 0);

  numberPerTurn = 0;

  return turn;
}


/**
 * All tokens that have not reached their home come back to initial position if he/she get 1 or 6 continuously for 3 times
 *
 * @param {color} - can be red, green, yellow and blue
 */
function hardLevel(color){

  // display the message if player gets 1 or 6 continuously for three times
  instant_msg[2].style.display = "block";

  interval_for_msg = setInterval(() => {
    instant_msg[2].style.display = "none";
    clearInterval(interval_for_msg);
  }, 10000);

  for (let i=0; i<total_token; i++){

    // if token has not reached its home, reset that token to initial position
    if (position[color + i] < total_cell){

      // play the sound
      inout_sound.play();

      eval(color + 'Token')[i].style.bottom = eval(color.charAt(0).toUpperCase() + color.slice(1) + '_bottomPos')[i] + 'px';
      eval(color + 'Token')[i].style.left = eval(color.charAt(0).toUpperCase() + color.slice(1) + '_leftPos')[i] + 'px';

      // change all the required stats
      position[color + i] = 0;
      Cell[color + 'Cell' + i] = Cell_copy[color + 'Cell' + i];
      isOutside[color + i] = 0;

    }
  }
  eval(color + "Outside = " + 0);

  eval(color + 'Score =' + 0); //reset score to zero
  eval(color + "_score").innerHTML = eval(color + 'Score');

  // make AI ready for the next moves
  response1 = 1;
  response2 = 1;

  // change the turn
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

  return turn;
}



//=====================================================================
// validation of user input and the action after clicking play button
//=====================================================================
function onSubmit(){
  let playerCount = 0;

  // Get the player name
  redPlayerName = red_input.value;
  greenPlayerName = green_input.value;
  yellowPlayerName = yellow_input.value;
  bluePlayerName = blue_input.value;

  // check if the radio button has been checked or not
  radioBtnChecked = (Array.from(radioBtn)).some(option => option.checked);
  radioBtn2Checked = (Array.from(radioBtn2)).some(option => option.checked);
  radioBtn3Checked = (Array.from(radioBtn3)).some(option => option.checked);

  if (radioBtnChecked) {
    opponent = document.querySelector('input[name="play_with"]:checked').value;
  }
  if (radioBtn2Checked) {
    user = document.querySelector('input[name="choose-color"]:checked').value;
  }
  if (radioBtn3Checked) {
    level = document.querySelector('input[name="game-mode"]:checked').value;
  }

  if (redPlayerName !== '') playerCount++;
  if (greenPlayerName !== '') playerCount++;
  if (yellowPlayerName !== '') playerCount++;
  if (bluePlayerName !== '') playerCount++;
   

  if (playerCount<2){
    message.innerHTML = "Minimum two players required";
    setTimeout(() => {
      message.innerHTML = '';
    }, 3000);
  }
  else if (!radioBtnChecked){
    message.innerHTML = "Please select either human or computer";
    radio_section.style.boxShadow = '0px 0px 0px 4px #4f93df';
    setTimeout(() => {
      message.innerHTML = '';
      radio_section.style.boxShadow = "none";
    }, 3000);
  }
  else if (!radioBtn2Checked){
    message.innerHTML = "Please choose your color...";
    radio_section2.style.boxShadow = '0px 0px 0px 4px #4f93df';
    setTimeout(() => {
      message.innerHTML = '';
      radio_section2.style.boxShadow = "none";
    }, 3000);
  }
  else if (!radioBtn3Checked){
    message.innerHTML = "Please choose game mode...";
    radio_section3.style.boxShadow = '0px 0px 0px 4px #4f93df';
    setTimeout(() => {
      message.innerHTML = '';
      radio_section3.style.boxShadow = "none";
    }, 3000);
  }
  else{
    if (redPlayerName !== '') {
      player1.innerHTML = redPlayerName;
      PlayerName.push(redPlayerName);
      PlayerId.push("red");
    }
    if (greenPlayerName !== '') {
      player2.innerHTML = greenPlayerName;
      PlayerName.push(greenPlayerName);
      PlayerId.push("green");
    }
    if (yellowPlayerName !== '') {
      player3.innerHTML = yellowPlayerName;
      PlayerName.push(yellowPlayerName);
      PlayerId.push("yellow");
    }
    if (bluePlayerName !== '') {
      player4.innerHTML = bluePlayerName;
      PlayerName.push(bluePlayerName);
      PlayerId.push("blue");
    }

    // display loading gif if user click play button
    loading.style.display = "block";
    
    let initial_interval = setInterval(() => {

      // create the game
      createGame();

      // remove some unnecessary page and display main wrapper
      loading.style.display = "none";
      adding_img.style.display = "none";
      start_page.style.display = "none";
      main_wrapper.style.display = "block";

      // stop the music when play button is clicked
      background_sound.loop = false;
      background_sound.pause();
      background_sound.currentTime = 0;
  

      //Displaying message
      if (opponent === 'computer'){
        ai_msg.style.display = "block";

        ai_msg_interval = setInterval(() => {
          ai_msg.style.display = "none";

          clearInterval(ai_msg_interval);
        }, 5000);
      }
      

      clearInterval(initial_interval);
    }, 2000);
  }
}

