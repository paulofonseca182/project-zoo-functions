const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  const getEmployee = employees.filter((employee) => employee
    .firstName === employeeName || employee.lastName === employeeName);
  if (employeeName === undefined) {
    return {};
  }

  const [employee] = getEmployee;
  return employee;
}

module.exports = getEmployeeByName;
