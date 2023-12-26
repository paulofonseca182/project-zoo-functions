const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getAnimal = data.species.filter((specie) => specie.name === animal);
  const { residents } = getAnimal[0];

  const verifyAge = residents.filter((resident) => resident.age >= age);

  if (verifyAge.length !== residents.length) {
    return false;
  }
  return true;
}

module.exports = getAnimalsOlderThan;
