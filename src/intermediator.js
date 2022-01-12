//=====================================
// Get the DOM Elements from HTML
//=====================================

// 1. Main wrapper
const main_wrapper = document.getElementById("main-wrapper");
const container = document.getElementById('container');

// 2. Start page to fill the user details and so on
const start_page = document.getElementById("start-page");
const playerName = document.getElementById("playerName");
const playBtn = document.getElementById("playBtn");
const footer = document.getElementById("footer");
const input = document.querySelectorAll("#playerName input");
const radioBtn = document.getElementsByName("play_with");
const radioBtn2 = document.getElementsByName("choose-color");
const radioBtn3 = document.getElementsByName("game-mode");
const radio_section = document.getElementById("radio-section");
const radio_section2 = document.getElementById("radio-section2");
const radio_section3 = document.getElementById("radio-section3");
const play_with = document.querySelectorAll(".radioBtn label");
const note = document.getElementById("note");
const message = document.getElementById("message");
const loading = document.getElementById("loading");

const red_input = document.getElementById("red-input");
const green_input = document.getElementById("green-input");
const yellow_input = document.getElementById("yellow-input");
const blue_input = document.getElementById("blue-input");

const which_color = document.getElementById('which-color');
const game_modes = document.getElementById('game-modes');

const adding_img = document.getElementById("adding-img");

// 3. Top, middle and bottom container
const top_part = document.getElementById('top-part');
const middle_part = document.getElementById('middle-part');
const bottom_part = document.getElementById('bottom-part');

// 4. Element of top part
const initial_green_region = document.getElementById("initial-green-region");
const between_green_yellow = document.getElementById("between-green-yellow");
const initial_yellow_region = document.getElementById("initial-yellow-region");

// 5. Element of middle part
const between_green_red = document.getElementById("between-green-red");
const winner_region = document.getElementById("winner-region");
const between_yellow_blue = document.getElementById("between-yellow-blue");

// 6. Element of bottom part
const initial_red_region = document.getElementById("initial-red-region");
const between_red_blue = document.getElementById("between-red-blue");
const initial_blue_region = document.getElementById("initial-blue-region");

// 7. Defining color boxes
const green = document.getElementsByClassName('green');
const yellow = document.getElementsByClassName('yellow');
const red = document.getElementsByClassName('red');
const blue = document.getElementsByClassName('blue');
const white = document.getElementsByClassName('white');

// 8. Defining each sub region in top, middle and bottom part
const green_sub_region = document.getElementById("green-sub-region");
const yellow_sub_region = document.getElementById("yellow-sub-region");
const red_sub_region = document.getElementById("red-sub-region");
const blue_sub_region = document.getElementById("blue-sub-region");

const green_token_area = document.getElementsByClassName("green-token-area");
const yellow_token_area = document.getElementsByClassName("yellow-token-area");
const red_token_area = document.getElementsByClassName("red-token-area");
const blue_token_area = document.getElementsByClassName("blue-token-area");

const green_yellow_path = document.getElementsByClassName("green-yellow-path");
const red_blue_path = document.getElementsByClassName("red-blue-path");
const green_red_path = document.getElementsByClassName("green-red-path");
const yellow_blue_path = document.getElementsByClassName("yellow-blue-path");

// 9. Icon to denote safe region and arrow
const icon = document.getElementsByClassName("icon");

// 10. Final area in triangle container
const triangle_container = document.getElementById("triangle-container");
const green_final_area = document.getElementById("green-final-area");
const red_final_area = document.getElementById("red-final-area");
const blue_final_area = document.getElementById("blue-final-area");
const yellow_final_area = document.getElementById("yellow-final-area");

const home = document.getElementById("home");
const text = document.getElementById("text");

// 11. For 3d dice
const dice_container = document.getElementById("dice-container");
const block_dice = document.getElementById("block-dice");

const dice = document.getElementsByClassName('dice');
const dice_1 = document.getElementById('dice-1');
const dice_2 = document.getElementById('dice-2');
const dice_3 = document.getElementById('dice-3');
const dice_4 = document.getElementById('dice-4');
const dice_5 = document.getElementById('dice-5');
const dice_6 = document.getElementById('dice-6');

const dice_title = document.querySelector('#dice-container span');
const cube = document.querySelector('.ThreeD-dice');

const dice_text = document.getElementById("dice-text");

// 12. To display player name while playing
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const player3 = document.getElementById("player3");
const player4 = document.getElementById("player4");

const isPlayed = document.getElementById('isPlayed');


// 13. To maintain score of each player
const red_score = document.getElementById("red-score");
const green_score = document.getElementById("green-score");
const blue_score = document.getElementById("blue-score");
const yellow_score = document.getElementById("yellow-score");


// 14. To maintain high score
const score_container = document.getElementById("score-container");
const high_score = document.getElementById("high-score");
const high_score_name = document.getElementById("high-score-name");
const high_score_value = document.getElementById("high-score-value");
const high_score_info = document.getElementById("high-score-info");


// 15. To display message at required time
const instant_msg = document.getElementsByClassName("instant-msg");
const ai_msg = document.getElementById("ai-msg");
const turn_msg = document.getElementById("turn-msg");

const color_msg = document.getElementById("color-msg");
const your_color = document.getElementById("your-color");

const active_turn = document.getElementById("active-turn");

// 16. To display end screen after game over
const end_screen = document.getElementById("end-screen");
const crown_image = document.getElementById("crown-image");
const winner_color = document.getElementById("winner-color");
const restart_button = document.getElementById("restart-button");
const final_message = document.getElementById("final-message");
