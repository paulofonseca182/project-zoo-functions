const data = require('../data/zoo_data');

const { species } = data;
/* filtra animais por localizacao */
const getAnimalsLocation = (param) => {
  const response = species.filter((e) => e.location.includes(param)).map((animal) => animal.name);
  return response;
};

/* filtra animais por nome */
const getAnimalsName = (param) => {
  const getAnimal = species.filter((e) => e.name === param)[0].residents;
  const getNames = getAnimal.map((e) => e.name);
  return getNames;
};

/* filtra animais por sexo */
const getAnimalsSex = (param, sex) => {
  const getAnimal = species.filter((e) => e.name === param)[0].residents;
  const getSex = getAnimal.filter((e) => e.sex === sex);
  const getNames = getSex.map((e) => e.name);
  return getNames;
};

/* cria o objeto sem parametros */
const categorizedAnimals = () => {
  const response = {
    NE: getAnimalsLocation('NE'),
    NW: getAnimalsLocation('NW'),
    SE: getAnimalsLocation('SE'),
    SW: getAnimalsLocation('SW'),
  };
  return response;
};

/* Busca animais de todos os generos */
const animalsAllGenerousNoSort = () => {
  const response = {
    NE: getAnimalsLocation('NE').map((e) => ({ [e]: getAnimalsName(e) })),
    NW: getAnimalsLocation('NW').map((e) => ({ [e]: getAnimalsName(e) })),
    SE: getAnimalsLocation('SE').map((e) => ({ [e]: getAnimalsName(e) })),
    SW: getAnimalsLocation('SW').map((e) => ({ [e]: getAnimalsName(e) })),
  };
  return response;
};

/* Busca animais de todos os generos e ordena */
const animalsAllGenerousSort = () => {
  const response = {
    NE: getAnimalsLocation('NE').map((e) => ({ [e]: getAnimalsName(e).sort() })),
    NW: getAnimalsLocation('NW').map((e) => ({ [e]: getAnimalsName(e).sort() })),
    SE: getAnimalsLocation('SE').map((e) => ({ [e]: getAnimalsName(e).sort() })),
    SW: getAnimalsLocation('SW').map((e) => ({ [e]: getAnimalsName(e).sort() })),
  };
  return response;
};

/* Busca animais por sexo */
const getAnimalBySexNoSort = (sex) => {
  const response = {
    NE: getAnimalsLocation('NE').map((e) => ({ [e]: getAnimalsSex(e, sex) })),
    NW: getAnimalsLocation('NW').map((e) => ({ [e]: getAnimalsSex(e, sex) })),
    SE: getAnimalsLocation('SE').map((e) => ({ [e]: getAnimalsSex(e, sex) })),
    SW: getAnimalsLocation('SW').map((e) => ({ [e]: getAnimalsSex(e, sex) })),
  };
  return response;
};
/* Busca animais por sexo e ordena */
const getAnimalBySexSort = (sex) => {
  const response = {
    NE: getAnimalsLocation('NE').map((e) => ({ [e]: getAnimalsSex(e, sex).sort() })),
    NW: getAnimalsLocation('NW').map((e) => ({ [e]: getAnimalsSex(e, sex).sort() })),
    SE: getAnimalsLocation('SE').map((e) => ({ [e]: getAnimalsSex(e, sex).sort() })),
    SW: getAnimalsLocation('SW').map((e) => ({ [e]: getAnimalsSex(e, sex).sort() })),
  };
  return response;
};

/* se receber param sorted ordena o nome dos animais por sexo, se nao receber retorna os animais por sexo sem ordenar */
const animalSex = (sex, sorted) => {
  if (!sorted && sex) {
    return getAnimalBySexNoSort(sex);
  }
  if (sorted && sex) {
    return getAnimalBySexSort(sex);
  }
};


const verify = (sex, sort) => {
  if (sex) {
    return animalSex(sex, sort);
  }
  if (!sex && sort) {
    return animalsAllGenerousSort();
  }
  return animalsAllGenerousNoSort();
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return categorizedAnimals();
  }
  const { includeNames, sex, sorted } = options;
  if (includeNames === true) {
    return verify(sex, sorted);
  }
  return categorizedAnimals();
}

console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;
