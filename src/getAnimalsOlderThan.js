const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getAnimal = data.species.filter((specie) => specie.name === animal);
  const { residents } = getAnimal[0];
  console.log(residents);
  const verifyAge = residents.filter((resident) => resident.age >= age);
  console.log(verifyAge);
  if (verifyAge.length !== residents.length) {
    return false;
  }
  return true;
}

console.log(getAnimalsOlderThan('lions', 3));

module.exports = getAnimalsOlderThan;
