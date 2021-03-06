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

// Requisito 08:
const verifyPair = (obj, key, value) => {
  const keyValue = `${key},${value}`
  const listKeysValue = Object.entries(obj)

  for (let item of listKeysValue) {
    if (item.toString() === keyValue) {
      return true
    }
  }

  return false
}

// Bônus 1.
const attendedMathClass = (obj) => {
  let total = 0;
  for (item in obj) {
    if (obj[item].materia === 'Matemática') {
      total += obj[item].numeroEstudantes;
    }
  }
  return total
}

// Bônus 1.
const createReport = (obj, teacherName) => {
  let total = 0
  const listMateria = []

  for (let item in obj) {
    if (obj[item].professor === teacherName) {
      listMateria.push(obj[item].materia);
      total += obj[item].numeroEstudantes;
    }
  }

  return {
    professor: teacherName,
    aulas: listMateria,
    estudantes: total,
  }
}
