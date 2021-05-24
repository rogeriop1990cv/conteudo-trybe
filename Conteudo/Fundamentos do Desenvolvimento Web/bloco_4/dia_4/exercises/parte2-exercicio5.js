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

  return r;
}

let lista = [2, 3, 2, 5, 8, 2, 3]
console.log(lista);
console.log(numeroRepetido(lista))
