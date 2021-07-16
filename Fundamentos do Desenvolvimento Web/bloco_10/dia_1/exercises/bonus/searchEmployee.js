const professionalBoard = require('./dados')

const searchEmployee = (id, infor) => {
  const employee = {};
  if (!id) { throw new Error('ID não identificada') };
  if (!infor) { throw new Error('Informação indisponível') };

  const professional = professionalBoard.find(prof => prof.id === id )

  if(professional){
    employee.id = professional.id;
  } else {
    return 'ID não identificada';
  }

  if(professional[infor]){
    employee.infor = professional[infor];
  } else {
    return 'Informação indisponível';
  }
  return employee
};

module.exports = searchEmployee;
