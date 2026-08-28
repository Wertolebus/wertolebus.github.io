function change_theme(theme) {
    document.body.classList = theme;
    let buttons = document.querySelectorAll('.select-theme');
    for (let i = 0; i < buttons.length; i++) {
        if (document.body.classList.contains(buttons[i].innerHTML)) buttons[i].style.textDecoration = "underline";
        else buttons[i].style.textDecoration = 'none';
    }
}

change_theme('monokai') // currently default cuz i like it
