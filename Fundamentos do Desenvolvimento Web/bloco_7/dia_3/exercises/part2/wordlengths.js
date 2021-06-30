const assert = require('assert');
function wordLengths(listWord){
  const lengthsWord = []
  for(word of listWord){
    lengthsWord.push(word.length)
  }
  return lengthsWord
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
