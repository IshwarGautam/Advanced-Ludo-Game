//Let's initialize and declare some variables
let isRolled;

let redToken = [];
let greenToken = [];
let blueToken = [];
let yellowToken = [];

let random_location1;
let random_location2;
let random_location3;


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
}

createGame();


/**
 * When two tokens are in the same cell, one token returns back to its initial position
 *
 * @param {color} - can be red, green, yellow and blue
 * @param {index} - can be 0, 1, 2 and 3 (as each player has 4 tokens)
 */
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
  return color, index;
}


//===============================================
// Let's add coin in the game and implement it
//================================================

// This is the cell where coin can be placed
let coinPlace = [4, 12, 17, 25, 30, 38, 41];


/**
 * Add coins in the container
 *
 * @param {mode} - can be easy, medium and hard
 */
function createCoin(mode){
 
  if (mode === 'easy'){
    random_location1 = getRandomFromArray(5, coinPlace, coinPlace.length);
  }
  else if(mode === 'medium'){
    random_location1 = getRandomFromArray(3, coinPlace, coinPlace.length);
  }
  else if(mode === 'hard'){
    random_location1 = getRandomFromArray(1, coinPlace, coinPlace.length);
  }

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
 * Increase token by 12 points if it is in the coin
 *
 * @param {color} - can be red, green, blue, yellow
 * @param {index} - can be 0, 1, 2 and 3
 */
function withCoin(color, index){
  if (random_location1.includes(Cell[color + 'Cell' + index])){
    let Interval = setInterval(() => {
      dx = 0;
      let interval = setInterval(() => {
        step_sound.play();
        dx ++;
        position[color+index] ++;
        path = position[color+index];
        
        eval(color + 'Token')[index].style.bottom = eval(color + 'BottomPath')[path] + "px";
        eval(color + 'Token')[index].style.left = eval(color + 'LeftPath')[path] + "px";
        if (dx >= 12){
          clearInterval(interval);
          dx = 0;
        }
      }, 300);
      clearInterval(Interval);
    }, 500);
  }

  return color, index;
}



//====================================
// Let's add ladder in the container
//====================================
let ladderBottomPos = [338, 325, 148, 88];
let ladderLeftPos = [120, 300, 282, 132];
let ladderRotate = [5, -50, 8, -52];
let ladderHeight = [200, 160, 115, 165];

let ladderStartPos = [15, 27, 42, 1];
let ladderEndPos = [22, 32, 46, 6];

// This is the place where ladder can be placed (this is just index of above array)
let ladderPlace = [0, 1, 2, 3];


/**
 * Add ladders in the container
 *
 * @param {mode} - can be easy, medium and hard
 */
function createLadder(mode){
  if (mode === 'easy'){
    random_location2 = getRandomFromArray(3, ladderPlace, ladderPlace.length);
  }
  else if(mode === 'medium'){
    random_location2 = getRandomFromArray(2, ladderPlace, ladderPlace.length);
  }
  else if(mode === 'hard'){
    random_location2 = getRandomFromArray(1, ladderPlace, ladderPlace.length);
  }

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
  for (let i=0; i<random_location2.length; i++){
    if (Cell[color + 'Cell' + index] === ladderStartPos[random_location2[i]]){
      inout_sound.play();
      eval(color + 'Token')[index].style.bottom = redBottomPath[ladderEndPos[random_location2[i]]] + 'px';
      eval(color + 'Token')[index].style.left = redLeftPath[ladderEndPos[random_location2[i]]] + 'px';
      eval(color + 'Token')[index].style.transition = "0.8s";

      Cell[color + 'Cell' + index] = ladderEndPos[random_location2[i]];
      position[color + index] += ladderEndPos[random_location2[i]] - ladderStartPos[random_location2[i]];
    } 
  }
  return color, index;
}


//==================================
// Let's add snake in the container
//==================================
let snakeBottomPos = [335, 390, 120, 85, 315];
let snakeLeftPos = [50, 290, 0, 200, 470];
let snakeRotate = [0, 65, -120, 120, 10];
let snakeWidth = [240, 250, 290, 290, 120];


let snakeMouthPos = [18, 33, 8, 50, 36];
let snakeTailPos = [13, 26, 0, 43, 33];

// This is the place where snake can be placed (this is just index of above array)
let snakePlace = [0, 1, 2, 3, 4];


/**
 * Add snakes in the container
 *
 * @param {mode} - can be easy, medium and hard
 */
function createSnake(mode){

  if (mode === 'easy'){
    random_location3 = getRandomFromArray(1, snakePlace, snakePlace.length);
  }
  else if(mode === 'medium'){
    random_location3 = getRandomFromArray(2, snakePlace, snakePlace.length);
  }
  else if(mode === 'hard'){
    random_location3 = getRandomFromArray(4, snakePlace, snakePlace.length);
  }

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
  for (let i=0; i<random_location3.length; i++){
    if (Cell[color + 'Cell' + index] === snakeMouthPos[random_location3[i]]){
      inout_sound.play();
      eval(color + 'Token')[index].style.bottom = redBottomPath[snakeTailPos[random_location3[i]]] + 'px';
      eval(color + 'Token')[index].style.left = redLeftPath[snakeTailPos[random_location3[i]]] + 'px';
      eval(color + 'Token')[index].style.transition = "0.8s";

      Cell[color + 'Cell' + index] = snakeTailPos[random_location2[i]];
      position[color + index] -= snakeMouthPos[random_location2[i]] - snakeTailPos[random_location2[i]];
    } 
  }

  return color, index;
}


// Calling above function to create coin, ladder and snake
createCoin("easy");
createLadder("easy");
createSnake("easy");






//=====================================================================
// validation of user input and the action after clicking play button
//=====================================================================
function onSubmit(){
  const redPlayerName = red_input.value;
  const greenPlayerName = green_input.value;
  const yellowPlayerName = yellow_input.value;
  const bluePlayerName = blue_input.value;
  const radioBtnChecked = (Array.from(radioBtn)).some(option => option.checked);
  const radioBtn2Checked = (Array.from(radioBtn2)).some(option => option.checked);
  const radioBtn3Checked = (Array.from(radioBtn3)).some(option => option.checked);

  let gameMode = document.querySelector('input[name="game-mode"]:checked').value;

  if (redPlayerName != '') {
    player1.innerHTML = redPlayerName;
    PlayerName.push(redPlayerName);
    PlayerId.push("red");
  }
  if (greenPlayerName != '') {
    player2.innerHTML = greenPlayerName;
    PlayerName.push(greenPlayerName);
    PlayerId.push("green");
  }
  if (yellowPlayerName != '') {
    player3.innerHTML = yellowPlayerName; 
    PlayerName.push(yellowPlayerName);
    PlayerId.push("yellow");
  }
  if (bluePlayerName != '') {
    player4.innerHTML = bluePlayerName;
    PlayerName.push(bluePlayerName);
    PlayerId.push("blue");
  }

  if (PlayerName.length<2){
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
    createGame();
    loading.style.display = "block";
    setTimeout(() => {
      loading.style.display = "none";
      start_page.style.display = "none";
      main_wrapper.style.display = "block";
    }, 2000);
  }
}

