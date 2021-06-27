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

console.log(listValues(lesson2))
