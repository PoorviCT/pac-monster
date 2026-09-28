import assert from 'node:assert/strict';
import test from 'node:test';
import { createBoard, selectCell } from './board-state.mjs';

test('a new board contains exactly nine empty cells', () => {
  assert.deepEqual(createBoard(), Array(9).fill(null));
});

test('selecting a cell updates only that cell immediately', () => {
  const original = createBoard();
  const updated = selectCell(original, 4, 'X');
  assert.equal(updated[4], 'X');
  assert.equal(updated.filter(Boolean).length, 1);
  assert.equal(original[4], null);
});

test('board state supports O as well as X', () => {
  const updated = selectCell(createBoard(), 0, 'O');
  assert.equal(updated[0], 'O');
});
