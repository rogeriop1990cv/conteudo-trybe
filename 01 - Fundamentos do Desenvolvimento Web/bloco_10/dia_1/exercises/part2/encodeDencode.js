// Desafio 9
function encode(texto) {
  let saida = '';
  const vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let letra of texto) {
    if (vogais[letra]) {
      saida += vogais[letra];
    } else {
      saida += letra;
    }
  }
  return saida;
}

function decode(texto) {
  let saida = '';
  const vogais = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let letra of texto) {
    if (vogais[letra]) {
      saida += vogais[letra];
    } else {
      saida += letra;
    }
  }
  return saida;
}

module.exports = {
  encode,
  decode
}
