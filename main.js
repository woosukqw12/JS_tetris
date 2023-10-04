const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

//using constant, calcul the size of canvas
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

//resize blocksize
//scale을 쓰면 매번 BLOCK_SIZE로 계산할 필요 없이 블록의 크기를 1로 취급 가능
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);


let board = new Board();

function play() {
    board.reset();
    
    let piece = new Piece(ctx);
    piece.draw();

    board.piece = piece;
} 
