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

function moveEnemy() {
    for (let i = 0; i < ENEMIES.length; i++) {
        if (ENEMIES[i].x <= 30) {
            ENEMIES[i].direction = 'right';
            ENEMIES[i].box.style.transform = 'scaleX(-1)';
        } else if (ENEMIES[i].x >= DISPLAY_WIDTH - 100) {
            ENEMIES[i].direction = 'left';
            ENEMIES[i].box.style.transform = 'scaleX(1)';
        }

        if (ENEMIES[i].direction === 'right') {
            ENEMIES[i].x += (GAME_CONFIG.characterSpeed - 2);
        } else {
            ENEMIES[i].x -= (GAME_CONFIG.characterSpeed - 2);
        }

        ENEMIES[i].box.style.left = ENEMIES[i].x + "px";
    }
}