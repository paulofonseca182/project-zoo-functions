const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const getEmployee = employees.filter((employee) => employee.id === id)[0].responsibleFor[0];

  const getSpecie = species.filter((specie) => specie.id === getEmployee)[0].residents;
  let hightAge = {
    name: '',
    sex: '',
    age: 0,
  };
  getSpecie.forEach((e) => {
    if (e.age > hightAge.age) {
      hightAge = e;
    }
  });

  return Object.values(hightAge);
}

module.exports = getOldestFromFirstSpecies;
