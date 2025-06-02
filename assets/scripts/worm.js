let worm = document.querySelector("#worm");
let centerX = screen.width / 2;

function get_mouse_pos(ev) {
    let x = ev.clientX;
    let y = ev.clientY;

    if (x >= centerX) {
        document.querySelector("#worm-container").style.transform = "scaleX(-1)";
    } else {
        document.querySelector("#worm-container").style.transform = "scaleX(1)";
    }
    rotate(y)
}

function rotate(y) {
    let rotation = (y / window.innerHeight - 0.5) * 90;
    worm.style.transform = `rotate(${-rotation}deg)`;
}
