let listaDeNumeros = []

for (let index = 1; index < 26; index += 1) {
    listaDeNumeros.push(index)
}

for(let index = 0; index < listaDeNumeros.length; index +=1){
    console.log(`${listaDeNumeros[index]} / 2 = ${listaDeNumeros[index] / 2}`);
}
