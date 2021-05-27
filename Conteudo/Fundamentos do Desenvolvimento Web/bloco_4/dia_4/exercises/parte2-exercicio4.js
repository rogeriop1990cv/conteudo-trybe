function nomeMiorCaracters(listaDeNome){
  let resultado = {
    nome: '',
    caracteres: 0
  }

  for(let n of listaDeNome){
    if(n.length > resultado.caracteres){
      resultado.nome = n;
      resultado.caracteres = n.length;
    }
  }
  return resultado.nome;
}

console.log(nomeMiorCaracters( ['Joséqqqqqqqqqq', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
