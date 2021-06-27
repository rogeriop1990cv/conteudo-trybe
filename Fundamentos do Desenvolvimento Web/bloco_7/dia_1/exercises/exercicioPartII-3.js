const bntCount = document.getElementById('bntCount');

bntCount.addEventListener('click', () => {
    let contadorNode = document.getElementById('contador')
    contadorNode.innerText = Number(contadorNode.innerText) + 1;
})