// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const nomeEmail = (nome) => {
  return {
    nome,
    email: `${nome.replace(/ /g, '_')}@trybe.com`
  }
}

const newEmployees = () => {
  const employees = {
    id1: nomeEmail('Pedro Guerra'),
    id2: nomeEmail('Luiza Drumond'),
    id3: nomeEmail('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees().id1);
console.log(newEmployees().id2);
console.log(newEmployees().id3);
