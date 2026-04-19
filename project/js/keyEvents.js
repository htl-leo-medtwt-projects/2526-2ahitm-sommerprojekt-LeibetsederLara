let KEY_EVENTS = {
    leftArrow: false,
    rightArrow: false,
    upArrow: false,
    downArrow: false,
    jump: false
}
document.onkeydown = keyListenerDown;
document.onkeyup = keyListenerUp;

function keyListenerDown(e) {
    if (e.key === "a") { // Left arrow
        KEY_EVENTS.leftArrow = true;
    }
    if (e.key === "ArrowUp") { // Up arrow
        KEY_EVENTS.upArrow = true;
    }
    if (e.key === "d") { // Right arrow
        KEY_EVENTS.rightArrow = true;
    }
    if (e.key === "ArrowDown") { // Down arrow
        KEY_EVENTS.downArrow = true;
    }
    if (e.key === " "){
        KEY_EVENTS.jump = true
    }
}
function keyListenerUp(e) {
    if (e.key === "a") { // Left arrow
        KEY_EVENTS.leftArrow = false;
    }
    if (e.key === "ArrowUp") { // Up arrow
        KEY_EVENTS.upArrow = false;
    }
    if (e.key === "d") { // Right arrow
        KEY_EVENTS.rightArrow = false;
    }
    if (e.key === "ArrowDown") { // Down arrow
        KEY_EVENTS.downArrow = false;
    }
    if (e.key === " "){
        KEY_EVENTS.jump = false
    }
}