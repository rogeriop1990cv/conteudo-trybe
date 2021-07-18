const animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    const animal = animals.find(animal => animal.name === name);
    if(animal){
      resolve(animal);
    }else {
      reject('Nenhum animal com esse nome!')
    }
  })
};

const findAnimalByAge = (age) => {
  return new Promise((resolve, reject) => {
    const animal = animals.find(animal => animal.age === age);
    if(animal){
      resolve(animal);
    }else {
      reject('Nenhum animal com esse Id!')
    }
  })
};

const getAnimal = (nameOrAge) => {
  if(typeof nameOrAge === 'string'){
    return findAnimalByName(nameOrAge)
  }
  return findAnimalByAge(nameOrAge);
};

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });     
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com o Id procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal(5).then(animal => {
        expect(animal).toEqual({ name: 'Preguiça', age: 5, type: 'Cat' });
      });     
    });
  });

  describe('Quando não existe o animal com o Id procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal(10).catch(error =>
        expect(error).toEqual('Nenhum animal com esse Id!')
      );
    });
  });
});
