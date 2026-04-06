let settings = document.getElementById('settingsOverlay');

function loadSettings(){
    if(settings.style.display == 'flex'){
        settings.style.display = 'none';
    }
    else{
        settings.style.display = 'flex';
    }
}

let bgmusicBox = document.querySelectorAll('#musicBox img')[0]
let audioBox = document.querySelectorAll('#audioBox img')[0]

function bgmusic(){
    if(bgmusicBox.style.opacity == '0'){
        bgmusicBox.style.opacity = '1'
    }
    else{
        bgmusicBox.style.display = '0'
    }
}

function audio(){
    if(audioBox.style.opacity == '0'){
        audioBox.style.display = '1'
    }
    else{
        audioBox.style.display = '0'
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