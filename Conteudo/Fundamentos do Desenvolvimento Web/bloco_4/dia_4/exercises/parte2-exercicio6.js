function sum(lista) {
  let soma = 0;
  let saida = ''

  for (let i = 1; i < (lista + 1); i++) {
    soma += i;
    if (i == lista) {
      saida += `${i}=${soma}`
    } else {
      saida += `${i}+`
    }
  }

  return saida;
}

let n = 5
console.log(sum(n));
