function techList(listaDeTecnologias, nome) {
  let listaDeTech = [];
  if (listaDeTecnologias.length <= 0) {
    return 'Vazio!';
  }

  for (let tecnologia of listaDeTecnologias.sort()) {
    listaDeTech.push({ name: nome, tech: tecnologia });
  }
  return listaDeTech;
}
