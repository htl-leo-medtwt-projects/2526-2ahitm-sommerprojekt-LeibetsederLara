let GAME_CONFIG = {
    characterSpeed: 25
}
const PLATFORMS = document.getElementsByClassName('platform')
const PLAYER = document.getElementById("player");
const BOTTOM = 200;
const gravity = -1.5;
let x = parseFloat(PLAYER.style.left) || 0;
let y = parseFloat(PLAYER.style.bottom) || BOTTOM + 100;
let vy = 0;
let jumpStrength = 25;
let isOnGround = false;
let DISPLAY_HEIGHT = window.screen.height;
let DISPLAY_WIDTH = window.screen.width;