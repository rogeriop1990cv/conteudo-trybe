const searchEmployee = require('./searchEmployee');

describe('Teste da função searchEmployee.js', () => {
  it('Testa se a função existe.', () => {
    expect(typeof searchEmployee).toMatch('function');
  });

  it('Testa se passando uma id e informação o resultado e o esperando.', () => {
    const id = '9852-2-2';
    const infor = 'specialities'
    expect(searchEmployee(id, infor)).toEqual({ id: id, infor: ['Ruby', 'SQL'] });
  });

  it('Testa se a id não existir retorna o erro "ID não identificada".', () => {
    const id = '000000-0';
    const infor = 'lastName'
    expect(searchEmployee(id, infor)).toMatch('ID não identificada');
  });
  it('Testa se a informação não existir retorna o erro "Informação indisponível".', () => {
    const id = '4456-4';
    const infor = 'temcasa';
    expect(searchEmployee(id, infor)).toMatch("Informação indisponível");
  });
  it('Testa se o parametro id não existir retorna o erro "ID não identificada".', () => { });
  const id = undefined;
  const infor = 'lastName'
  expect(() => searchEmployee(id, infor)).toThrow('ID não identificada');

  it('Testa se o parametro informação não existir retorna o erro "Informação indisponível".', () => {
    const id = '00000-0';
    const infor = undefined;
    expect(() => searchEmployee(id, infor)).toThrow("Informação indisponível");
  });
})
