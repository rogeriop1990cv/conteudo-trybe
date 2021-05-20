let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var numbersMultiplicado = [];

for( let index = 0; index < numbers.length; index += 1 ){
    for(let iindex = 0; iindex > index; iindex += 1){
        if(numbers[index] > numbers[iindex]){
            let trocaPosicao = numbers[index];
            numbers[index] = numbers[iindex];
            numbers[iindex] = trocaPosicao;
        }
    }
}

for (let index = 0; index < numbers.length; index += 1) {
        if (index === numbers.length - 1){
            numbersMultiplicado.push(numbers[index] * 2)
        }else {
            numbersMultiplicado.push(numbers[index] * numbers[index+1])
        }
}

console.log(numbersMultiplicado);