
let angulo1 = 0;
let angulo2 = 60;
let angulo3 = 40;
//5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

if (angulo1 > 0){
    if(angulo2 > 0){
        if (angulo3 > 0){
            if (angulo1 +  angulo2 + angulo3 == 180){
                console.log(true);
            }else{
                console.log(false);
            }
        } else {
            console.log('error');
        }
    }else {
        console.log('error');
    }
}else {
    console.log('error');
}
