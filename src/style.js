//==================================================
// Styling the Main container that wrap all elements
//==================================================

// 1. styling main game playing container
main_wrapper.style.maxWidth = "1200px";
main_wrapper.style.margin = "0 auto";
main_wrapper.style.display = "none";
container.style.width = "600px";
container.style.height = "600px";
container.style.margin = "10px auto";
container.style.position = "relative";
container.style.background = "ivory";

//2. styling start page where user input their details
start_page.style.display = "block";
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

which_color.style.fontSize = "20px";
which_color.style.textDecoration = "underline";
game_modes.style.fontSize = "22px";
game_modes.style.color = "#91f";

for (let i=0; i<input.length; i++){
  input[i].style.fontSize = "25px";
  input[i].style.borderRadius = "5px";
  input[i].style.padding = "5px";
  input[i].style.outline = "none";
  input[i].style.width = "80%";
  input[i].style.margin = "10px 0px";
}

footer.style.fontSize = "12px";
footer.style.fontWeight = "bold";
footer.style.fontFamily = "serif, Georgia, 'Times New Roman', Times";
footer.style.padding = "6px 0px";

playBtn.style.border = "0.5px solid black";
playBtn.style.fontSize = "25px";
playBtn.style.padding = "5px 15px";
playBtn.style.borderRadius = "5px";
playBtn.style.cursor = "pointer";

playBtn.onmouseover = function(){
  playBtn.style.background = "#fc2";
};
playBtn.onmouseout = function(){
  playBtn.style.background = "transparent";
};
playBtn.onclick = function(){
  onSubmit();
  playBtn.style.background = "#0f0";
};

adding_img.style.background = `url('./images/playing.png')`;
adding_img.style.width = "600px";
adding_img.style.height = "400px";
adding_img.style.position = "absolute";
adding_img.style.bottom = "0";
adding_img.style.left = "-80px";

// 3. Let create loading after user press play button
loading.style.background = `url(./images/loading.gif)`;
loading.style.width = "332px";
loading.style.height = "150px";
loading.style.backgroundSize = "150px";
loading.style.position = "absolute";
loading.style.backgroundRepeat = "no-repeat";
loading.style.marginLeft = "130px";
loading.style.display = "none";


// 4. Styling red input field
red_input.style.background = "rgba(247, 22, 45,0.6)";
red_input.style.border = "0.5px solid rgba(0,0,0,0.2)";
red_input.style.boxShadow = "0px 0px 4px rgba(247, 22, 45,0.9),inset 0px 0px 10px rgba(247, 22, 45,0.7)";

// 5. Styling green input field
green_input.style.background = "rgba(0,227,76,0.6)";
green_input.style.border = "0.5px solid rgba(0,0,0,0.2)";
green_input.boxShadow = "0px 0px 4px rgba(0, 227, 76,0.9),inset 0px 0px 10px rgba(0, 227, 76,0.7)";

// 6. Styling yelow input field
yellow_input.style.background = "rgba(247, 187, 5,0.6)";
yellow_input.style.border = "0.5px solid rgba(0,0,0,0.2)";
yellow_input.style.boxShadow = "0px 0px 4px rgba(247, 187, 5,0.9),inset 0px 0px 10px rgba(247, 187, 5,0.7)";

// 7. Styling blue input field
blue_input.style.background = "rgba(4, 195, 201, 0.6)";
blue_input.style.border = "0.5px solid rgba(0,0,0,0.2)";
blue_input.style.boxShadow = "0px 0px 4px rgba(4, 195, 201,0.9),inset 0px 0px 10px rgba(4, 195, 201,0.7)";

// 8. Styling top part of container
top_part.style.width = "100%";
top_part.style.height = "40%";
top_part.style.display = "flex";

// 9. Styling middle part of container
middle_part.style.width = "100%";
middle_part.style.height = "20%";
middle_part.style.display = "flex";

// 10. Styling bottom part of container
bottom_part.style.width = "100%";
bottom_part.style.height = "40%";
bottom_part.style.display = "flex";

// 11. Styling container inside green region
initial_green_region.style.width = "40%";
initial_green_region.style.height = "100%";
initial_green_region.style.alignItems = "center";
initial_green_region.style.justifyContent = "center";
initial_green_region.style.display = "flex";

// 12. Styling container inside yellow region
initial_yellow_region.style.width = "40%";
initial_yellow_region.style.height = "100%";
initial_yellow_region.style.alignItems = "center";
initial_yellow_region.style.justifyContent = "center";
initial_yellow_region.style.display = "flex";

