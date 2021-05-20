let salarioBruto = 3000.00;
let impostoINSS;
let impostoIR;
let salarioLiquido;
let parcelaDeduzirImposto;
let salarioBase;

// Calculo do salario menos o INSS
if(salarioBruto <= 1556.94){
    impostoINSS = salarioBruto / 100 * 8;
}

if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    impostoINSS = salarioBruto / 100 * 9;
}
if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    impostoINSS = salarioBruto / 100 *11;
}

if(salarioBruto > 5189.82){
    impostoINSS = 570.88;
}
salarioBase = salarioBruto - impostoINSS;

// Calculo do salario menos o IR
if(salarioBase <= 1903.98){
    impostoIR = salarioBase;
}

if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    impostoIR = salarioBase / 100 * 7.5;
    parcelaDeduzirImposto = 142.80;
}
if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
    impostoIR = salarioBase / 100 * 15;
    parcelaDeduzirImposto = 354.80;
}

if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
    impostoIR = salarioBase / 100 * 22.5;
    parcelaDeduzirImposto = 636.13;
}

if(salarioBase > 4664.68){
    impostoIR = salarioBase / 100 * 27.5;
    parcelaDeduzirImposto = 869.36;
}

// calculor IR 
impostoIR = impostoIR - parcelaDeduzirImposto

salarioLiquido = salarioBase - impostoIR;
console.log(`Resultado:R$ ${salarioLiquido}`);