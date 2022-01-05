let isRolled;
let redToken = [];
let greenToken = [];
let blueToken = [];
let yellowToken = [];
let tokenId = [];
let unique_id = '';
let unique_id_collection = [];
// Create our main function
function playGame(background, bottomPos, leftPos, id, unique_id){
  this.background = background;
  this.bottomPos = bottomPos;
  this.leftPos = leftPos;
  this.id = id;
  this.unique_id = unique_id;
  
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

    this.token.onmouseover = () => {
      this.token.style.opacity = "90%";
      this.token.style.width = "42px";
      this.token.style.height = "42px";
    }

    this.token.onmouseout = () => {
      this.token.style.opacity = "100%";
      this.token.style.width = "40px";
      this.token.style.height = "40px";
    }
    
    if (this.id === 'red') redToken.push(this.token);
    else if (this.id === 'green') greenToken.push(this.token);
    else if (this.id === 'yellow') yellowToken.push(this.token);
    else if (this.id === 'blue') blueToken.push(this.token);
   
    // setInterval(() => {
    //   this.token.addEventListener('click', ()=>{
    //     if (this.token.click()) console.log("clicked");
    //   })
    // }, 1000);

    unique_id_collection.push(this.unique_id);
    container.appendChild(this.token);
  }

}

// Create game based on the user input on the start page
function createGame(){
  for (let i=0; i<Red_bottomPos.length; i++){
    if (PlayerId.includes("red")){
      const obj1 = new playGame('#800000', Red_bottomPos[i], Red_leftPos[i], "red", "red"+i);
      obj1.createToken();
    }
  
    if (PlayerId.includes("green")){
      const obj2 = new playGame('#006400', Green_bottomPos[i], Green_leftPos[i], "green", "green"+i);
      obj2.createToken();
    }
    
    if (PlayerId.includes("yellow")){
      const obj3 = new playGame('#FF8C00', Yellow_bottomPos[i], Yellow_leftPos[i], "yellow", "yellow"+i);
      obj3.createToken();
    }
   
    if (PlayerId.includes("blue")){
      const obj4 = new playGame('#800080', Blue_bottomPos[i], Blue_leftPos[i], "blue", "blue"+i);
      obj4.createToken();
    } 
  }  
}

createGame();

// validation of user input and the action after clicking play button
function onSubmit(){
  const redPlayerName = red_input.value;
  const greenPlayerName = green_input.value;
  const yellowPlayerName = yellow_input.value;
  const bluePlayerName = blue_input.value;
  const radioBtnChecked = (Array.from(radioBtn)).some(option => option.checked);

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
    }, 5000);
  }
  else if (!radioBtnChecked){
    message.innerHTML = "Please select either human or computer";
    radio_section.style.border = "3px solid red";
    setTimeout(() => {
      message.innerHTML = '';
      radio_section.style.border = "none";
    }, 5000);
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

