let GAME_CONFIG = {
    frameRate: 40,
    characterSpeed: 7
}
const platforms = document.querySelectorAll('.platform');

const PLATFORMS = [
    {
        box: platforms[0],
        height: 10,
        width: 300,
        x: 200,
        y: 300
    },
    {
        box: platforms[1],
        height: 10,
        width: 300,
        x: 800,
        y: 500
    }
];
const enemies = document.querySelectorAll('.enemy');

const ENEMIES = [
    {
        box: enemies[0],
        x: 650,
        y: 200
    },
    {
        box: enemies[1],
        x: 950,
        y: 510
    }
];

const PLAYER = document.getElementById("player");
const spriteImg = document.getElementById('spriteImg')
let spriteNumber = 0;
let direction = 1;
const ENEMY = document.getElementById('enemy')
const BOTTOM = 200;
const gravity = -1.2;
let x = parseFloat(PLAYER.style.left) || 0;
let y = parseFloat(PLAYER.style.bottom) || BOTTOM + 100;
let vy = 0;
let jumpStrength = 25;
let isOnGround = false;
let DISPLAY_HEIGHT = window.screen.height;
let DISPLAY_WIDTH = window.screen.width;
let hearts = 3;
let defeatedEnemies = 0;
let isInvincible = false;