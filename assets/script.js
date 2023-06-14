let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;
let player1Score = 0;
let player2Score = 0;

function makeMove(index) {
  if (board[index] === "" && !gameOver) {
    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerHTML = currentPlayer;
    document.getElementsByClassName("cell")[index].classList.add(currentPlayer);
    if (checkWin(currentPlayer)) {
      endGame(currentPlayer);
    } else if (board.indexOf("") === -1) {
      endGame("draw");
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin(player) {
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winCombos.some((combo) => {
    return combo.every((index) => {
      return board[index] === player;
    });
  });
}

function endGame(winner) {
  gameOver = true;
  if (winner === "draw") {
    alert("It's a draw!");
  } else {
    alert(`Player ${winner} wins!`);
    if (winner === "X") {
      player1Score++;
      document.getElementById(
        "player1"
      ).innerHTML = `Player 1: ${player1Score}`;
    } else {
      player2Score++;
      document.getElementById(
        "player2"
      ).innerHTML = `Player 2: ${player2Score}`;
    }
  }
  resetBoard();
}

function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;
  Array.from(document.getElementsByClassName("cell")).forEach((cell) => {
    cell.innerHTML = "";
    cell.classList.remove("X", "O");
  });
}

document.documentElement.style.setProperty(
  "--player1-color",
  "rgb(133, 232, 232)"
);
document.documentElement.style.setProperty(
  "--player2-color",
  "rgb(191, 126, 207)"
);
