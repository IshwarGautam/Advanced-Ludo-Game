//==================================================
// Styling the Main container that wrap all elements
//==================================================
main_wrapper.style.maxWidth = "1200px";
main_wrapper.style.margin = "0 auto";
// main_wrapper.style.display = "none";
container.style.width = "600px";
container.style.height = "600px";
container.style.margin = "10px auto";
container.style.position = "relative";
container.style.background = "ivory";

start_page.style.display = "none";
start_page.style.width = "400px";
start_page.style.background = "rgb(247,247,247)";
start_page.style.textAlign = "center";
start_page.style.paddingTop = "20px";
start_page.style.borderRadius = "10px";
start_page.style.margin = "50px auto";
start_page.style.boxShadow = "0px 0px 4px rgba(0,0,0,0.7),inset 0px 0px 10px rgba(0,0,0,0.4)";

for (let i=0; i<play_with.length; i++){
  play_with[i].style.fontSize = "20px";
}
note.style.color = "#186";

playerName.style.paddingBottom = "12px";

loading.style.background = `url(./images/loading.gif)`;
loading.style.width = "332px";
loading.style.height = "150px";
loading.style.backgroundSize = "150px";
loading.style.position = "absolute";
loading.style.backgroundRepeat = "no-repeat";
loading.style.marginLeft = "130px";
loading.style.display = "none";

footer.style.fontSize = "12px";
footer.style.fontWeight = "bold";
footer.style.fontFamily = "serif, Georgia, 'Times New Roman', Times";
footer.style.padding = "6px 0px";

for (let i=0; i<input.length; i++){
  input[i].style.fontSize = "25px";
  input[i].style.borderRadius = "5px";
  input[i].style.padding = "5px";
  input[i].style.outline = "none";
  input[i].style.width = "80%";
  input[i].style.margin = "10px 0px";
}


red_input.style.background = "rgba(247, 22, 45,0.6)";
red_input.style.border = "0.5px solid rgba(0,0,0,0.2)";
red_input.style.boxShadow = "0px 0px 4px rgba(247, 22, 45,0.9),inset 0px 0px 10px rgba(247, 22, 45,0.7)";

green_input.style.background = "rgba(0,227,76,0.6)";
green_input.style.border = "0.5px solid rgba(0,0,0,0.2)";
green_input.boxShadow = "0px 0px 4px rgba(0, 227, 76,0.9),inset 0px 0px 10px rgba(0, 227, 76,0.7)";

yellow_input.style.background = "rgba(247, 187, 5,0.6)";
yellow_input.style.border = "0.5px solid rgba(0,0,0,0.2)";
yellow_input.style.boxShadow = "0px 0px 4px rgba(247, 187, 5,0.9),inset 0px 0px 10px rgba(247, 187, 5,0.7)";

blue_input.style.background = "rgba(4, 195, 201, 0.6)";
blue_input.style.border = "0.5px solid rgba(0,0,0,0.2)";
blue_input.style.boxShadow = "0px 0px 4px rgba(4, 195, 201,0.9),inset 0px 0px 10px rgba(4, 195, 201,0.7)";

playBtn.style.border = "0.5px solid black";
playBtn.style.fontSize = "25px";
playBtn.style.padding = "5px 15px";
playBtn.style.borderRadius = "5px";
playBtn.style.cursor = "pointer";

playBtn.onmouseover = function(){
  playBtn.style.background = "#fc2";
}
playBtn.onmouseout = function(){
  playBtn.style.background = "transparent";
}
playBtn.onclick = function(){
  onSubmit();
  playBtn.style.background = "#0f0";
}

top_part.style.width = "100%";
top_part.style.height = "40%";
top_part.style.display = "flex";

middle_part.style.width = "100%";
middle_part.style.height = "20%";
middle_part.style.display = "flex";

bottom_part.style.width = "100%";
bottom_part.style.height = "40%";
bottom_part.style.display = "flex";

initial_green_region.style.width = "40%";
initial_green_region.style.height = "100%";
initial_green_region.style.alignItems = "center";
initial_green_region.style.justifyContent = "center";
initial_green_region.style.display = "flex";

initial_yellow_region.style.width = "40%";
initial_yellow_region.style.height = "100%";
initial_yellow_region.style.alignItems = "center";
initial_yellow_region.style.justifyContent = "center";
initial_yellow_region.style.display = "flex";

