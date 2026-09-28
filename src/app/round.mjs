/** @typedef {'X' | 'O' | null} Cell */
/** @typedef {{ board: Cell[], activeMark: 'X' | 'O' }} Round */

/** @returns {Round} */
export function createRound() {
  return { board: Array(9).fill(null), activeMark: 'X' };
}

/** @param {Round} round @param {number} index @returns {Round} */
export function playMove(round, index) {
  if (!Number.isInteger(index) || index < 0 || index >= 9 || round.board[index] !== null) return round;
  return {
    board: round.board.map((cell, cellIndex) => cellIndex === index ? round.activeMark : cell),
    activeMark: round.activeMark === 'X' ? 'O' : 'X',
  };
}
