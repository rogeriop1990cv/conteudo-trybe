// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let pecaDeXaderz = "DAma";

switch (pecaDeXaderz.toLowerCase()) {
    case "peao":
        console.log("vertical");
        break;
    case 'rei':
        console.log("diagonais, verticais e horizotais");
        break;
    case 'dama':
        console.log("diagonais, verticais e horizotais");
        break;
    case 'torre':
        console.log("horizontais");
        break;
    case 'bispo':
        console.log("diagonais");
        break
    case 'cavalo':
        console.log("em L");
    break;
}
