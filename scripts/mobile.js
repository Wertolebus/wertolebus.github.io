function isMobile() {
    const minWidth = 768; // minimum width for desktop devices
    return window.innerWidth < minWidth || screen.width < minWidth;
}

if (isMobile()) {
    console.log("Mobile device detected");
} else {
    console.log("Desktop device detected");
}

if (isMobile()) {
    let cards = document.querySelectorAll('.card')
    cards.forEach((el) => {el.style.display = 'none'});
}
