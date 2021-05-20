// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F

let nota = 49;

if(nota < 0) {
    console.log('error');
} else {
    if(nota > 100) {
        console.log('error');
    }
}

if (nota < 50){
    if(nota > 0){
        console.log("F");
    }
}


if (nota >= 50){
    if(nota < 60){
        console.log("E");
    }
}

if (nota >= 60){
    if(nota < 70){
        console.log("D");
    }
}

if (nota >= 70){
    if(nota < 80){
        console.log("C");
    }
}

if (nota >= 80){
    if(nota < 90){
        console.log("B");
    }
}

if (nota >= 90){
    if(nota <= 100){
        console.log("A");
    }
}
