const COLS = 10;
const ROWS = 20;
const BLOCK_SIZE = 30;

const KEY = {
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    P: 80,
    Q: 81
};
//The const can be a bit misleading when working with objects and arrays and does not actually make them immutable. 
Object.freeze(KEY);

//const p = this.moves[event.key](this.piece);