// 13. Styling container inside red region
initial_red_region.style.width = "40%";
initial_red_region.style.height = "100%";
initial_red_region.style.alignItems = "center";
initial_red_region.style.justifyContent = "center";
initial_red_region.style.display = "flex";

// 14. Styling container inside blue region
initial_blue_region.style.width = "40%";
initial_blue_region.style.height = "100%";
initial_blue_region.style.alignItems = "center";
initial_blue_region.style.justifyContent = "center";
initial_blue_region.style.display = "flex";

between_green_yellow.style.width = "20%";
between_green_yellow.style.height = "100%";

// 15. Styling cell that are in between two color initial region
between_red_blue.style.width = "20%";
between_red_blue.style.height = "100%";

between_green_red.style.width = "40%";
between_green_red.style.height = "100%";

between_yellow_blue.style.width = "40%";
between_yellow_blue.style.height = "100%";

winner_region.style.width = "20%";
winner_region.style.height = "100%";

// 16. Styling Color boxes
for (let i=0; i<green.length; i++){
  green[i].style.background = "#84c21f";
  yellow[i].style.background = "#f6c700";
  red[i].style.background = "#dc2418";
  blue[i].style.background = "#0092dc";
}

for (let i=0; i<white.length; i++){
  white[i].style.background = "#ffffff";
}

// 17. Styling inner container of each region
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

// 18. Styling final region for each token
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

// 19. Styling text inside final region
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
text.style.fontFamily = "Georgia, 'Times New Roman', Times, serif";

// 20. Styling 3d dice
dice_container.style.width = "200px";
dice_container.style.height = "100px";
dice_container.style.marginTop = "-420px";
dice_container.style.marginLeft = "40px";
dice_container.style.perspective = "600px";

dice_text.style.marginLeft = "50px";

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

block_dice.style.width = "250px";
block_dice.style.height = "250px";
block_dice.style.marginTop = "-100px";
block_dice.style.position = "absolute";

// 21. Styling player name
player1.style.color = "tomato";
player1.style.width = "350px";
player1.style.textAlign = "right";
player1.style.fontSize = "20px";
player1.style.position = "absolute";
player1.style.marginRight = "600px";
player1.style.fontFamily = "Monospace, Georgia, 'Times New Roman', Times, serif";

player2.style.color = "lime";
player2.style.width = "350px";
player2.style.textAlign = "right";
player2.style.fontSize = "20px";
player2.style.position = "absolute";
player2.style.marginRight = "600px";
player2.style.fontFamily = "Monospace, Georgia, 'Times New Roman', Times, serif";

player3.style.color = "yellow";
player3.style.width = "350px";
player3.style.textAlign = "left";
player3.style.fontSize = "20px";
player3.style.position = "absolute";
player3.style.marginLeft = "600px";
player3.style.fontFamily = "Monospace, Georgia, 'Times New Roman', Times, serif";

player4.style.color = "#f2f";
player4.style.width = "350px";
player4.style.textAlign = "left";
player4.style.fontSize = "20px";
player4.style.position = "absolute";
player4.style.marginLeft = "600px";
player4.style.fontFamily = "Monospace, Georgia, 'Times New Roman', Times, serif";

isPlayed.style.fontSize = "20px";
isPlayed.style.color = "#991";
isPlayed.style.marginTop = "140px";
isPlayed.style.display = "none";


// 22. Styling score of each player
red_score.style.fontSize = "25px";
red_score.style.position = "absolute";
red_score.style.marginTop = "200px";
red_score.style.background = "yellow";
red_score.style.fontWeight = "bold";

green_score.style.fontSize = "25px";
green_score.style.position = "absolute";
green_score.style.marginTop = "-200px";
green_score.style.background = "yellow";
green_score.style.fontWeight = "bold";

yellow_score.style.fontSize = "25px";
yellow_score.style.position = "absolute";
yellow_score.style.marginTop = "-200px";
yellow_score.style.background = "yellow";
yellow_score.style.fontWeight = "bold";

blue_score.style.fontSize = "25px";
blue_score.style.position = "absolute";
blue_score.style.marginTop = "200px";
blue_score.style.background = "yellow";
blue_score.style.fontWeight = "bold";


// 23. For styling and placing high score of player
high_score.style.width = "250px";
high_score.style.textAlign = "center";
high_score.style.fontSize = "30px";
high_score.style.textDecoration = "underline";
high_score.style.fontFamily = "Fantasy, Georgia, 'Times New Roman', Times, serif";

