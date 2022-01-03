function maiorIndice(lista){
  let maior = 0;

  for(let index = 0; index < lista.length; index++){
    if(lista[index] > maior){
      maior = lista[index];
    }
  }

  return lista.indexOf(maior)
}

console.log(maiorIndice([2, 3, 6, 7, 10, 1]));
