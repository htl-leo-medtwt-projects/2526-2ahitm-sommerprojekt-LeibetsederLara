function movePlayer(dx, dy, dr) {
    x += dx;
    y += dy;
    
    PLAYER.style.left = x + 'px';
    PLAYER.style.bottom = y + 'px';
    PLAYER.style.transform = `scaleX(${dr})`

    playerMoves = true;
}

function gameLoop() {
    playerMoves = false;

    if (KEY_EVENTS.leftArrow) {
        if(30 < x){
            movePlayer(-GAME_CONFIG.characterSpeed, 0, 1);
        }
    }
    if (KEY_EVENTS.rightArrow) {
        if(x < DISPLAY_WIDTH - 100){
            movePlayer(GAME_CONFIG.characterSpeed, 0, -1);
        }
    }
    if (KEY_EVENTS.jump && isOnGround) {
        vy = jumpStrength;
        isOnGround = false;
        SOUNDS.jump.play()
    }

    if(vy < 0){
        isOnGround = false
    }

    animatePlayer()

    moveEnemy()
    animateEnemies()

    vy += gravity;
    y += vy;
    console.log(vy)

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

function checkForEnemies() {
    for (let i = ENEMIES.length - 1; i >= 0; i--) {
        if (isColliding(PLAYER, ENEMIES[i].box, -15)) {
            if (vy < -1.5) {
                ENEMIES[i].box.remove();
                ENEMIES.splice(i, 1); 

                defeatedEnemies++;
                
                SOUNDS.enemyHurt.play();
                
            } else {
                SOUNDS.playerHurt.play();
                looseHeart();
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
        levelUp()
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

let currentAnimation = "idle"
let animationCounter = 0;

function animatePlayer(){
    let spriteX = parseFloat(spriteImg.style.right);
    let spriteY = parseFloat(spriteImg.style.top);

    animationCounter++;

    if(animationCounter == 3){
        animationCounter = 0;
    }

    if(playerMoves){
        if(currentAnimation == "idle"){
            currentAnimation = "walk"
            spriteY = 0
        }
        spriteImg.src = './img/walk.png'
        spriteImg.style.height = '348px'

        if(spriteNumber < 3){
            spriteNumber++
            spriteX += 46.0;
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
    else if(animationCounter == 0){
        //ENEMIES[i].direction = 'left';
        spriteImg.src = './img/idle.png'
        spriteImg.style.height = '55px'
        spriteImg.style.top = "0px";

        if(spriteNumber < 9){
            spriteNumber++
            spriteX += 46.0;
            spriteImg.style.right = spriteX + "px";
        }
        else{
            spriteNumber = 0;
            spriteImg.style.right = "0px";
        }
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

function startTimer() {
    setInterval(() => {
        time++;
        let mins = Math.floor(time / 60);
        let secs = time % 60;
        let secStr;
        if(secs < 10) {
            secStr = '0' + secs;
        } else {
            secStr = secs;
        }
        document.getElementById('time').innerHTML = mins + ':' + secStr;

        
    if(time % 5 == 0 && time != 0){
        generateEnemy()
    }
    else if(time % 5 == 1 && time != 1){
        ENEMIES[ENEMIES.length-1].box.style.opacity = '1'
    }
    }, 1000);
}