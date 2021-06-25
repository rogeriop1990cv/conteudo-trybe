// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const ganhou = (valor, valor1) => { return valor === valor1};

const sorteio = (numeroApostado) => {
  number = Math.floor(Math.random() * (6 - 1) + 1);
  return ganhou(numeroApostado, number) ? "Parabéns você ganhou" : "Tente novamente";
}

console.log(sorteio(5))
console.log(sorteio(4))
console.log(sorteio(3))
console.log(sorteio(2))
