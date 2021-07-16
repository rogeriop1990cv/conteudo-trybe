const uppercase = require('./uppercase')

describe('Testa se a função converte o texto do parametro para UpperCase.', () => {
  it('Parametro é "nada a perde" tem que retorna "NADA A PERDE"', (done) => {
    const textTest = "nada a perde";
    uppercase(textTest, (result) => {
      expect(result).toMatch('NADA A PERDE');
      done()
    })
  })
})
