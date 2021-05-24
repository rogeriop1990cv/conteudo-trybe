let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

let info1 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (key in info) {
  if (info[key] === 'Sim') {
    console.log(`${info[key]} // ${info1[key]}`);
  } else {
    console.log(`${info[key]} e ${info1[key]}`);
  }
}
