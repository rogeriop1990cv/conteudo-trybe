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
function efeitoBnt(element) {
  const daysFediado = document.getElementsByClassName('day holiday')
  for (let el of daysFediado) {
    if(el.style.backgroundColor){
      el.style.backgroundColor = ''
    } else {
      el.style.backgroundColor = 'white'
    }
    console.log();
  }
}

const bnt = document.querySelector('#btn-holiday');
bnt.addEventListener('click', efeitoBnt)
