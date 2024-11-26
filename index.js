const Gameboard = (function () {
    function createBoard(rows, colums) {
        const board = new Array(rows);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(colums).fill(null);
        }
        return board;
    }
    const gameboard = createBoard(3, 3);
    const cross = "X";
    const circle = "O";
})();

function player(name, sign) {
    this.name = name;
    this.sign = sign;
}
