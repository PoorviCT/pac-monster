export type Cell = 'X' | 'O' | null;
export type Round = { board: Cell[]; activeMark: 'X' | 'O' };
export function createRound(): Round;
export function playMove(round: Round, index: number): Round;
