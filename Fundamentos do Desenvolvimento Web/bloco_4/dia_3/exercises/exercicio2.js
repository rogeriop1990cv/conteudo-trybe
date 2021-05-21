

let n = 5;
let saidaTexto = '';

let contado = 0;
for (let indexUm = 0; indexUm < n; indexUm += 1) {

    for (indexDois = 0; indexDois < n; indexDois += 1) {
        if (contado === indexUm && contado >= indexDois) {
            saidaTexto += '*';
        }
        saidaTexto += ' ';
    }
    contado += 1
    saidaTexto += '\n'
}

console.log(`n = ${n}\n\n`);
console.log(saidaTexto);
