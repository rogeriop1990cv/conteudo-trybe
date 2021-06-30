const assert = require('assert');

function addOne(list){
  const newlist = []
  for(num of list){
    newlist.push(num += 1);
  };
  return newlist
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
