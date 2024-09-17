let board = document.querySelector("#board")
let d = board.getContext("2d")

let pixW = 1
let pixH = 1
let boardW = board.width
let boardH = board.height
let data = Array.from(Array(Math.round(boardH)).fill(0), () => new Array(Math.round(boardW)).fill(0))

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
        for(let x = 1; x < data[y].length - 1; ++x) {
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

board.addEventListener('click', function(e) {
    let pos = getMousePos(board, e)
    if (pos.x > 0 && pos.x < data[pos.y].length - 1) {
        data[pos.y][pos.x] = 1
    }
})


board.addEventListener('contextmenu', function(e) {
    let pos = getMousePos(board, e)
    if (pos.x > 0 && pos.x < data[pos.y].length - 1) {
        data[pos.y][pos.x] = 0
    }
})

const interval = setInterval(function() {
    updatePhysics()
}, 30)