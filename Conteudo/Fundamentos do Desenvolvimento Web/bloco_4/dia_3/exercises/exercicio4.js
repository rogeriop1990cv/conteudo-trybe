let n = 3;
let meio = Math.floor(n / 2);
let l = 0;

if (n % 2 === 1) {
    l = 1;
}

console.log(`n = ${n}`);
for (let linha = 0; linha < n; linha++) {
    console.log(' '.repeat(meio).concat('*'.repeat(l)).concat(' '.repeat(meio)))
    if (meio > 0) {
        meio -= 1;
        l += 2
    } else {
        break;
    }
}
