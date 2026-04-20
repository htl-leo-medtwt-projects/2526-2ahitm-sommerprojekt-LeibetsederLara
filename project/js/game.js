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
    checkForEnemies();

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
        if(isColliding(PLATFORMS[i].box, PLAYER, 5) && vy <= 0){
            vy = 0;
            isOnGround = true;

            y = PLATFORMS[i].y + PLATFORMS[i].height;
        }
    }
}

function checkForEnemies(){
    for(let i = 0; i < ENEMIES.length; i++){
        if(isColliding(PLAYER,ENEMIES[i].box, -0.1)){
            if(vy < -1.5){
                ENEMIES[i].box.style.display = 'none'
                console.log('ENEMY DEAD')
            }
            else{
                PLAYER.style.display = 'none'
                console.log('PLAYER DEAD')
            }
        }
    }
}

gameLoop()