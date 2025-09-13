const today = new Date().getDay()

let school_gif = './assets/images/school.gif'
let weekend_gif = './assets/images/weekend.gif'
let path = ''

if (today >= 1 && today <= 5) {
    path = school_gif
} else {
    path = weekend_gif
}

let img_el = document.createElement('img')
img_el.setAttribute('class', 'img')
img_el.setAttribute('src', path)

document.querySelector('#img-container').appendChild(img_el)