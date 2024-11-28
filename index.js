const Gameboard = (function () {
    function createBoard(rows, colums) {
        const board = new Array(rows);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(colums).fill(null);
        }
        return board;
    }
    this.winnerCheck = function (player1, player2) {
        function linearStreak(sign) {
            let rowStreak = true;
            let columnStreak = true;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (gameboard[i][j] != sign) {
                        rowStreak = false;
                    }
                    if (gameboard[j][i] != sign) {
                        columnStreak = false;
                    }
                }
                if (rowStreak || columnStreak) return true;
            }
        }
        function diagonalStreak(sign) {
            let streak = true;
            for (let i = 0; i < 3; i++) {
                if (gameboard[i][i] != sign) {
                    streak = false;
                    return streak;
                }
            }
            return streak;
        }
        function offDiagonalSearch(sign) {
            return (
                gameboard[0][2] == sign && gameboard[1][1] && gameboard[2][0]
            );
        }
    };
    const gameboard = createBoard(3, 3);
    const cross = "X";
    const circle = "O";
})();

function player(name, sign) {
    this.name = name;
    this.sign = sign;
    this.score = 0;
    this.updateScore = function () {
        this.score++;
    };
}
