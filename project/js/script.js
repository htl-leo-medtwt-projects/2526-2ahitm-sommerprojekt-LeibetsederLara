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
    audioEnabled != audioEnabled

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
    downArrow: false
}
document.onkeydown = keyListenerDown;
document.onkeyup = keyListenerUp;

function keyListenerDown(e) {
    if (e.key === "ArrowLeft") { // Left arrow
        KEY_EVENTS.leftArrow = true;
    }
    if (e.key === "ArrowUp") { // Up arrow
        KEY_EVENTS.upArrow = true;
    }
    if (e.key === "ArrowRight") { // Right arrow
        KEY_EVENTS.rightArrow = true;
    }
    if (e.key === "ArrowDown") { // Down arrow
        KEY_EVENTS.downArrow = true;
    }
}
function keyListenerUp(e) {
    if (e.key === "ArrowLeft") { // Left arrow
        KEY_EVENTS.leftArrow = false;
    }
    if (e.key === "ArrowUp") { // Up arrow
        KEY_EVENTS.upArrow = false;
    }
    if (e.key === "ArrowRight") { // Right arrow
        KEY_EVENTS.rightArrow = false;
    }
    if (e.key === "ArrowDown") { // Down arrow
        KEY_EVENTS.downArrow = false;
    }
}

let PLAYER = document.getElementById("player");
let x = parseFloat(PLAYER.style.left) || 0;

function movePlayer(dx, _dy) {
    x += dx;
    PLAYER.style.left = x + 'px';
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

    setTimeout(gameLoop, 1000 / GAME_CONFIG.characterSpeed);
}

gameLoop()