initial_red_region.style.width = "40%";
initial_red_region.style.height = "100%";
initial_red_region.style.alignItems = "center";
initial_red_region.style.justifyContent = "center";
initial_red_region.style.display = "flex";

initial_blue_region.style.width = "40%";
initial_blue_region.style.height = "100%";
initial_blue_region.style.alignItems = "center";
initial_blue_region.style.justifyContent = "center";
initial_blue_region.style.display = "flex";

between_green_yellow.style.width = "20%";
between_green_yellow.style.height = "100%";

between_red_blue.style.width = "20%";
between_red_blue.style.height = "100%";

between_green_red.style.width = "40%";
between_green_red.style.height = "100%";

between_yellow_blue.style.width = "40%";
between_yellow_blue.style.height = "100%";

winner_region.style.width = "20%";
winner_region.style.height = "100%";

// Color boxes
for (let i=0; i<green.length; i++){
  green[i].style.background = "#84c21f";
  yellow[i].style.background = "#f6c700";
  red[i].style.background = "#dc2418";
  blue[i].style.background = "#0092dc";
}

for (let i=0; i<white.length; i++){
  white[i].style.background = "#ffffff";
}

green_sub_region.style.width = "70%";
green_sub_region.style.height = "70%";

yellow_sub_region.style.width = "70%";
yellow_sub_region.style.height = "70%";

red_sub_region.style.width = "70%";
red_sub_region.style.height = "70%";

blue_sub_region.style.width = "70%";
blue_sub_region.style.height = "70%";

for (let i=0; i<green_token_area.length; i++){
  green_token_area[i].style.width = "35%";
  green_token_area[i].style.height = "35%";
  green_token_area[i].style.margin = "7.5%";
  green_token_area[i].style.float = "left";
  green_token_area[i].style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
  green_token_area[i].style.transition = "all 0.3s cubic-bezier(0.25, 0.8, 25, 1)";

  yellow_token_area[i].style.width = "35%";
  yellow_token_area[i].style.height = "35%";
  yellow_token_area[i].style.margin = "7.5%";
  yellow_token_area[i].style.float = "left";
  yellow_token_area[i].style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
  yellow_token_area[i].style.transition = "all 0.3s cubic-bezier(0.25, 0.8, 25, 1)";

  red_token_area[i].style.width = "35%";
  red_token_area[i].style.height = "35%";
  red_token_area[i].style.margin = "7.5%";
  red_token_area[i].style.float = "left";
  red_token_area[i].style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
  red_token_area[i].style.transition = "all 0.3s cubic-bezier(0.25, 0.8, 25, 1)";

  blue_token_area[i].style.width = "35%";
  blue_token_area[i].style.height = "35%";
  blue_token_area[i].style.margin = "7.5%";
  blue_token_area[i].style.float = "left";
  blue_token_area[i].style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
  blue_token_area[i].style.transition = "all 0.3s cubic-bezier(0.25, 0.8, 25, 1)";

}

for(let i=0; i<green_yellow_path.length; i++){
  green_yellow_path[i].style.width = "33.33%";
  green_yellow_path[i].style.height = "16.67%";
  green_yellow_path[i].style.float = "left";
  green_yellow_path[i].style.border = "1px solid black";

  red_blue_path[i].style.width = "33.33%";
  red_blue_path[i].style.height = "16.67%";
  red_blue_path[i].style.float = "left";
  red_blue_path[i].style.border = "1px solid black";

  green_red_path[i].style.width = "16.67%";
  green_red_path[i].style.height = "33.33%";
  green_red_path[i].style.float = "left";
  green_red_path[i].style.border = "1px solid black";

  yellow_blue_path[i].style.width = "16.67%";
  yellow_blue_path[i].style.height = "33.33%";
  yellow_blue_path[i].style.float = "left";
  yellow_blue_path[i].style.border = "1px solid black";
}

for(let i=0;i<icon.length;i++){
  icon[i].style.margin = "3px";
}

triangle_container.style.width = "100%";
triangle_container.style.height = "100%";
triangle_container.style.position = "relative";

green_final_area.style.width = "0";
green_final_area.style.height = "0";
green_final_area.style.borderTop = "55px solid transparent";
green_final_area.style.borderLeft = "55px solid #84c21f";
green_final_area.style.borderBottom = "55px solid transparent";
green_final_area.style.position = "absolute";
green_final_area.style.left = "0";
green_final_area.style.top = "5px";

