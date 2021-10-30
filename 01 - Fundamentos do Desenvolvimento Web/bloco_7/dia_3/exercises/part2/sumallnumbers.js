const assert = require('assert');

function sumAllNumbers(listNumber) {
  let total = 0;
  for (num of listNumber) {
    total += num
  };
  return total;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
