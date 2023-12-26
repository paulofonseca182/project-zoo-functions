const data = require('../data/zoo_data');

function isManager(id) {
  const { employees } = data;
  const verifyManagers = employees.filter(({ managers }) => managers.includes(id));

  if (verifyManagers.length !== 0) {
    return true;
  }
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const { employees } = data;
    const verifyManagers = employees.filter(({ managers }) => managers.includes(managerId));

    return verifyManagers.map((e) => `${e.firstName} ${e.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
