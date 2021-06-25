// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const isAcerto = (valor, valor1, total) => {
  if (valor1 !== 'N.A') {
    valor === valor1 ? total += 1 : total -= 0.5
  }
  return total
}

const valida = () => {
  let total = 0
  rightAnswers.forEach((nota, index) => {
    total = isAcerto(nota, studentAnswers[index], total)
  })
  console.log(total)
}

const respotaCorretas = (respostas, verifica, ivalida) => {
  return valida()
}
respotaCorretas(rightAnswers, studentAnswers, valida)
