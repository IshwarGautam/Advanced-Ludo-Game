let path = 0;
let isOutside = 0;

function playGame(background, bottomPos, leftPos, id){
  this.background = background;
  this.bottomPos = bottomPos;
  this.leftPos = leftPos;
  this.id = id;
  this.path = path;
  this.isOutside = isOutside;

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

    container.appendChild(this.token);
  }

  this.rollDice = ()=>{
    cube.addEventListener("click", function () {
      dice_sound.play();

      this.random_num =getRandomInt(1,7);
  
      this.showClass = 'show-' + this.random_num;
    
      if (this.currentClass) {
        cube.classList.remove(this.currentClass);
      }
    
      cube.classList.add(this.showClass);
      this.currentClass = this.showClass;
    })
  
  }

  this.moveToken = ()=>{
    this.token.addEventListener("click", () => {
      if (this.id === 'red' && turn === 0){
        if (this.random_num === 0 || this.random_num === 6 || this.isOutside === 1){
          this.isOutside = 1;

          this.token.style.bottom = redBottomPath[this.path] + "px";
          this.token.style.left = redLeftPath[this.path] + "px";
          this.path++;
        }

        index++;
        if (index > total_player-1) {
          index = 0;
        }
        turn = PlayerId[index];
      }
      else if (this.id === 'green' && turn === 1){
        if (this.random_num === 0 || this.random_num === 6 || this.isOutside === 1){
          this.isOutside = 1;
          this.token.style.bottom = greenBottomPath[this.path] + "px";
          this.token.style.left = greenLeftPath[this.path] + "px";
          this.path++;
        }

        index++;
        if (index > total_player-1) {
          index = 0;
        }
        turn = PlayerId[index];
      }
      else if (this.id === 'yellow' && turn === 2){
        if (this.random_num === 0 || this.random_num === 6 || this.isOutside === 1){
          this.isOutside = 1;
          this.token.style.bottom = yellowBottomPath[this.path] + "px";
          this.token.style.left = yellowLeftPath[this.path] + "px";
          this.path++;
        }

        index++;
        if (index > total_player-1) {
          index = 0;
        }
        turn = PlayerId[index];
      }
      else if (this.id === 'blue' && turn === 3){
        if (this.random_num === 0 || this.random_num === 6 || this.isOutside === 1){
          this.isOutside = 1;
          this.token.style.bottom = blueBottomPath[this.path] + "px";
          this.token.style.left = blueLeftPath[this.path] + "px";
          this.path++;
        }

        index++;
        if (index > total_player-1) {
          index = 0;
        }
        turn = PlayerId[index];
      }
    });
    
  }
}

const Red_bottomPos = ['58', '58', '142', '142'];
const Red_leftPos = ['58', '142', '58', '142'];

const Green_bottomPos = ['418', '418', '502', '502'];
const Green_leftPos = ['58', '142', '58', '142'];

const Yellow_bottomPos = ['418', '418', '502', '502'];
const Yellow_leftPos = ['418', '502', '418', '502'];

const Blue_bottomPos = ['58', '58', '142', '142'];
const Blue_leftPos = ['418', '502', '418', '502'];

function createGame(){
  for (let i=0; i<Red_bottomPos.length; i++){
    if (PlayerId.includes(0)){
      const obj1 = new playGame('#800000', Red_bottomPos[i], Red_leftPos[i], "red");
      obj1.createToken();
      obj1.rollDice();
      obj1.moveToken();
    }
  
    if (PlayerId.includes(1)){
      const obj2 = new playGame('#006400', Green_bottomPos[i], Green_leftPos[i], "green");
      obj2.createToken();
      obj2.rollDice();
      obj2.moveToken();
    }
    
    if (PlayerId.includes(2)){
      const obj3 = new playGame('#FF8C00', Yellow_bottomPos[i], Yellow_leftPos[i], "yellow");
      obj3.createToken();
      obj3.rollDice();
      obj3.moveToken();
    }
   
    if (PlayerId.includes(3)){
      const obj4 = new playGame('#800080', Blue_bottomPos[i], Blue_leftPos[i], "blue");
      obj4.createToken();
      obj4.rollDice();
      obj4.moveToken();
    } 
  }  
}

createGame();

function onSubmit(){
  const redPlayerName = red_input.value;
  const greenPlayerName = green_input.value;
  const yellowPlayerName = yellow_input.value;
  const bluePlayerName = blue_input.value;
  const radioBtnChecked = (Array.from(radioBtn)).some(option => option.checked);

  if (redPlayerName != '') {
    player1.innerHTML = redPlayerName;
    PlayerName.push(redPlayerName);
    PlayerId.push(0);
  }
  if (greenPlayerName != '') {
    player2.innerHTML = greenPlayerName;
    PlayerName.push(greenPlayerName);
    PlayerId.push(1);
  }
  if (yellowPlayerName != '') {
    player3.innerHTML = yellowPlayerName; 
    PlayerName.push(yellowPlayerName);
    PlayerId.push(2);
  }
  if (bluePlayerName != '') {
    player4.innerHTML = bluePlayerName;
    PlayerName.push(bluePlayerName);
    PlayerId.push(3);
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

