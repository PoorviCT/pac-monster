/** @typedef {'X' | 'O' | null} Cell */

/** @returns {Cell[]} */
export function createBoard() {
  return Array(9).fill(null);
}

/**
 * @param {Cell[]} board
 * @param {number} index
 * @param {'X' | 'O'} activeMark
 * @returns {Cell[]}
 */
export function placeMark(board, index, activeMark) {
  if (!Number.isInteger(index) || index < 0 || index >= board.length || board[index] !== null) {
    return board;
  }
  return board.map((cell, cellIndex) => cellIndex === index ? activeMark : cell);
}
