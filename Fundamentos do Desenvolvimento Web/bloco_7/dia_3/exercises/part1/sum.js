const assert = require('assert');
const { EROFS } = require('constants');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);

// https://www.geeksforgeeks.org/nodejs-assert-throws-function/
assert.throws(() => {sum(4, '1')});
assert.throws(() => {sum(4, '1')}, /^Error: parameters must be numbers$/ );
