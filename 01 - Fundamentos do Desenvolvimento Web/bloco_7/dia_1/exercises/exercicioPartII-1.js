// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , 
// com a notação N! , é o produto de todos os inteiros menores ou iguais a N .
// Exemplo: 4! = 4 * 3 * 2 * 1 = 24.

const fatorial = (numero) => {
    let total = 1
    if (numero) {
        for (num = numero; num >= 1; num -= 1) {
            total *= num;
        }
        return total;
    }
}

// recursão é uma função que chama ela mesmo, parece com um loop tipo while.
const fatoralRec = (numero) =>  numero <= 1 ? 1 : numero * fatoralRec(numero - 1);

console.log(fatoralRec(4));
console.log(fatorial(4));
