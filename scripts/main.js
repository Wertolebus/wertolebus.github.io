let toggled = true;

let worm = document.querySelector("#cherw");
let avatar = document.querySelector("#avatar");
let changelog = document.querySelector("#changelog");

worm.setAttribute('draggable', false)
avatar.setAttribute('draggable', false)
toggle()
close_changelog()

function handle_worm(ev) {
    let centerX = document.body.clientWidth / 2;
    let x = ev.clientX;
    let y = ev.clientY;

    if (x >= centerX) {
        document.querySelector("#cherw-container").style.transform = "scaleX(-1)";
    } else {
        document.querySelector("#cherw-container").style.transform = "scaleX(1)";
    }
    let rotation = (y / window.innerHeight - 0.5) * 90;
    worm.style.transform = `rotate(${-rotation}deg)`;
}

function get_mouse_pos(ev) {
    handle_worm(ev);
}

function meep_merp() {
    let meep_merp = new Audio("/assets/MEEP MERP.mp3");
    meep_merp.play(); 
}

function toggle() {
    toggled = !toggled;
    if (toggled) {
        document.querySelector("#cherw-container").style.display = 'flex';
        avatar.style.display = 'none';
    }
    else {
        document.querySelector("#cherw-container").style.display = 'none';
        avatar.style.display = 'block';
    }
}

function show_changelog() {
    changelog.style.display = 'block';
}

function close_changelog() {
    changelog.style.display = 'none';
}