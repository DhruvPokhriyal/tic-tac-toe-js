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
    const cross = "X";
    const circle = "O";
    const red = new player("Red", cross);
    const blue = new player("Blue", circle);

    function player(name, sign) {
        this.name = name;
        this.sign = sign;
        this.score = 0;
        this.updateScore = function () {
            this.score++;
        };
    }

    function makeMove(player) {
        let row = prompt("Enter row :");
        let column = prompt("Enter column :");
        let board = Gameboard.getBoard();
        while (board[row - 1][column - 1] != null && row <= 3 && column <= 3) {
            if (row > 3 || column > 3) {
                alert("Invalid Input");
            } else {
                alert("Box already filled\nFill Another One");
            }
            row = prompt("Enter row :");
            column = prompt("Enter column :");
        }
        board[row - 1][column - 1] = player.sign;
    }

    function game() {
        let turn = Math.floor(Math.random() * 2); // turn == 1 signals red and turn == 0 signals blue
        /* Later on add a mechanism here to check who lost the previous match and give them the first turn 
           in the next round by changing the value of turn
        */
        let count = 0;
        while (
            (Gameboard.winCondition(cross) == false) &
            (Gameboard.winCondition(circle) == false) &
            (count < 9)
        ) {
            if (turn) {
                //red
                alert("Red's Turn");
                makeMove(red);
            } else {
                //blue
                alert("Blue's Turn");
                makeMove(blue);
            }
            turn = !turn;
            count++;
        }
        if (Gameboard.winCondition(cross)) {
            alert("Red Wins");
        } else if (Gameboard.winCondition(circle)) {
            alert("Blue Wins");
        } else {
            alert("Draw");
        }
    }
    let choice = prompt("Start (YES):");
    if (choice == "YES") game();
})();
