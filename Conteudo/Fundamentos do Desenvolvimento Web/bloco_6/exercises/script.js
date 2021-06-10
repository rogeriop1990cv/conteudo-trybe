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
