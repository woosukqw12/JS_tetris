class Board { 
    grid;

    reset() {
        this.grid = this.getEmptyBoard();
    }


    //get matrix filled of 0s.
    getEmptyBoard() {
        return Array.from(
            {length: ROWS}, () => Array(COLS).fill(0)
        );
    }
}
