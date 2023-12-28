const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  if (!animal) {
    const allAnimals = species.reduce((acc, arr) => {
      acc[arr.name] = arr.residents.length;
      return acc;
    }, {});
    return allAnimals;
  }
  const { specie, sex } = animal;
  if (!sex) {
    const specieAnimal = species.find((e) => e.name === specie).residents.length;
    return specieAnimal;
  }
  const specieAnimalSex = species.find((e) => e.name === specie)
    .residents.filter((e) => e.sex === sex).length;
  return specieAnimalSex;
}

console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
