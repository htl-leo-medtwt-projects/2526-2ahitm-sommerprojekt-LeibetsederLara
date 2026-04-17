let settings = document.getElementById('settingsOverlay');

function loadSettings(){
    if(settings.style.display == 'flex'){
        settings.style.display = 'none';
    }
    else{
        settings.style.display = 'flex';
    }
}

let bgmusicEnabled = false
let audioEnabled = false

function bgmusic(image){
    bgmusicEnabled != bgmusicEnabled

    if(image.style.opacity == 1){
        image.style.opacity = 0
    }
    else{
        image.style.opacity = 1
    }
}

function audio(image){
    audioEnabled = !audioEnabled

    if(image.style.opacity == 1){
        image.style.opacity = 0
    }
    else{
        image.style.opacity = 1
    }
}

function backToMenu(){
    document.getElementById('levelSelection').style.display = 'none'
    document.getElementById('startscreen').style.display = 'block'
}

function loadLevelSelection(){
    document.getElementById('levelSelection').style.display = 'block'
    document.getElementById('startscreen').style.display = 'none'
}

function die(){
    document.getElementById('gamescreen').style.display = 'none'
    document.getElementById('gameover').style.display = 'block'
}

function startLevel(element){
    document.getElementById('gamescreen').style.display = 'block'
    document.getElementById(element).style.display = 'none'
}

function loadMenu(element){
    document.getElementById(element).style.display = 'none'
    document.getElementById('startscreen').style.display = 'block'
}

function levelUp(){
    document.getElementById('gamescreen').style.display = 'none'
    document.getElementById('levelUp').style.display = 'block'
}

let GAME_CONFIG = {
    characterSpeed: 25
}

let KEY_EVENTS = {
    leftArrow: false,
    rightArrow: false,
    upArrow: false,
    downArrow: false,
    jump: false
}
document.onkeydown = keyListenerDown;
document.onkeyup = keyListenerUp;

function keyListenerDown(e) {
    if (e.key === "a") { // Left arrow
        KEY_EVENTS.leftArrow = true;
    }
    if (e.key === "ArrowUp") { // Up arrow
        KEY_EVENTS.upArrow = true;
    }
    if (e.key === "d") { // Right arrow
        KEY_EVENTS.rightArrow = true;
    }
    if (e.key === "ArrowDown") { // Down arrow
        KEY_EVENTS.downArrow = true;
    }
    if (e.key === " "){
        KEY_EVENTS.jump = true
    }
}
function keyListenerUp(e) {
    if (e.key === "a") { // Left arrow
        KEY_EVENTS.leftArrow = false;
    }
    if (e.key === "ArrowUp") { // Up arrow
        KEY_EVENTS.upArrow = false;
    }
    if (e.key === "d") { // Right arrow
        KEY_EVENTS.rightArrow = false;
    }
    if (e.key === "ArrowDown") { // Down arrow
        KEY_EVENTS.downArrow = false;
    }
    if (e.key === " "){
        KEY_EVENTS.jump = false
    }
}

const PLAYER = document.getElementById("player");
const BOTTOM = 200;
let x = parseFloat(PLAYER.style.left) || 0;
let y = parseFloat(PLAYER.style.bottom) || BOTTOM +100;
let vy = 0;
let gravity = -1.5;
let jumpStrength = 20;
let isOnGround = false;

function movePlayer(dx, dy) {
    x += dx;
    y += dy;
    PLAYER.style.left = x + 'px';
    PLAYER.style.bottom = y + 'px';
}

function gameLoop() {
    if (KEY_EVENTS.leftArrow) {
        console.log("left")
        movePlayer(-GAME_CONFIG.characterSpeed, 0);
    }
    if (KEY_EVENTS.rightArrow) {
        console.log("right")
        movePlayer(GAME_CONFIG.characterSpeed, 0);
    }
    if (KEY_EVENTS.jump && isOnGround) {
        vy = jumpStrength;
        isOnGround = false;
    }

    vy += gravity;
    y += vy;

    if(y <= BOTTOM){
        y = BOTTOM;
        vy = 0;
        isOnGround = true;
    }

    PLAYER.style.bottom = y + 'px';

    setTimeout(gameLoop, 1000 / GAME_CONFIG.characterSpeed);
}

gameLoop()