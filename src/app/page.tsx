"use client";

import { useState } from "react";
import { createRound, playMove } from "./round.mjs";
import type { Cell } from "./round.mjs";

export default function Home() {
  const [round, setRound] = useState(createRound);

  return (
    <main className="game-shell">
      <section className="game-card" aria-labelledby="game-title">
        <p className="eyebrow">A little game of</p>
        <h1 id="game-title">Tic Tac Toe</h1>
        <p className="intro">Choose a square to place your mark.</p>
        <div className="board" role="group" aria-label="Tic-tac-toe board">
          {round.board.map((cell: Cell, index: number) => (
            <button
              className="cell"
              type="button"
              key={index}
              aria-label={`Row ${Math.floor(index / 3) + 1}, column ${index % 3 + 1}${cell ? `, ${cell}` : ", empty"}`}
              onClick={() => setRound((current) => playMove(current, index))}
            >
              {cell}
            </button>
          ))}
        </div>
        <p className="hint">X starts · marks alternate after each move</p>
      </section>
    </main>
  );
}
