function verificaPalindrome(text) {
    let stringRevert = '';

    for (let index=( text.length - 1); index >= 0; index--) {
        stringRevert += text[index];
    };

    if (text.toLowerCase() === stringRevert.toLowerCase()) {
        return true;
    }else {
        return false;
    }
}

console.log(verificaPalindrome('desenvolvimento'))
