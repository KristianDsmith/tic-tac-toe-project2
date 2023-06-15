
    // These variables provide elements for the game logic and keeping score. 

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;
let player1Score = 0;
let player2Score = 0;

// makeMove function racks updating game board, checking for winsor draws and managing game state based on moves made. 

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

// checkWin function checks possible wining cmbinations and which player has won the game. 

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

// endGame function handles the game ending logic. displaying alert for a win or draw. 
// reseting the board for a new game. 

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

// Resets the game board, current player and game state. 

function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;
  Array.from(document.getElementsByClassName("cell")).forEach((cell) => {
    cell.innerHTML = "";
    cell.classList.remove("X", "O");
  });
}

// Apply's player colours to the lemenets with classes playerone and playertwo.

document.documentElement.style.setProperty(
  "--player1-color",
  "rgb(0, 119, 255)"
);
document.documentElement.style.setProperty(
  "--player2-color",
  "rgb(199, 16, 245)"
);



