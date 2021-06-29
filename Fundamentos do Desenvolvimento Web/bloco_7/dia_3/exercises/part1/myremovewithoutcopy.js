const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

let lista = [1, 2, 3, 4]
assert.deepStrictEqual(myRemoveWithoutCopy(lista, 3), lista)
assert.notDeepStrictEqual(myRemoveWithoutCopy(lista, 3), [1, 2, 3, 4])
assert.notDeepStrictEqual(myRemoveWithoutCopy(lista), [1, 2, 3, 4])
assert.notDeepStrictEqual(myRemoveWithoutCopy(lista, 5), [1, 2, 3, 4])
