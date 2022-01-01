//==================================================
// Styling the Main container that wrap all elements
//==================================================
container.style.width = "600px";
container.style.height = "600px";
container.style.margin = "10px auto"

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
