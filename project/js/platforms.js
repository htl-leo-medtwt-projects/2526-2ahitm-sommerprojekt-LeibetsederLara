generatePlatforms()

function generatePlatforms(){
    for(let i = 0; i < PLATFORMS.length; i++){
        let amountOfGrass = PLATFORMS[i].width / 50

        for(let j = 0; j < amountOfGrass; j++){
            PLATFORMS[i].box.innerHTML += '<img src="./img/grass.png" alt="grass" class="grass"></img>'
        }
    }
}