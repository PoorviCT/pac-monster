export type Cell = 'X' | 'O' | null;
export function createBoard(): Cell[];
export function selectCell(board: Cell[], index: number, mark: 'X' | 'O'): Cell[];
