const { getUserName } = require('./dados')

describe('Testa a função getUserName', () => {
  it('Testa se o usuario é encontrado.', () => {
    expect.assertions(1)
    return getUserName(4).then(id => {
      expect(id).toEqual('Mark')
    })
  })

  it('Testa se o usuario não é encontrado.', () => {
    return getUserName(10).catch(valor => {
      expect(valor).toEqual({ error: 'User with ' + 10 + ' not found.' })
    })
  })
})
