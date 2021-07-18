const { encode, decode } = require('./encodeDencode');

describe('Teste para as funções Encode e Decode.', () => {
  it('Teste se encode é uma funções.', () => {
    expect(typeof encode).toMatch('function');
  })

  it('Teste se decode é uma funções.', () => {
    expect(typeof decode).toMatch('function');
  })

  it('Testa se a função encode retorna "12345"', () => {
    expect(encode('aeiou')).toMatch('12345');
  })

  it('Testa se a função encode não altere consolantes para numero.', () => {
    const listConsoantes = 'b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, x, y, w, z';
    expect(encode(listConsoantes)).not.toMatch(/([12345])/);
  })

  it('Testa se a função decode não altere outros numeos para vogais', () => {
    const listaNumeros = '0 6 7 8 9';
    expect(decode(listaNumeros)).not.toMatch(/([aeiou])/);
  })

  it('Testa se tamanho da string do encode e o mesmo do retorno.', () => {
    const stringTest = 'b, c, d, f, g';
    const returnFunc = encode(stringTest)
    expect(stringTest.length).toBe(returnFunc.length);
  })

  it('Testa se tamanho da string do decode e o mesmo do retorno', () => {
    const stringTest= 'b, c, d, f, g';
    const returnFunc = encode(stringTest)
    expect(returnFunc.length).toBe(stringTest.length)
  })
})

