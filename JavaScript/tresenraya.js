const board = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];

const printBoard = () => {
    alert(board[0] + "|" + board[1] + "|" + board[2] + "\n" + board[3] + "|" + board[4] + "|" + board[5] + "\n" + board[6] + "|" + board[7] + "|" + board[8]);
}


const evaluateWin = () => {
    if (board[0] === board[1] && board[0] === board[2] && board[0] != '_') {
        return true;
    } else if (board[3] === board[4] && board[3] === board[5] && board[3] != '_') {
        return true;
    } else if (board[6] === board[7] && board[7] === board[8] && board[6] != '_') {
        return true;
    } else if (board[0] === board[3] && board[0] === board[6] && board[0] != '_') {
        return true;
    } else if (board[1] === board[4] && board[1] === board[7] && board[1] != '_') {
        return true;
    } else if (board[2] === board[5] && board[2] === board[8] && board[2] != '_') {
        return true;
    } else if (board[0] === board[4] && board[0] === board[8] && board[0] != '_') {
        return true;
    } else if (board[2] === board[4] && board[2] === board[7] && board[2] != '_') {
        return true;
    }
    return false;
}



printBoard();


let isPlayer1 = true;
const hasAnyBodyWon = false;

while (!hasAnyBodyWon) {
    const n = prompt('Introduce un numero del 0 al 8');
    const player = isPlayer1 ? 'X' : 'O';
    board[n] = player;

    if (evaluateWin()) {
        alert('Enhorabuena player' + player)
    }

    isPlayer1 = !isPlayer1;
    printBoard();
}



