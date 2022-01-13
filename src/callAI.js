let aiTurn = 0;

// =========================================
// Implementing AI (roll dice automatically)
// =========================================

function invokeAI(){

  // setting time-interval for computer
  if (opponent === 'computer') timeInterval = 2500;
  else timeInterval = 1;

  setInterval(() => {
    if (turn !== user && opponent === 'computer' && response1 === 1 && response2 === 1 && start === 1){
      // block dice because its AI turn and human should not be able to roll the dice
      block_dice.style.display = "block";

      cube.click();
      cube.addEventListener("click", rollDice, {once:true});
    }
    else{
      // human turn... so they should be able to roll the dice this time
      block_dice.style.display = "none";

      cube.addEventListener("click", rollDice, {once:true});
    }
  }, timeInterval);
}




// =========================================
// Implementing AI (move token automatically)
// =========================================

/**
 * Move token automatically with intelligence
 *
 * @param {color} - can be red, green, yellow and blue
 * @param {index} - can be 0, 1, 2 and 3
 */
function callAI(color, index){

  // Seven moves for AI
  let moveFirst = 1;
  let moveSecond = 1;
  let moveThird = 1;
  let moveForth = 1;
  let moveFifth = 1;
  let moveSixth = 1;
  let moveSeventh = 1;


  let other_color = PlayerId.filter(function(value){ 
    return value != color;
  });

  
  //============================================================================
  // First priority: Move the token that can reset other player's token position
  //============================================================================
  for (let p = 0; p<total_token; p++){
    for (let i=0; i<other_color.length; i++){
      for (let j=0; j<total_token; j++){
        if (isOutside[color + p] === 1 && Cell[color + 'Cell' + p] + random_num === Cell[other_color[i] + 'Cell' + j] && isOutside[other_color[i]+j]){
          eval(color + 'Token')[p].click();
          return (color, p);
        }  
      }
    }
    if (p === total_token - 1) moveFirst = 0;
  }

  //======================================================
  // Second priority: Get the token (gotti) out on 1 or 6
  //======================================================
  if (!moveFirst){
    for (let j=0; j<total_token; j++){
      if (isOutside[color + j] === 0 && (random_num === 1 || random_num === 6) && position[color + j] < total_cell){
        eval(color + 'Token')[j].click();
        return (color, j);
      }
      if (j === total_token - 1) moveSecond = 0;
    }
  }

  //========================================================================
  // Third Priority: If AI can use ladder or coin, the priority is also high
  //========================================================================

  // For this, let get ladder position
  let ladderPos = [];
  for (let i = 0; i< random_location2.length; i++){
    ladderPos.push(ladderStartPos[random_location2[i]]);
  }

  if (!moveSecond){
    for (let j=0; j<total_token; j++){
      if ((ladderPos.includes(Cell[color + 'Cell' + j] + random_num) || random_location1.includes(Cell[color + 'Cell' + j] + random_num)) && isOutside[color+j]){
        eval(color + 'Token')[j].click();
        return (color, j);
      }
      if (j === total_token - 1) moveThird = 0;
    }
  }

  //=========================================================================================================================
  // Forth Priority: If one can stay in safe cell, the priority is high
  // But exceptional, in safe cell (No. 8), sometime there can be snake, so first make sure, there is no snake in cell no. 8
  //=========================================================================================================================

  // First, get all snake position
  let snakePos = [];
  for (let i = 0; i< random_location3.length; i++){
    snakePos.push(snakeMouthPos[random_location3[i]]);
  }

  if (snakePos.includes(8)) snakeInSafeCell = 1;

  if (!moveThird){
    for (let j=0; j<total_token; j++){

      if (snakeInSafeCell){
        if (safeCell.includes(Cell[color + 'Cell' + j] + random_num) && isOutside[color + j] && Cell[color + 'Cell' + j] + random_num !== 8){
          eval(color + 'Token')[j].click();
          return (color, j);
        }
      }
      else{
        if (safeCell.includes(Cell[color + 'Cell' + j] + random_num) && isOutside[color + j]){
          eval(color + 'Token')[j].click();
          return (color, j);
        }
      }
      if (j === total_token - 1) moveForth = 0;
    }
  }

  //====================================================================================================================
  // Fifth Priority: Move the token that are not in safe cell but also keep eye on snake (try to be far from snake area)
  //====================================================================================================================

  if (!moveForth){
    for (let j=0; j<total_token; j++){
      if (isOutside[color + j] === 1 && !safeCell.includes(Cell[color + 'Cell' + j]) && 
      (total_cell - position[color + j])>=random_num && (!snakePos.includes(Cell[color + 'Cell' + j] + random_num))){
        eval(color + 'Token')[j].click();
        return (color, j);
      }
      if (j === total_token - 1) moveFifth = 0;
    }
  }

  //================================================================================
  //Sixth Priority: If not above, just move any token but there should not be snake
  //================================================================================
  if (!moveFifth){
    for (let j=0; j<total_token; j++){
      if (!snakePos.includes(Cell[color + 'Cell' + j] + random_num) && (total_cell - position[color + j]) >= random_num && isOutside[color + j]){
        eval(color + 'Token')[j].click();
        return (color, j);
      }
      if (j === total_token - 1) moveSixth = 0;
    }
  }

  //=======================================================================
  // Seventh Priority: If not above, move the token that is far from its home
  //=======================================================================
  let getPosition = []
  if(!moveSixth){
    for (let j=0; j<total_token; j++){
      if (isOutside[color + j] === 1) getPosition.push(position[color + j]);
    }
    getPosition.sort(function(a, b){return a-b});

    for (let i=0; i<total_token; i++){
      if (position[color + i] === getPosition[0] && isOutside[color + i] === 1) {
        eval(color+'Token')[i].click();
        return (color, i);
      }
      if (i === total_token - 1) moveSeventh = 0;
    }
  }

  if (!moveSeventh) changeTheTurn(color);
  
}