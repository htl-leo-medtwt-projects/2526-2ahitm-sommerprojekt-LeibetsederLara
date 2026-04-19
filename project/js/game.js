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