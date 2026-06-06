generatePlatforms()

function generatePlatforms(){
    for(let i = 0; i < PLATFORMS.length; i++){
        let amountOfGrass = PLATFORMS[i].width / 50

        for(let j = 0; j < amountOfGrass; j++){
            PLATFORMS[i].box.innerHTML += '<img src="./img/grass.png" alt="grass" class="grass"></img>'
        }
    }
}

function generateEnemy() {
    if(ENEMIES.length < 5){
        let random = null

        while(random == null || random.y == y){
            random = spawnPositions[Math.floor(Math.random() * spawnPositions.length)]
        }

        let container = document.getElementById('enemies')
        let div = document.createElement('div')
        div.className = 'enemy'

        let img = document.createElement('img')
        img.className = 'enemySprite'
        img.src = './img/Mushroom-Run.png'

        div.appendChild(img)
        container.appendChild(div)

        ENEMIES.push({
            box: div,
            x: random.x,
            y: random.y,
            sprite: img,
            isOnGround: true,
            vy: 0,
            tolerance: 50,
            direction: 'left'
        });

        div.id = ENEMIES.length;

        document.getElementById(ENEMIES.length).style.opacity = '0'
    }
}