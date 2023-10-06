const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
const canvasNext = document.getElementById('next');
const ctxNext = canvasNext.getContext('2d');

//using constant, calcul the size of canvas
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

//resize blocksize
//scale을 쓰면 매번 BLOCK_SIZE로 계산할 필요 없이 블록의 크기를 1로 취급 가능
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);


let accountValues = {
  score: 0,
  level: 0,
  lines: 0
};

const moves = {
    [KEY.LEFT]: p => ({ ...p, x: p.x - 1}),
    [KEY.RIGHT]: p => ({ ...p, x: p.x + 1}),
    [KEY.DOWN]: p => ({ ...p, y: p.y + 1})
};


let board = new Board(ctx, ctxNext);

function play() {
    board.reset();
    
    let piece = new Piece(ctx);
    piece.draw();

    board.piece = piece;
} 

document.addEventListener('keydown', event => {
    if (moves[event.keyCode]) {  
        event.preventDefault();
    
        let p = moves[event.keyCode](board.piece);
    
        if (board.valid(p)) {    
            board.piece.move(p);
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
            board.piece.draw();
        }
    }
});

