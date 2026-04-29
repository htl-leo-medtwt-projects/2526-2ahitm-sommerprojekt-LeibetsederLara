function movePlayer(dx, dy) {
    x += dx;
    y += dy;
    PLAYER.style.left = x + 'px';
    PLAYER.style.bottom = y + 'px';

    animatePlayer()
}

function gameLoop() {
    if (KEY_EVENTS.leftArrow) {
        if(30 < x){
            movePlayer(-GAME_CONFIG.characterSpeed, 0);
            // animatePlayer()
        }
    }
    if (KEY_EVENTS.rightArrow) {
        if(x < DISPLAY_WIDTH - 100){
            movePlayer(GAME_CONFIG.characterSpeed, 0);
            // animatePlayer()
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

                defeatedEnemies++;
                if(defeatedEnemies == ENEMIES.length){
                    levelUp();
                }
            }
            else{
                console.log('PLAYER DEAD')

                looseHeart()
            }
        }
    }
}

function looseHeart(){
    if(!isInvincible){
        hearts--
        isInvincible = true;
    }
    if(hearts == 0){
        die()
    }
    else{
        x = 20;
        y = 100;
    }

    PLAYER.style.opacity = 0.5;
    
    loadHearts(hearts)

    setTimeout(() => {
        PLAYER.style.opacity = 1;
        isInvincible = false;
    }, 1000);
}

function animatePlayer(){
    if(spriteNumber < 3){
        spriteNumber++
        let spriteX = parseFloat(spriteImg.style.right);
        spriteX += 45.0;
        spriteImg.style.right = spriteX + "px";
    }
    else {
        spriteImg.style.right = "0px";
        spriteNumber = 0;
    }
}

gameLoop()