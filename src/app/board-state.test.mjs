import assert from 'node:assert/strict';
import test from 'node:test';
import { createBoard, placeMark } from './board-state.mjs';

test('new board has nine empty cells', () => {
  assert.deepEqual(createBoard(), Array(9).fill(null));
});

test('places active X in only the selected empty cell', () => {
  const original = createBoard();
  const updated = placeMark(original, 4, 'X');
  assert.equal(updated[4], 'X');
  assert.equal(updated.filter(Boolean).length, 1);
  assert.equal(original[4], null);
});

test('places active O in a selected empty cell', () => {
  assert.equal(placeMark(createBoard(), 2, 'O')[2], 'O');
});

test('does not replace an occupied cell', () => {
  const board = placeMark(createBoard(), 0, 'X');
  assert.deepEqual(placeMark(board, 0, 'O'), board);
});