high_score_info.style.width = "250px";
high_score_info.style.textAlign = "center";
high_score_info.style.fontSize = "20px";
high_score_info.style.fontFamily = "Tahoma, 'Times New Roman', Times, serif, Georgia";
high_score_info.style.marginTop = "10px";

score_container.style.background = "rgb(247,247,247)";
score_container.style.width = "250px";
score_container.style.height = "100px";
score_container.style.right = "0";
score_container.style.top = "10px";
score_container.style.position = "absolute";
score_container.style.borderRadius = "10px";


//24.  To display message at required time
for (let i=0; i<instant_msg.length; i++){
  instant_msg[i].style.position = "absolute";
  instant_msg[i].style.background = "#5f1";
  instant_msg[i].style.width = "250px";
  instant_msg[i].style.right = "30px";
  instant_msg[i].style.top = "160px";
  instant_msg[i].style.borderRadius = "20px";
  instant_msg[i].style.fontSize = "25px";
  instant_msg[i].style.textAlign = "center";
  instant_msg[i].style.fontWeight = "bold";
  instant_msg[i].style.display = "none";
}

ai_msg.style.color = "#fc2";
ai_msg.style.fontFamily = "'Times New Roman', Times, Serif";
ai_msg.style.position = "absolute";
ai_msg.style.fontSize = "30px";
ai_msg.style.marginTop = "35px";
ai_msg.style.marginLeft = "305px";
ai_msg.style.background = "#212329";
ai_msg.style.display = "none";

turn_msg.style.position = "absolute";
turn_msg.style.top = "115px";
turn_msg.style.marginLeft = "-20px";
turn_msg.style.fontSize = "22px";
turn_msg.style.fontWeight = "bold";
turn_msg.style.color = "#fff";
turn_msg.style.background = "rgb(110,103,11)";
turn_msg.style.borderRadius = "5px";
turn_msg.style.fontFamily = "Helvetica, Fantasy, Times, Verdana, Arial";

color_msg.style.position = "absolute";
color_msg.style.top = "155px";
color_msg.style.fontSize = "22px";
color_msg.style.marginLeft = "-20px";
color_msg.style.fontWeight = "bold";
color_msg.style.color = "#fff";
color_msg.style.background = "rgb(110,103,11)";
color_msg.style.borderRadius = "5px";
color_msg.style.fontFamily = "Helvetica, Fantasy, Times, Verdana, Arial";

active_turn.style.background = "black";
active_turn.style.fontSize = "25px";
active_turn.style.fontFamily = "Helvetica, Fantasy, Times, Verdana, Arial"

your_color.style.background = "black";
your_color.style.fontSize = "25px";
your_color.style.fontFamily = "Helvetica, Fantasy, Times, Verdana, Arial"


// 25. For styling end screen
end_screen.style.width = "400px";
end_screen.style.height = "340px";
end_screen.style.background = "#E6E6FA";
end_screen.style.position = "absolute";
end_screen.style.marginLeft = "400px";
end_screen.style.marginTop = "-200px";
end_screen.style.zIndex = "9999";
end_screen.style.borderRadius = "15px";
end_screen.style.display = "none";

crown_image.style.background = `url('./images/crown.png')`;
crown_image.style.width = "240px";
crown_image.style.height = "240px";
crown_image.style.marginTop = "-50px";
crown_image.style.marginLeft = "70px";

winner_color.style.fontSize = "35px";
winner_color.style.fontWeight = "bold";
winner_color.style.width = "310px";
winner_color.style.fontFamily = "Times, 'Times New Roman', serif, Georgia";
winner_color.style.marginLeft = "43px";
winner_color.style.marginTop = "-20px";
winner_color.style.textAlign = "center";
winner_color.style.boxShadow = "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";

restart_button.style.border = "0.5px solid black";
restart_button.style.fontSize = "25px";
restart_button.style.padding = "5px 15px";
restart_button.style.borderRadius = "5px";
restart_button.style.cursor = "pointer";
restart_button.style.marginLeft = "140px";
restart_button.style.background = "green";
restart_button.style.color = "ivory";
restart_button.style.textDecoration = "none";

restart_button.onmouseover = function(){
  restart_button.style.background = "#fc2";
  restart_button.style.color = "black";
};
restart_button.onmouseout = function(){
  restart_button.style.background = "green";
  restart_button.style.color = "ivory";
};
restart_button.onclick = function(){
  restart_button.style.background = "#111";
  restart_button.style.color = "ivory";
};


final_message.style.fontSize = "20px";
final_message.style.marginLeft = "65px";