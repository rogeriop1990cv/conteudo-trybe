const { obj2, obj3, obj1 } = require('./unitestexercices');

describe('Compare dois objetos para verificar se são idênticos ou não ', () => {
  it('Objeto 1 for igual Objeto 2', () => {
    expect(obj1).toEqual(obj2);
  })

  it('Objeto 3 for igual Objeto 2', () => {
    expect(obj3).not.toEqual(obj2);
  })

  it('Objeto 1 for igual Objeto 3', () => {
    expect(obj1).not.toEqual(obj3);
  })

})
