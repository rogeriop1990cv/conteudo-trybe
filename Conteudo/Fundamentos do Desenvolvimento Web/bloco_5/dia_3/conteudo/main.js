const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');
divDois.className
/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;

1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech'

 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página

1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo


Segue abaixo um exemplo do uso de event.target:
*/

document.body.addEventListener('dblclick', (element) => {
  element.target.className = 'tech'
  console.log(element.target.innerText);
  element.target.innerText = input.value;
})

document.body.addEventListener('dblclick', (element) => {
  element.target.className = 'tech'
})
document.body.addEventListener('mouseout', (element) => {
  if(element.target.className === 'tech'){
    element.target.removeAttribute('class')
  }
})

myWebpage.addEventListener('mouseover', () => { myWebpage.style.color = 'red' })
myWebpage.addEventListener('mouseout', () => { myWebpage.style.color = 'white' })
myWebpage.addEventListener('click', () => { window.open('https://google.com', '_blank') })
