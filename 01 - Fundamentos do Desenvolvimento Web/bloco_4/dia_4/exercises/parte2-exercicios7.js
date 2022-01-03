// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

function verificaFimPalavra(word, ending){
  let indexWord = (word.length - ending.length);
  if(ending.length > word.length){
    return 'error'
  }

  for(let i = 0; i < ending.length; i++){
    if(ending[i] !== word[indexWord]){
      return false
    }
    indexWord += 1
  }
  return true
}

console.log(verificaFimPalavra('trybe', 'eeb'));
