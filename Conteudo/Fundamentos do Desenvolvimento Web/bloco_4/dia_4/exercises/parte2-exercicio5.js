function numeroRepetido(listaDeNumeros) {
  let numerosR = {
  }
  let maior = 0;
  let r = '';

  for (n of listaDeNumeros) {
    if (numerosR[n] === undefined) {
      numerosR[n] = 1;
    } else{
      numerosR[n] += 1;
    }
  }

  for(numero in numerosR){
    if(Number(numerosR[numero]) >= maior){
      maior = Number(numerosR[numero])
      r = numero;
    }
  }

  for(key in numerosR){
    if(numerosR[key] === maior){
      console.log(key ,numerosR[key],);
    }
  }

}

let lista = [2, 1, 2, 5, 8, 2, 1, 1, 10, 10, 10]
numeroRepetido(lista)
