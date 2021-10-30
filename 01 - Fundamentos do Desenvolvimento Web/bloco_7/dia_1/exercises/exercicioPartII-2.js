// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (frase) => {
    // Inicia uma variavel undefined
    let wordLength;

    // split(' ') retorna uma lista da frase usando ' ' como separado
    frase.split(' ').forEach((word) => {
        // wordLength e false por isso usa ! pra deixa ele true e assim 
        // fazer com o primeiro item seja atribuidor a ele.
        // aṕos isso todos os outras interações vai pra o que esta depois do ||.
        if(!wordLength || word.length >= wordLength.length){
            wordLength = word
        }
    })
    console.log(wordLength)
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
