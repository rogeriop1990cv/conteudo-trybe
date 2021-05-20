let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let listaImpares = []

for (let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 == 0){
        listaImpares.push(numbers[index])
    }
}

let saidaCodigo = '';
if(listaImpares.length > 0){
    for (let index = 0; index < listaImpares.length; index += 1) {
        saidaCodigo += ` ${listaImpares[index]}`;
    }
    console.log(saidaCodigo);
}else {
    console.log('nenhum valor ímpar encontrado');
}
