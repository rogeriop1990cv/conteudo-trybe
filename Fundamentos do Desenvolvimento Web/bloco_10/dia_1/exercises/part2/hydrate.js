function hydrate(frase) {
  const soma = frase.match(/[0-9]/g).reduce((acc, valor) => acc + Number(valor), 0);
  return soma > 1 ? `${soma} copos de água` : `${soma} copo de água`;
}
module.exports = hydrate
