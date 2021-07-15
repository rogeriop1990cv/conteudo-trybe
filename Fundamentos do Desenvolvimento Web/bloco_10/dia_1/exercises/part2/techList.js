function techList(listaDeTecnologias, nome) {
  if (!listaDeTecnologias.length) return 'Vazio!';

  // refatoração.
  return listaDeTecnologias.sort().map(tecnologia => ({ name: nome, tech: tecnologia}));

}
module.exports = techList;
