const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Requisito 01.
const addChaveValor = (obj, text, value) => {
  Object.assign(obj, { [text]: value })
};

addChaveValor(lesson2, 'turno', 'manhã');

// Requisito 02.
const listKeys = obj => Object.keys(obj);

// Requisito 03.
const viewlentghObject = obj => Object.keys(obj).length;

// Requisito 04.
const listValues = obj => Object.values(obj);

// Requisito 05.
const allLessons = {};
Object.assign(allLessons, { ['lesson1']: lesson1 })
Object.assign(allLessons, { ['lesson2']: lesson2 })
Object.assign(allLessons, { ['lesson3']: lesson3 })

// Requisito 06.
const fullNumberStudent = (obj) => {
  let totalStudent = 0;
  for (item in obj) {
    totalStudent += obj[item].numeroEstudantes
  };

  return totalStudent
}

// Requisito 07.
const getValueByNumber = (obj, position) => (Object.values(obj)[position])
