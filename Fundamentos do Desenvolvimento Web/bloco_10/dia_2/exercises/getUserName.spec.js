const { getUserName } = require('./dados')

describe('Testa a função getUserName', () => {
  it('Testa se o usuario é encontrado.', async () => {
    const valor = await getUserName(4)
      expect(valor).toEqual('Mark');
  })

  it('Testa se o usuario não é encontrado.', async () => {
    expect.assertions(1);
    const id = 40;
    try{
      await getUserName(id)
    } catch (e) {
      expect(e).toEqual({error: `User with ${id} not found.`})
    }
  })
})
