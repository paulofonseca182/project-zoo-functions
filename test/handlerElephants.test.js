const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Testa se handlerElephants e uma funcao', () => {
    expect(typeof handlerElephants).toBe('function');
  });

  test('Testa se ao passar o parametro "count" handlerElephants retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  test('Testa se ao passar o parametro "names" handlerElephants retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  test('Testa se ao passar o parametro "averageAge" handlerElephants retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  test('Testa se ao passar o parametro "location" handlerElephants retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  test('Testa se ao passar o parametro "popularity" handlerElephants retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  test('Testa se ao passar o parametro "availability" handlerElephants  deve retornar um array de dias da semana que não contém Monday', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  test('Testa se nao passar o parametro handlerElephants retorna a undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  test('Testa se ao passar o parametro que nao seja string handlerElephants retorna uma menssagem', () => {
    const menssage = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(5)).toBe(menssage);
  });

  test('Testa se ao passar um parametro que nao seja um dado de elephants handlerElephants retorna a null', () => {
    expect(handlerElephants('string qualquer')).toBe(null);
  });
});
