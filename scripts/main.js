function get_random_int(min, max) {
    const min_ceiled = Math.ceil(min);
    const max_floored = Math.floor(max);
    return Math.floor(Math.random() * (max_floored - min_ceiled) + min_ceiled);
}

function refresh_isaac_card() {
    let card = get_random_int(0, 21)
    const card_names = {
        0: "0 - The Fool", 1: "I - The Magician", 2: "II - The High Priestess", 3: "III - The Empress",
        4: "IV - The Emperor", 5: "V - The Hierophant", 6: "VI - The Lovers", 7: "VII - The Chariot",
        8: "VIII - Justice", 9: "IX - The Hermit", 10: "X - Wheel of Fortune", 11: "XI - Strength",
        12: "XII - The Hanged Man", 13: "XIII - Death", 14: "XIV - Temperance", 15: "XV - The Devil", 
        16: "XVI - The Tower", 17: "XVII - The Stars", 18: "XVIII - The Moon", 19: "XIX - The Sun",
        20: "XX - Judgement", 21: "XXI - The World"
    }
    document.querySelector('.taro-title').innerHTML = `[ ${card_names[card]} ]`
    document.querySelector('#taro > img').src = `/assets/tboi/${card}.png`
}

refresh_isaac_card()
