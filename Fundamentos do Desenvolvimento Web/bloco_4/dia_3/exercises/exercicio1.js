
let n = 5;
let saidaTexto = '';

for(let indexUm = 0; indexUm < n; indexUm += 1){
    for(indexDois = 0; indexDois < n; indexDois += 1){
        saidaTexto += '*';
    }
    saidaTexto += '\n'
}

console.log(`n = ${n}\n\n`);
console.log(saidaTexto);