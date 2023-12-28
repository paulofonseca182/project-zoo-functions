const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const totalEntrants = {};
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      child += 1;
    } if (entrant.age >= 18 && entrant.age < 50) {
      adult += 1;
    } if (entrant.age >= 50) {
      senior += 1;
    }
  });
  totalEntrants.child = child;
  totalEntrants.adult = adult;
  totalEntrants.senior = senior;
  return totalEntrants;
}

function calculateEntry(entrants) {
  let totalValue = 0;

  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const totalEntrants = countEntrants(entrants);

  totalValue += totalEntrants.child * prices.child;
  totalValue += totalEntrants.adult * prices.adult;
  totalValue += totalEntrants.senior * prices.senior;
  return totalValue;
}

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
