export type Cell = 'X' | 'O' | null;
export function createBoard(): Cell[];
export function placeMark(board: Cell[], index: number, activeMark: 'X' | 'O'): Cell[];
