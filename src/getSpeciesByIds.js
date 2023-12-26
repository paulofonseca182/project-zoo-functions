const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const animalArray = [];
  ids.forEach((e) => animalArray.push(...data.species.filter((specie) => specie.id === e)));
  return animalArray;
}

module.exports = getSpeciesByIds;
