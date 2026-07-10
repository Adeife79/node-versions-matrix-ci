const test = require('node:test');
const assert = require('node:assert');
const { add, isEven, reverseString } = require('./index');

test('add() sums two numbers', () => {
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(-1, 1), 0);
});

test('isEven() detects even numbers', () => {
  assert.strictEqual(isEven(4), true);
  assert.strictEqual(isEven(7), false);
});

test('reverseString() reverses a string', () => {
  assert.strictEqual(reverseString('hello'), 'olleh');
  assert.strictEqual(reverseString(''), '');
});

test('platform sanity check', () => {
  console.log(`Running on: ${process.platform}, Node: ${process.version}`);
  assert.ok(true);
});
