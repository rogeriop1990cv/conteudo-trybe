let numero = 62;
let contado = 0;

// Criando for para saber os múltiplos do numero
for (let index = 0; index < numero; index++) {
    if(numero % index === 0){
        contado += 1
    }
}

if(contado > 2){
    console.log("Não é primo");
} else {
    console.log("É primo");
}
