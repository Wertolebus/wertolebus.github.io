const card_div = document.querySelectorAll(".card")
const gradient_div = document.querySelectorAll(".gradient")

document.addEventListener('mousemove', function(e) {
    card_div.forEach((_) => {
        gradient_div.forEach((div) => {
            let x = e.clientX - div.getBoundingClientRect().left
            let y = e.clientY - div.getBoundingClientRect().top
            div.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(145,145,145,.3) 0%, rgba(70,70,70,.1) 30%, rgba(0,0,0,0) 50%)`        
        })        
    })

    
})
