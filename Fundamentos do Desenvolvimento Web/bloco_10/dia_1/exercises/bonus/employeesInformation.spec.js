const employeesInformation = require('./searchEmployee');

describe('Teste da função employeesInformation.js', () => {
  it('Testa se a função existe.', () => {
   expect(typeof employeesInformation).toMatch('function');
  });

  it('Testa se passando uma id e informação o resultado e o esperando.', () => {
    const id = '9852-2-2';
    const infor = 'specialities'
    expect(employeesInformation(id, infor)).toEqual({ id: id, infor: ['Ruby', 'SQL'] });
  });

  it('Testa se a id não existir retorna o erro "ID não identificada".', () => {});
  const id = '00000-0';
  const infor = 'lastName'
  expect(() => employeesInformation(id, infor)).toThrow("ID não identificada");

  it('Testa se a informação não existir retorna o erro "Informação indisponível".', () => {
    const id = '00000-0';
    const infor = ''
    expect(() => employeesInformation(id, infor)).toThrow("Informação indisponível");
  });
})
