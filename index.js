const Gameboard = (function () {
    function createBoard(rows, colums) {
        const board = new Array(rows);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(colums).fill(null);
        }
        return board;
    }
    winCondition = function (sign) {
        function linearStreak(sign) {
            for (let i = 0; i < 3; i++) {
                let rowStreak = true;
                let columnStreak = true;
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
        function offDiagonalStreak(sign) {
            return (
                gameboard[0][2] === sign &&
                gameboard[1][1] === sign &&
                gameboard[2][0] === sign
            );
        }
        return (
            linearStreak(sign) ||
            diagonalStreak(sign) ||
            offDiagonalStreak(sign)
        );
    };
    const gameboard = createBoard(3, 3);
    const getBoard = () => gameboard;
    return { getBoard, winCondition };
})();

const gameContoller = (function () {
    const board = Gameboard.getBoard();
    const blueScore = document.querySelector("left .player-score");
    const redScore = document.querySelector("right .player-score");
    const boxes = Array.from(document.querySelectorAll(".board > div"));
    const cross = "X";
    const circle = "O";
    const red = new player("Red", cross);
    const blue = new player("Blue", circle);
    let row_num, col_num, coordinates;
    for (let box of boxes) {
        box.addEventListener("click", (e) => {
            coordinates = e.target.id;
            coordinates_array = coordinates.split(",");
            row_num = coordinates_array[0];
            col_num = coordinates_array[1];
        });
    }

    function player(name, sign) {
        this.name = name;
        this.sign = sign;
        this.score = 0;
        this.updateScore = function () {
            this.score++;
        };
    }

    function game() {
        let turn = Math.floor(Math.random() * 2);
        let count = 0;
    }
    game();
})();

// turn == 1 signals red and turn == 0 signals blue
/* Later on add a mechanism here to check who lost the previous match and give them the first turn 
           in the next round by changing the value of turn
        */
