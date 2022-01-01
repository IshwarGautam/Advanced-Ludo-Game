function playGame(background, bottomPos, leftPos){
  this.background = background;
  this.bottomPos = bottomPos;
  this.leftPos = leftPos;

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

  this.moveToken = ()=>{
    this.token.addEventListener("click", () => {
      
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

for (let i=0; i<Red_bottomPos.length; i++){
  const obj1 = new playGame('#800000', Red_bottomPos[i], Red_leftPos[i]);
  obj1.createToken();
  obj1.moveToken();

  const obj2 = new playGame('#006400', Green_bottomPos[i], Green_leftPos[i]);
  obj2.createToken();
  obj2.moveToken();

  const obj3 = new playGame('#FF8C00', Yellow_bottomPos[i], Yellow_leftPos[i]);
  obj3.createToken();
  obj3.moveToken();

  const obj4 = new playGame('#800080', Blue_bottomPos[i], Blue_leftPos[i]);
  obj4.createToken();
  obj4.moveToken();
  
}
