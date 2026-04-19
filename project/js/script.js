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
    bgmusicEnabled = !bgmusicEnabled

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

let PLATFORMS = document.getElementsByClassName('platform')

const PLAYER = document.getElementById("player");
const BOTTOM = 200;
let x = parseFloat(PLAYER.style.left) || 0;
let y = parseFloat(PLAYER.style.bottom) || BOTTOM + 100;
let vy = 0;
let gravity = -1.5;
let jumpStrength = 25;
let isOnGround = false;
let DISPLAY_HEIGHT = window.screen.height;
let DISPLAY_WIDTH = window.screen.width;

//collision function vom spritegame
function isColliding(div1, div2, tolerance = 0) {

    let d1OffsetTop = div1.offsetTop;
    let d1OffsetLeft = div1.offsetLeft; 
    let d1Height = div1.clientHeight;
    let d1Width = div1.clientWidth;
    let d1Top = d1OffsetTop + d1Height;
    let d1Left = d1OffsetLeft + d1Width;

    let d2OffsetTop = div2.offsetTop;
    let d2OffsetLeft = div2.offsetLeft; 
    let d2Height = div2.clientHeight;
    let d2Width = div2.clientWidth;
    let d2Top = d2OffsetTop + d2Height;
    let d2Left = d2OffsetLeft + d2Width;

    let distanceTop = d2OffsetTop - d1Top;
    let distanceBottom = d1OffsetTop - d2Top;
    let distanceLeft = d2OffsetLeft - d1Left;
    let distanceRight = d1OffsetLeft - d2Left;

    return !(tolerance < distanceTop || tolerance < distanceBottom || tolerance < distanceLeft || tolerance < distanceRight);
};


function movePlayer(dx, dy) {
    x += dx;
    y += dy;
    PLAYER.style.left = x + 'px';
    PLAYER.style.bottom = y + 'px';
}

function gameLoop() {
    if (KEY_EVENTS.leftArrow) {
        if(30 < x){
            movePlayer(-GAME_CONFIG.characterSpeed, 0);
        }
    }
    if (KEY_EVENTS.rightArrow) {
        if(x < DISPLAY_WIDTH - 100){
            movePlayer(GAME_CONFIG.characterSpeed, 0);
        }
    }
    if (KEY_EVENTS.jump && isOnGround) {
        vy = jumpStrength;
        isOnGround = false;
    }

    vy += gravity;
    y += vy;

    isOnPlatform();

    if(y <= BOTTOM){
        y = BOTTOM;
        vy = 0;
        isOnGround = true;
    }

    PLAYER.style.bottom = y + 'px';

    setTimeout(gameLoop, 1000 / GAME_CONFIG.characterSpeed);
}

function isOnPlatform(){
    for(let i = 0; i < PLATFORMS.length; i++){
        if(isColliding(PLATFORMS[i], PLAYER) && vy <= 0){
            console.log('on platform');
            vy = 0;
            isOnGround = true;

            switch (i){
                case 0:
                    y = 300;
                    break;
                case 1:
                    y = 500;
                    break;
                default:
                    break;
            }

            y += 10;
        }
    }
}

gameLoop()