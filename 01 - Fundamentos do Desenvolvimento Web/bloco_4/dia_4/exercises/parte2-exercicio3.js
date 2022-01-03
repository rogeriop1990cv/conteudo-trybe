function menorIndice(lista){
  let menor = lista[0];

  for(let index = 0; index < lista.length; index++){
    if(lista[index] < menor){
      menor = lista[index];
    }
  }

  return lista.indexOf(menor)
}

console.log(menorIndice([2, 4, 6, 7, 10, 0, -3]));
