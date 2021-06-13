const bntSend = document.getElementById('enviar');

const listEstados = ["Acre", "Alagoas", "Amapá",
  "Amazonas", "Bahia", "Ceará", "Espírito Santo", "Goiás",
  "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais",
  "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro",
  "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia",
  "Roraima", "Santa Catarina", "São Paulo", "Sergipe",
  "Tocantins", "Distrito Federal"]

const estado = document.getElementById('estado')

listEstados.forEach((item) => {
  let option = document.createElement('option')
  option.setAttribute('value', item.toLocaleLowerCase().replaceAll(' ', '_'));
  option.innerText = item;
  estado.appendChild(option)
})

function textDateToListNumber(text) {
  if (text.length < 10) {
    return alert('Valor da data errado\n Por favor use o padrao dd/mm/aaaa')
  }

  if (text.includes('/')) {
    [dia, mes, ano] = text.split('/');
    return [Number(dia), Number(mes), Number(ano)]
  } else {
    return alert('Valor da data errado\n Por favor use o padrao dd/mm/aaaa')
  }
}

function validaDate(valor, maxValor = 9999) {
  if (valor >= 1 && valor <= maxValor) {
    return true;
  }
  return false
}

bntSend.addEventListener('click', (event) => {
  event.preventDefault()

  let listadata = textDateToListNumber(document.getElementById('data').value)
  let maxValor = [31, 12]

  if (listadata) {
    console.log(listadata);
    listadata.forEach((el, index) => {
      if (!validaDate(el, maxValor[index])) {
        return alert('Valor da data errado\n Por favor use o padrao dd/mm/aaaa')
      }
    })
  }

})
