let settings = document.getElementById('settingsOverlay');

function loadSettings(){
    if(settings.style.display == 'flex'){
        settings.style.display = 'none';
    }
    else{
        settings.style.display = 'flex';
    }
}

let bgmusicEnabled = false
let audioEnabled = false

function bgmusic(image){
    bgmusicEnabled != bgmusicEnabled

    if(image.style.opacity == 1){
        image.style.opacity = 0
    }
    else{
        image.style.opacity = 1
    }
}

function audio(image){
    audioEnabled != audioEnabled

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
    document.getElementById(element).style.display = 'none'
}

function loadMenu(element){
    document.getElementById(element).style.display = 'none'
    document.getElementById('startscreen').style.display = 'block'
}

function levelUp(){
    document.getElementById('gamescreen').style.display = 'none'
    document.getElementById('levelUp').style.display = 'block'
}