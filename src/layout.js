//========================================================
// This is the location of each token at the beginning
//=========================================================
function initialLocation(){
  const block  = document.createElement('div');
  block.style.height = "360px";
  block.style.width = "360px";
  block.style.border = "1px solid black";
  container.appendChild(block);

  const subblock = document.createElement('div');
  subblock.style.height = "240px";
  subblock.style.width = "240px";
  subblock.style.border = "1px solid black";
  subblock.style.margin = "15%";
  block.appendChild(subblock);

  // this table contain four circle
  const table1 = document.createElement('table');
  table1.style.width = '240px';
  table1.style.height = '240px';
  table1.style.border = '1px solid black';

  for (let i = 0; i < 2; i++) {
    const tr = table1.insertRow();
    for (let j = 0; j < 2; j++) {
      const td = tr.insertCell();

      // defining cirle shape here
      const shape = document.createElement('div');
      shape.style.width = "60px";
      shape.style.height = "60px";
      shape.style.border = "1px solid black";
      shape.style.borderRadius = "50%";
      shape.style.marginLeft = "25%";

      td.appendChild(shape);
    } 
  }
  subblock.appendChild(table1);

  return null;
}

//===========
// Draw cell
//===========
function getCell(trans){
  const table2 = document.createElement('table');
  table2.style.width = '360px';
  table2.style.height = '180px';
  table2.style.border = '1px solid black';
  table2.style.transform = trans;

  for (let i = 0; i < 3; i++) {
    const tr = table2.insertRow();
    for (let j = 0; j < 6; j++) {
      const td = tr.insertCell();
      td.style.border = '1px solid black';

    } 
  }
  container.appendChild(table2);

  return null;
}


// Create final location
function winLocation(){
  //each token that reach to final position stay in triangle like shape region
  const winLoc = document.createElement('div');
  winLoc.style.width = "180px";
  winLoc.style.height = "180px";
  winLoc.style.border = "1px solid black";
  winLoc.style.position = "relative";
  container.appendChild(winLoc);

  //make triangle
  const triangle = [];
  const color = ["red", "green", "yellow", "blue"]

  for (let i=0; i<4; i++){
    triangle[i] = document.createElement('div');
    triangle[i].style.width = "180px";
    triangle[i].style.height = "90px";
    triangle[i].style.background = color[i];
    triangle[i].style.clipPath = "polygon(50% 0, 100% 100%, 0 100%)";
    triangle[i].style.transform = "rotate(" + (i * 90) + "deg)";
    triangle[i].style.position = "absolute";
    winLoc.appendChild(triangle[i]);
  }

  triangle[0].style.bottom = "0";
  triangle[1].style.marginLeft = "-45px";
  triangle[1].style.marginTop = "45px";
  triangle[3].style.marginLeft = "45px";
  triangle[3].style.marginTop = "45px";

  return null;
}


