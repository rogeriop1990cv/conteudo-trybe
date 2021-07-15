const { myRemoveWithoutCopy } = require('./unitestexercices')

describe(`A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array 
sem o elemento item caso ele exista no array `, () => {

  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 2)).toEqual([1, 3, 4]);
  })

  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 2)).not.toEqual([1, 2, 3, 4]);
  })

  it('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    const array = [1, 2, 3, 4];
    myRemoveWithoutCopy(array, 1)
    expect(array).toEqual([2, 3, 4]);
  })

  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    const array = [1, 2, 3, 4];
    expect(myRemoveWithoutCopy(array, 3)).toEqual([1, 2, 4])
  })
});