red_final_area.style.width = "0";
red_final_area.style.height = "0";
red_final_area.style.borderLeft = "55px solid transparent";
red_final_area.style.borderRight = "55px solid transparent";
red_final_area.style.borderBottom = "55px solid #dc2418";
red_final_area.style.position = "absolute";
red_final_area.style.left = "5px";
red_final_area.style.bottom = "0";

blue_final_area.style.width = "0";
blue_final_area.style.height = "0";
blue_final_area.style.borderRight = "55px solid #0092dc";
blue_final_area.style.borderBottom = "55px solid transparent";
blue_final_area.style.borderTop = "55px solid transparent";
blue_final_area.style.position = "absolute";
blue_final_area.style.right = "0";
blue_final_area.style.top = "5px";

yellow_final_area.style.width = "0";
yellow_final_area.style.height = "0";
yellow_final_area.style.borderLeft = "55px solid transparent";
yellow_final_area.style.borderRight = "55px solid transparent";
yellow_final_area.style.borderTop = "55px solid #f6c700";
yellow_final_area.style.position = "absolute";
yellow_final_area.style.right = "5px";
yellow_final_area.style.top = "0";


home.style.width = "50%";
home.style.height = "50%";
home.style.borderRadius = "50%";
home.style.position = "absolute";
home.style.margin = "28px";
home.style.background = "ivory";
home.style.zIndex = "1";

text.style.width = "80%";
text.style.height = "40%";
text.style.margin = "20px 5px";
text.style.fontSize = "8px";
text.style.fontFamily = "Georgia, 'Times New Roman', Times, serif"

// Styling 3d dice
dice_container.style.width = "200px";
dice_container.style.height = "100px";
dice_container.style.marginTop = "-420px";
dice_container.style.marginLeft = "40px";
dice_container.style.perspective = "600px";

for (let i=0; i<dice.length; i++){
  dice[i].style.position = "absolute";
  dice[i].style.width = "200px";
  dice[i].style.height = "200px";
  dice[i].style.border = "4px solid ivory";
  dice[i].style.lineHeight = "200px";
  dice[i].style.fontSize = "40px";
  dice[i].style.fontWeight = "bold";
  dice[i].style.color = "ivory";
  dice[i].style.textAlign = "center";
}

dice_1.style.background = "#000";
dice_1.style.opacity = "0.75";
dice_1.style.transform = "rotateY(0deg) translateZ(100px)";

dice_2.style.background = "#000";
dice_2.style.opacity = "0.75";
dice_2.style.transform = "rotateY(180deg) translateZ(100px)";

dice_3.style.background = "#000";
dice_3.style.opacity = "0.75";
dice_3.style.transform = "rotateY(90deg) translateZ(100px)";

dice_4.style.background = "#000";
dice_4.style.opacity = "0.75";
dice_4.style.transform = "rotateY(-90deg) translateZ(100px)";

dice_5.style.background = "#000";
dice_5.style.opacity = "0.75";
dice_5.style.transform = "rotateX(90deg) translateZ(100px)";

dice_6.style.background = "#000";
dice_6.style.opacity = "0.75";
dice_6.style.transform = "rotateX(-90deg) translateZ(100px)";

dice_title.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
dice_title.style.fontSize = "30px";
dice_title.style.textDecoration = "underline";
dice_title.style.color = "#fc2";

player1.style.color = "ivory";
player1.style.width = "350px";
player1.style.textAlign = "right";
player1.style.fontSize = "40px";
player1.style.position = "absolute";
player1.style.marginRight = "600px";
player1.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";

player2.style.color = "ivory";
player2.style.width = "350px";
player2.style.textAlign = "right";
player2.style.fontSize = "40px";
player2.style.position = "absolute";
player2.style.marginRight = "600px";
player2.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";

player3.style.color = "ivory";
player3.style.width = "350px";
player3.style.textAlign = "left";
player3.style.fontSize = "40px";
player3.style.position = "absolute";
player3.style.marginLeft = "600px";
player3.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";

player4.style.color = "ivory";
player4.style.width = "350px";
player4.style.textAlign = "left";
player4.style.fontSize = "40px";
player4.style.position = "absolute";
player4.style.marginLeft = "600px";
player4.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";
