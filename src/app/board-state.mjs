/** @typedef {'X' | 'O' | null} Cell */

/** @returns {Cell[]} */
export function createBoard() {
  return Array(9).fill(null);
}

/**
 * @param {Cell[]} board
 * @param {number} index
 * @param {'X' | 'O'} mark
 * @returns {Cell[]}
 */
export function selectCell(board, index, mark) {
  return board.map((cell, cellIndex) => cellIndex === index ? mark : cell);
}
