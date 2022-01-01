//=====================================
// Get the DOM Elements from HTML
//=====================================

// 1. Main wrapper
const container = document.getElementById('container');

// 2. Top, middle and bottom container
const top_part = document.getElementById('top-part');
const middle_part = document.getElementById('middle-part');
const bottom_part = document.getElementById('bottom-part');

// 3. Element of top part
const initial_green_region = document.getElementById("initial-green-region");
const between_green_yellow = document.getElementById("between-green-yellow");
const initial_yellow_region = document.getElementById("initial-yellow-region");

// 4. Element of middle part
const between_green_red = document.getElementById("between-green-red");
const winner_region = document.getElementById("winner-region");
const between_yellow_blue = document.getElementById("between-yellow-blue");

// 5. Element of bottom part
const initial_red_region = document.getElementById("initial-red-region");
const between_red_blue = document.getElementById("between-red-blue");
const initial_blue_region = document.getElementById("initial-blue-region");

// 6. Defining color boxes
const green = document.getElementsByClassName('green');
const yellow = document.getElementsByClassName('yellow');
const red = document.getElementsByClassName('red');
const blue = document.getElementsByClassName('blue');
const white = document.getElementsByClassName('white');

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

const icon = document.getElementsByClassName("icon");

const triangle_container = document.getElementById("triangle-container");
const green_final_area = document.getElementById("green-final-area");
const red_final_area = document.getElementById("red-final-area");
const blue_final_area = document.getElementById("blue-final-area");
const yellow_final_area = document.getElementById("yellow-final-area");

const home = document.getElementById("home");
const text = document.getElementById("text");

