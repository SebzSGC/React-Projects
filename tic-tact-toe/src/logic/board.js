export const checkWinner = (board) => {
  for (let combo = 0; combo < board.length; combo++) {
    //verificar horizontalmente
    if (
      board[combo * 3] !== null &&
      board[combo * 3] === board[combo * 3 + 1] &&
      board[combo * 3 + 1] === board[combo * 3 + 2]
    ) {
      return board[combo * 3];
    }
    //verificarverticalmente
    if (
      board[combo] !== null &&
      board[combo] === board[combo + 3] &&
      board[combo + 3] === board[combo + 6]
    ) {
      return board[combo];
    }
    // Verificar diagonales
    if (board[0] !== null && board[0] === board[4] && board[4] === board[8]) {
      return board[0];
    }
    if (board[2] !== null && board[2] === board[4] && board[4] === board[6]) {
      return board[2];
    }
  }
  // Si no hay ganador
  return null;
};

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null);
};
