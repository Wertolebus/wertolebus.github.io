let toggled = true;


let worm = document.querySelector("#cherw");
let avatar = document.querySelector("#avatar");

worm.setAttribute('draggable', false)
avatar.setAttribute('draggable', false)
toggle()

function get_mouse_pos(ev) {
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