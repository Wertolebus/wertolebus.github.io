const tooltip = document.querySelector('#tooltip')
const span = document.querySelector('#tooltip-span')

document.addEventListener('mousemove', function(e) {
    const _x = e.clientX    
    const _y = e.clientY
    const offset_x = 15
    const offset_y = 15
    const x = _x+offset_x
    const y = _y+offset_y
    span.textContent = e.target.id.replace('_', ' ')
    tooltip.style.opacity = 0

    if (e.target.className.baseVal != null){
        if (e.target.className.baseVal.includes('country')) {
            tooltip.style.opacity = 1
            tooltip.style.left = `${x}px`
            tooltip.style.top = `${y}px`
        }
    }
})