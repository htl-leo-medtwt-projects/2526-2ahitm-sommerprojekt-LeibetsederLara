function movePlayer(dx, dy, dr) {
    x += dx;
    y += dy;
    PLAYER.style.left = x + 'px';
    PLAYER.style.bottom = y + 'px';
    PLAYER.style.transform = `scaleX(${dr})`

    animatePlayer()
}

function gameLoop() {
    if (KEY_EVENTS.leftArrow) {
        if(30 < x){
            movePlayer(-GAME_CONFIG.characterSpeed, 0, 1);
            // animatePlayer()
        }
    }
    if (KEY_EVENTS.rightArrow) {
        if(x < DISPLAY_WIDTH - 100){
            movePlayer(GAME_CONFIG.characterSpeed, 0, -1);
            // animatePlayer()
        }
    }
    if (KEY_EVENTS.jump && isOnGround) {
        vy = jumpStrength;
        isOnGround = false;
        SOUNDS.jump.play()
    }

    moveEnemy()
    animateEnemies()

    vy += gravity;
    y += vy;

    isOnPlatform();
    checkForEnemies();

    if(y <= BOTTOM){
        y = BOTTOM;
        vy = 0;
        isOnGround = true;
    }

    for(let i = 0; i < ENEMIES.length; i++){
        ENEMIES[i].vy += gravity;
        ENEMIES[i].y += ENEMIES[i].vy;

        if(ENEMIES[i].y <= BOTTOM + 50){
            ENEMIES[i].y = BOTTOM + 50;
            ENEMIES[i].vy = 0;
            ENEMIES[i].isOnGround = true;
        }

        ENEMIES[i].box.style.bottom = ENEMIES[i].y + 'px'
    }

    PLAYER.style.bottom = y + 'px';

    setTimeout(gameLoop, 1000 / GAME_CONFIG.frameRate);
}

function isOnPlatform(){
    for(let i = 0; i < PLATFORMS.length; i++){
        if(isColliding(PLATFORMS[i].box, PLAYER, PLAYER_TOLERANCE) && vy <= 0){
            vy = 0;
            isOnGround = true;

            y = PLATFORMS[i].y + PLATFORMS[i].height + PLAYER_TOLERANCE;
        }

        for(let j = 0; j < ENEMIES.length; j++){
            if(isColliding(PLATFORMS[i].box, ENEMIES[j].box, ENEMIES[j].tolerance) && ENEMIES[j].vy <= 0){
                ENEMIES[j].vy = 0;
                ENEMIES[j].isOnGround = true;

                ENEMIES[j].y = PLATFORMS[i].y + PLATFORMS[i].height + ENEMIES[j].tolerance;
            }
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
                    SOUNDS.levelUp.play()
                }
                else{
                    SOUNDS.enemyHurt.play()
                }
            }
            else{
                console.log('PLAYER DEAD')

                SOUNDS.playerHurt.play()

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
    let spriteX = parseFloat(spriteImg.style.right);
    let spriteY = parseFloat(spriteImg.style.top);

    if(spriteNumber < 3){
        spriteNumber++
        spriteX += 45.0;
        spriteImg.style.right = spriteX + "px";
    }
    else{
        if(spriteY > -290){
            spriteY -= 58;
        }
        else{
            spriteY = 0;
        }
        spriteImg.style.top = spriteY + "px";
        spriteImg.style.right = "0px";
        spriteNumber = 0;
    }
}

function animateEnemies(){
    if(enemyFrameCounter >= 4){
        for(let i = 0; i < ENEMIES.length;i++){
            let spriteX = parseFloat(ENEMIES[i].sprite.style.right);

            if(enemySpriteNumber < 6){
                enemySpriteNumber++
                spriteX += 80.0;
                ENEMIES[i].sprite.style.right = spriteX + "px";
            }
            else{
                ENEMIES[i].sprite.style.right = "0px";
                enemySpriteNumber = 0;
            }
        }
        enemyFrameCounter = 0
    }
    else{
        enemyFrameCounter++
    }
}

// if (KEY_EVENTS.leftArrow) {
//         if(30 < x){
//             movePlayer(-GAME_CONFIG.characterSpeed, 0, 1);
//             // animatePlayer()
//         }
//     }
//     if (KEY_EVENTS.rightArrow) {
//         if(x < DISPLAY_WIDTH - 100){
//             movePlayer(GAME_CONFIG.characterSpeed, 0, -1);
//             // animatePlayer()
//         }
//     }

function moveEnemy(){
    for(let i = 0; i < ENEMIES.length; i++){
        if(30 >= ENEMIES[i].x){
            ENEMIES[i].box.style.transform = 'scaleX(-1)'
        }
        else if(DISPLAY_WIDTH - 100 <= ENEMIES[i].x){
            ENEMIES[i].box.style.transform = 'scaleX(1)'
        }

        if(ENEMIES[i].box.style.transform == 'scaleX(-1)'){
            ENEMIES[i].x += (GAME_CONFIG.characterSpeed - 2)
        }
        else{
            ENEMIES[i].x -= (GAME_CONFIG.characterSpeed - 2)
        }

        ENEMIES[i].box.style.left = ENEMIES[i].x + "px"
    }
}