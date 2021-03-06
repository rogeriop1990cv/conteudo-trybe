function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercício 1:

function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  const daysListItem = document.querySelector('#days')

  for (let day of dezDaysList) {
    const li = document.createElement('li');
    li.className = 'day '
    li.innerText = day;
    if ([24, 25, 31].includes(day)) {
      li.className += 'holiday'
      li.innerText = day;
    }

    if ([4, 11, 18, 25].includes(day)) {
      li.className += ' friday'
      li.innerText = day;
    }

    daysListItem.appendChild(li)
  }
}

createDaysOfTheMonth()

// Exercício 2
function createBntFeriado(string) {
  const el = document.querySelector('.buttons-container');
  const bnt = document.createElement('button');
  bnt.innerText = string;
  bnt.id = "btn-holiday";
  el.appendChild(bnt)

}
createBntFeriado('Feriados');

// Exercício 3:
function effectBntHoliday(element) {
  const daysFediado = document.getElementsByClassName('day holiday')
  for (let el of daysFediado) {
    if (el.style.backgroundColor) {
      el.style.backgroundColor = ''
    } else {
      el.style.backgroundColor = 'white'
    }
  }
}

const bntHoliday = document.querySelector('#btn-holiday');
bntHoliday.addEventListener('click', effectBntHoliday);

// Exercício 4:
function sextaFeira(string) {
  // Acha o pai do elemento que quero coloca o filho.
  const el = document.querySelector('.buttons-container');
  const bnt = document.createElement('button'); // Criar o filho.
  bnt.innerText = string; // Add o texto.
  bnt.id = 'btn-friday' // Add a id.
  el.appendChild(bnt) // Add o filho ao pai.
}
sextaFeira("Sexta-Feira")

// Exercício 5:
function effectBtnFriday(element) {
  const daysFediado = document.getElementsByClassName('day  friday')
  for (let el of daysFediado) {
    if (el.innerHTML === 'Sexta-feira') {
      let umDiaDepoisDeHoje = Number(el.nextSibling.innerText) // Peguei um dia depois e converti para numero.
      el.innerHTML = umDiaDepoisDeHoje - 1 // Aqui eu faço menos 1 pra saber qual era o dia atual.
    } else {
      el.innerHTML = 'Sexta-feira'
    }
  }
}
const bntFriday = document.getElementById('btn-friday');
bntFriday.addEventListener('click', effectBtnFriday);

// Exercício 6:
function effectZoomMauseOver(el) {
  if (el.target.className.startsWith('day')) { // Se minha classe começa com day, retrona true.
    el.target.style.transform = 'scale(1.5)';
  }
}

function effectZoomMauseNormal(el) {
  el.target.style.transform = null;
}

const ulDays = document.getElementById('days') // Busco todas as classe com nome day dentro.
ulDays.addEventListener('mouseover', effectZoomMauseOver) //  Aplico o efeito nesse elemento.
ulDays.addEventListener('mouseout', effectZoomMauseNormal) //  Aplico o efeito nesse elemento.

// Exercício 7:
function myTasks(string) {
  const el = document.querySelector('.my-tasks'); // Nesse caso usei querySelector porque me retorna o primeiro elemento e não uma lista como o getelementsByClassName.
  const createSpan = document.createElement('span');
  createSpan.innerText = string;
  el.appendChild(createSpan)
}
myTasks('Projeto')

// Exercício 8:
function legTasks(stringCor) {
  const el = document.querySelector('.my-tasks');
  const legendaTask = document.createElement('div');
  legendaTask.style.backgroundColor = stringCor;
  legendaTask.className = 'task ';
  el.appendChild(legendaTask)
}

legTasks('green')

// Exercício 9:
function addClassSelected(el) {
  if (el.target.className === 'task ') {
    el.target.className += 'selected '
  } else if (el.target.className === 'task selected ') {
    el.target.className = 'task '
  }

}

document.body.addEventListener('click', addClassSelected)

// Exercício 10:
function addCorDay(el) {
  // Pega a cor do elemento que tive a class.
  const corLegDay = document.querySelector('.task').style.backgroundColor || document.querySelector('.task.selected ').style.backgroundColor;

  if (document.querySelector('.task.selected ')) {
    if (el.target.style.color === corLegDay) {
      el.target.style.color = '';
    } else if (el.target.className.startsWith('day')) {
      el.target.style.color = corLegDay;
    }
  }

}

document.body.addEventListener('click', addCorDay)

// Bônus:
function addTeks() {
  const textInput = document.getElementById('task-input');
  const listTask = document.querySelector('.task-list')
  const list = document.createElement('li')

  if (textInput.value === '') {
    alert('Valor invalido, digite um compromisso.')
  } else {
    list.innerText = textInput.value
    listTask.appendChild(list)

  }
}

const bntAddTask = document.getElementById('btn-add')
bntAddTask.addEventListener('click', addTeks)

const textInput = document.getElementById('task-input')
// A função () => { conteudo } verificar o tipo da tecla, se for entre ela chama a addteks()
textInput.addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
    addTeks()
  }
})
