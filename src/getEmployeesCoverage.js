const data = require('../data/zoo_data');

const { employees, species } = data;

const getEmployee = (param) => employees.filter((e) => e
  .firstName === param.name || e.lastName === param.name || e.id === param.id);

const getLocation = (param) => {
  const filterSpecieLocation = species.filter((e) => e.id === param)[0].location;
  return filterSpecieLocation;
};

const getSpecie = (param) => {
  const filterSpecieName = species.filter((e) => e.id === param)[0].name;
  return filterSpecieName;
};

const creatObjectEmployee = (param) => {
  const dataEmployee = param.reduce((acc, arr) => {
    acc.id = arr.id;
    acc.fullName = `${arr.firstName} ${arr.lastName}`;
    acc.species = arr.responsibleFor.map((e) => getSpecie(e));
    acc.locations = arr.responsibleFor.map((e) => getLocation(e));

    return acc;
  }, {});

  return dataEmployee;
};

function getEmployeesCoverage(param) {
  if (!param) {
    return employees.map((e) => creatObjectEmployee([e]));
  }
  if (Object.keys(getEmployee(param)).length >= 1) {
    const employee = getEmployee(param);
    const dataEmployee = creatObjectEmployee(employee);
    return dataEmployee;
  }
  if (Object.keys(getEmployee(param)).length === 0) {
    throw new Error('Informações inválidas');
  }
}

module.exports = getEmployeesCoverage;
