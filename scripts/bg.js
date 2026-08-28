function get_random_int(min, max) {
    const min_ceiled = Math.ceil(min);
    const max_floored = Math.floor(max);
    return Math.floor(Math.random() * (max_floored - min_ceiled) + min_ceiled);
}

function bg_spawn_window(x, y, w, h) {
    let bg = document.querySelector("#background");
    let card = document.createElement("div");
    let close_button = document.createElement("span");
    // <span class="ui close-button">[ x ]</span>
    close_button.classList.add('ui', 'close-button');
    close_button.innerHTML = `[ x ]`
    card.classList.add('card', 'animated');
    card.style = `left: ${x}; top: ${y}; width: ${w}; height: ${h};`;
    card.appendChild(close_button)
    bg.appendChild(card);
}

for (let i = 0; i < 25; i++) {
    let w = get_random_int(200, 350);
    let h = get_random_int(200, 350);
    let x = get_random_int(3, window.innerWidth - w - 3);
    let y = get_random_int(3, window.innerHeight - h - 50);
    bg_spawn_window(`${x}px`, `${y}px`, `${w}px`, `${h}px`);
}
