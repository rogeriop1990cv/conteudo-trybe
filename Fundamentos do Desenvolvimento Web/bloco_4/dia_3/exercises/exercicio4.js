let n = 5;
let meio = Math.floor(n / 2);
let l = 1;

for (let linha = 0; linha < n; linha++) {
    if(linha < meio){
        console.log(''.repeat(meio - 1));
        continue
    }
    console.log(' '.repeat(meio).concat('*'.repeat(l)).concat(' '.repeat(meio)))
    if (meio > 0) {
        meio -= 1;
        l += 2
    } else {
        break;
    }
}
