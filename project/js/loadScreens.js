let settings = document.getElementById('settingsOverlay');

function loadSettings(){
    if(settings.style.display == 'flex'){
        settings.style.display = 'none';
    }
    else{
        settings.style.display = 'flex';
    }
}

let bgmusicEnabled = true
let audioEnabled = true

function bgmusic(image){
    bgmusicEnabled = !bgmusicEnabled

    if(image.style.opacity == 1){
        image.style.opacity = 0
    }
    else{
        image.style.opacity = 1
    }
}

function audio(image){
    audioEnabled = !audioEnabled

    if(image.style.opacity == 1){
        image.style.opacity = 0
    }
    else{
        image.style.opacity = 1
    }
}

function backToMenu(){
    document.getElementById('levelSelection').style.display = 'none'
    document.getElementById('startscreen').style.display = 'block'
}

function loadLevelSelection(){
    document.getElementById('levelSelection').style.display = 'block'
    document.getElementById('startscreen').style.display = 'none'
}

function die(){
    document.getElementById('gamescreen').style.display = 'none'
    document.getElementById('gameover').style.display = 'block'
}

function startLevel(element){
    document.getElementById('gamescreen').style.display = 'block'
    document.getElementById('gamescreen').style.scaleX = DISPLAY_WIDTH / 1440

    if(localStorage.getItem('recordTime') != null){
        document.getElementById('record').innerHTML = `Record: ${localStorage.getItem('recordTime')} seconds`
    }

    Howler.mute(!audioEnabled)
    document.getElementById(element).style.display = 'none'
    startTimer()
    gameLoop()
}

function loadMenu(element){
    document.getElementById(element).style.display = 'none'
    document.getElementById('startscreen').style.display = 'block'
}

function levelUp(){
    document.getElementById('gamescreen').style.display = 'none'
    document.getElementById('levelUp').style.display = 'block'

    if(localStorage.getItem('recordTime') == null || time < localStorage.getItem('recordTime')){
        localStorage.setItem('recordTime',time)

        document.querySelector('#levelUp h1').innerHTML += 'New Record!'
    }
}

function loadHearts(amount){
    let html = ''

    for(let i = 0; i < amount; i++){
        html += '<img src="./img/heart.png" alt="heart" class="heart">'
    }

    document.getElementById('hearts').innerHTML = html;
}