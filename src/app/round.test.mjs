import assert from 'node:assert/strict';
import test from 'node:test';
import { createRound, playMove } from './round.mjs';

test('X starts with nine empty cells', () => {
  assert.equal(createRound().activeMark, 'X');
  assert.deepEqual(createRound().board, Array(9).fill(null));
});

test('legal moves alternate active mark X to O to X', () => {
  const first = playMove(createRound(), 0);
  assert.equal(first.board[0], 'X');
  assert.equal(first.activeMark, 'O');
  const second = playMove(first, 1);
  assert.equal(second.board[1], 'O');
  assert.equal(second.activeMark, 'X');
});

test('occupied cell selection leaves active mark unchanged', () => {
  const first = playMove(createRound(), 0);
  assert.strictEqual(playMove(first, 0), first);
});
