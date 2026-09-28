"use client";

import { useState } from "react";
import { createBoard, selectCell } from "./board-state.mjs";
import type { Cell } from "./board-state.mjs";

export default function Home() {
  const [board, setBoard] = useState(createBoard);

  return (
    <main className="game-shell">
      <section className="game-card" aria-labelledby="game-title">
        <p className="eyebrow">A little game of</p>
        <h1 id="game-title">Tic Tac Toe</h1>
        <p className="intro">Choose a square to start your board.</p>
        <div className="board" role="group" aria-label="Tic-tac-toe board">
          {board.map((cell: Cell, index: number) => (
            <button
              className="cell"
              type="button"
              key={index}
              aria-label={`Row ${Math.floor(index / 3) + 1}, column ${index % 3 + 1}${cell ? `, ${cell}` : ', empty'}`}
              onClick={() => setBoard((current: Cell[]) => selectCell(current, index, "X"))}
            >
              {cell}
            </button>
          ))}
        </div>
        <p className="hint">Board preview · X starts each round</p>
      </section>
    </main>
  );
}
