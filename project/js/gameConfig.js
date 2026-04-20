let GAME_CONFIG = {
    characterSpeed: 25
}
const PLATFORMS = [
    {
        'box': document.querySelector('.platform:nth-child(1)'),
        'height': 10,
        'x': 200,
        'y': 300
    },
    {
        'box': document.querySelector('.platform:nth-child(2)'),
        'height': 10,
        'x': 800,
        'y': 500
    }
]
const ENEMIES = [
    {
        'box': document.querySelector('.enemy:nth-child(1)'),
        'hitbox': document.querySelector('.hitboxEnemy:nth-child(1)'),
        'hurtbox': document.querySelector('.hurtboxEnemy:nth-child(1)'),
        'x': 650,
        'y': 200
    },
    {
        'box': document.querySelector('.enemy:nth-child(2)'),
        'hitbox': document.querySelector('.hitboxEnemy:nth-child(2)'),
        'hurtbox': document.querySelector('.hurtboxEnemy:nth-child(2)'),
        'x': 950,
        'y': 510
    }
]
const PLAYER = document.getElementById("player");
const ENEMY = document.getElementById('enemy')
const BOTTOM = 200;
const gravity = -1.5;
let x = parseFloat(PLAYER.style.left) || 0;
let y = parseFloat(PLAYER.style.bottom) || BOTTOM + 100;
let vy = 0;
let jumpStrength = 25;
let isOnGround = false;
let DISPLAY_HEIGHT = window.screen.height;
let DISPLAY_WIDTH = window.screen.width;
let hearts = 3;