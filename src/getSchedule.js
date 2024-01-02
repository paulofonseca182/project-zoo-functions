const data = require('../data/zoo_data');

const { hours, species } = data;
const getDays = Object.keys(hours);
const allDays = getDays.reduce((acc, arr) => {
  acc[arr] = {
    officeHour: `Open from ${hours[arr].open}am until ${hours[arr].close}pm`,
    exhibition: species.filter((e) => e.availability
      .includes(arr)).map((specie) => specie.name) };
  return acc;
}, {});

allDays.Monday.exhibition = 'The zoo will be closed!';
allDays.Monday.officeHour = 'CLOSED';

function getSchedule(scheduleTarget) {
  const getSpecie = species.filter((specie) => specie.name === scheduleTarget);

  if (getDays.includes(scheduleTarget)) {
    const day = {};
    day[scheduleTarget] = allDays[scheduleTarget];
    return day;
  }
  if (scheduleTarget === undefined || getSpecie.length === 0) {
    return allDays;
  }
  if (getSpecie) {
    return getSpecie[0].availability;
  }
}

console.log(getSchedule('asdas'));
module.exports = getSchedule;
