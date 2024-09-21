let board = document.querySelector("#board")
let d = board.getContext("2d")

let pixW = 1
let pixH = 1
let boardW = board.width
let boardH = board.height
let data = Array.from(Array(Math.round(boardH)).fill(0), () => new Array(Math.round(boardW)).fill(0))

let _mousestate = -1
const _FPS_DIVIDE = 1800
let FPS = 60

function redraw() {
    d.clearRect(0, 0, boardW, boardH)
    for(let y = 0; y < data.length-1;++y){
        for(let x = 0; x < data[y].length;++x){
            if (data[y][x]) {
                d.beginPath()
                d.rect(x, y, pixW, pixH)
                d.fillStyle = "#5555557f"
                d.fill()
            }
        }
    }
}

function updatePhysics(){
    redraw()

    for(let y = data.length - 3; y >= 0; --y) {
        for(let x = 0; x < data[y].length; ++x) {
            if(data[y][x] == 1) {
                if (y < data.length) {
                    if (data[y+1][x] == 1 && data[y+1][x+1] == 0) {
                        data[y][x] = 0
                        data[y+1][x+1] = 1
                    }
                    else if (data[y+1][x] == 1 && data[y+1][x-1] == 0){
                        data[y][x] = 0
                        data[y+1][x-1] = 1
                    }
                }
                
                if(data[y+1][x] == 0) {
                    data[y][x] = 0
                    data[y+1][x] = 1
                }
            }
        }
    }
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect(), // abs. size of element
      scaleX = canvas.width / rect.width,    // relationship bitmap vs. element for x
      scaleY = canvas.height / rect.height;  // relationship bitmap vs. element for y
  
    return {
      x: Math.floor(((evt.clientX - rect.left) * scaleX/pixW)),   // scale mouse coordinates after they have
      y: Math.floor(((evt.clientY - rect.top) * scaleY/pixH))  // been adjusted to be relative to element
    }
}


board.addEventListener('mousedown', (e) => {
    e.button == 0 || e.button == 2 ? _mousestate = e.button : _mousestate = -1
})

document.addEventListener('mouseup', () => { _mousestate = -1 })

board.addEventListener('mousemove', function(e) {
    if (_mousestate == 0) {
        let pos = getMousePos(board, e)
        if (pos.x >= 0 && pos.x < data[pos.y].length)
            data[pos.y][pos.x] = 1
    }else if (_mousestate == 2) {
        let pos = getMousePos(board, e)
        if (pos.x >= 0 && pos.x < data[pos.y].length)
            data[pos.y][pos.x] = 0
    }
})


// let physics = setInterval(function() {
    // updatePhysics()
// }, _FPS_DIVIDE/FPS)

function save_settings() {
    FPS = document.querySelector("#fps-input").value
}

function hide_settings() {
    document.querySelector("#settings").style.opacity = 0
    document.querySelector("#settings-panel-button").style.opacity = 1
}

function show_settings() {
    document.querySelector("#settings").style.opacity = 1
    document.querySelector("#settings-panel-button").style.opacity = 0
}

let physics
function repeat(){
    updatePhysics()
    physics = setTimeout(repeat, _FPS_DIVIDE/FPS)
}

repeat()