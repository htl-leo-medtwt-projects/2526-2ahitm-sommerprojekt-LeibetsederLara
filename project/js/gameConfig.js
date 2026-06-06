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
        y: 400
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
        y: 200,
        sprite: document.getElementsByClassName('enemySprite')[0],
        isOnGround: true,
        vy: 0,
        tolerance: 50,
        direction: 'left'
    },
    {
        box: enemies[1],
        x: 950,
        y: 510,
        sprite: document.getElementsByClassName('enemySprite')[1],
        isOnGround: true,
        vy: 0,
        tolerance: 50,
        direction: 'left'
    }
];

const PLAYER = document.getElementById("player");
const PLAYER_TOLERANCE = 7
const spriteImg = document.getElementById('spriteImg')
let spriteNumber = 0;
let enemySpriteNumber = 0;
let enemyFrameCounter = 0;
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
let time = 0;
let playerMoves = false;
let respawnTime = 5;

const SOUNDS = {
    jump: new Howl({src: ['./audio/jump.mp3'], volume: 0.5}),
    enemyHurt: new Howl({src: ['./audio/enemy-defeated.mp3'], volume: 1}),
    playerHurt: new Howl({src: ['./audio/hurt.mp3'], volume: 0.7}),
    levelUp: new Howl({src: ['./audio/levelUp.mp3'], volume: 1}),
    bgmusic: new Howl({src: ['./audio/hexxel-enter-the-dungeon.mp3'], volume: 0.7})
}

const spawnPositions = [
    {
        y: 417,
        x: 300
    },
    {
        y: 200,
        x: 670
    },
    {
        y: 517,
        x: 945
    }
]