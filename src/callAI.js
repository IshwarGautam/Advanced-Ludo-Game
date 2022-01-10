// =========================================
// Implementing AI (roll dice automatically)
// =========================================

function invokeAI(){

  // setting time-interval for computer
  if (opponent === 'computer') timeInterval = 2500;
  else timeInterval = 1;

  setInterval(() => {
    if (turn !== user && opponent === 'computer' && response1 === 1 && response2 === 1 && start === 1){
      cube.click();
      cube.addEventListener("click", rollDice, {once:true});
    }
    else{
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

  let moveFirst = 1;
  let moveSecond = 1;
  let moveThird = 1;
  let moveForth = 1;
  let moveFifth = 1;


  let other_color = PlayerId.filter(function(value){ 
    return value != color;
  });

  
  //============================================================================
  // First priority: Move the token that can reset other player's token position
  //============================================================================
  for (let p = 0; p<total_token; p++){
    for (let i=0; i<other_color.length; i++){
      for (let j=0; j<total_token; j++){
        if (isOutside[color + p] === 1 && Cell[color + 'Cell' + p] + random_num === Cell[other_color[i] + 'Cell' + j]){
          console.log("First priority executed....");
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
      if (isOutside[color + j] === 0 && (random_num === 1 || random_num === 6)){
        console.log("Second priority executed....");
        eval(color + 'Token')[j].click();
        return (color, j);
      }
      if (j === 3) moveSecond = 0;
    }
  }

  //========================================================================
  // Third Priority: If AI can use ladder or coin, the priority is also high
  //========================================================================
  if (!moveSecond){
    for (let j=0; j<total_token; j++){
      if (ladderStartPos.includes(Cell[color + 'Cell' + j] + random_num) || random_location1.includes(Cell[color + 'Cell' + j] + random_num)){
        console.log("Third priority executed....");
        eval(color + 'Token')[j].click();
        return (color, j);
      }
      if (j === 3) moveThird = 0;
    }
  }

  //====================================================================================================================
  // Forth Priority: Move the token that are not in safe cell but also keep eye on snake (try to be far from snake area)
  //====================================================================================================================
  if (!moveThird){
    for (let j=0; j<total_token; j++){
      if (isOutside[color + j] === 1 && !safeCell.includes(Cell[color + 'Cell' + j]) && 
      (total_cell - position[color + j])>=random_num && (!snakeMouthPos.includes(Cell[color + 'Cell' + j] + random_num))){
        console.log("Forth priority executed....");
        eval(color + 'Token')[j].click();
        return (color, j);
      }
      if (j === 3) moveForth = 0;
    }
  }

  //=======================================================================
  // Fifth Priority: If not above, move the token that is far from its home
  //=======================================================================
  let getPosition = []
  if(!moveForth){
    for (let j=0; j<total_token; j++){
      if (isOutside[color + j] === 1) getPosition.push(position[color + j]);
    }
    getPosition.sort(function(a, b){return a-b});

    for (let i=0; i<total_token; i++){
      if (position[color + i] === getPosition[0]) {
        console.log("Fifth priority executed....");
        eval(color+'Token')[i].click();
        return (color, i);
      }
      if (i === 3) moveFifth = 0;
    }
  }

  if (!moveFifth) changeTheTurn(color);
  
}