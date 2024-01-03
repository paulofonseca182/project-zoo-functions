1 - Implemente a função getSpeciesByIds para buscar as espécies dos animais por meio de um ID e retorne um array contendo todos os animais dessa espécie.
  * Faça com que a função getSpeciesByIds possa receber vários parâmetros;
  * Retorne um array vazio se a função não receber um id;
  * Retorne as seguintes informações do arquivo data:
  * Se a função receber apenas um id, retorne a espécie do animal referente a este id;
  * Se a função receber vários ids, retorne todas as espécies referente a esses ids.

2 - Implemente a função getAnimalsOlderThan que deve receber uma espécie e uma idade como parâmetro, e então retornar se todos os animais dessa espécie possuem essa idade ou são mais velhos.
  * Verifique se todos os animais da espécie passada como parâmetro possuem a idade mínima:
  * Os animais devem ter essa idade ou serem mais velhos.
  * Retorne um valor booleano.

3 - Implemente a função getEmployeeByName que deve buscar por pessoas colaboradoras através de seu primeiro ou último nome.
  * Retorne um objeto vazio caso a função não receba parâmetros;
  * Retorne as informações da pessoa colaboradora caso o parâmetro seja igual ao nome ou igual ao último nome.

4 - Implemente a função getRelatedEmployees para verificar se uma pessoa colaboradora é gerente e quais pessoas ela lidera.

  * Considerando a boa prática de dividir o código em partes menores, o arquivo terá duas funções:
    *  A função isManager será responsável por verificar se uma pessoa colaboradora é gerente:
    * Deve retornar true se o id passado for de uma pessoa gerente;
    * Deve retornar false se o id passado não for de uma pessoa gerente.
  * A função getRelatedEmployees será responsável por retornar as pessoas lideradas pela gerência:
    * Utilize a função isManager para verificar se a pessoa é gerente ou não e fazer as seguintes verificações:
    * Caso a pessoa seja gerente, retorne um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por essa pessoa.
    * Caso a pessoa não seja gerente, dispare um erro com a mensagem: 'O id inserido não é de uma pessoa colaboradora gerente!'.

5 - Implemente a função countAnimals que deverá contabilizar a quantidade de espécies de animais residentes no zoológico.

  * A função countAnimals é responsável por contar a quantidade de animais que residem no zoológico.
  * Retorne a quantidade de animais residentes por espécie caso não seja passado nenhum parâmetro. O retorno deverá ser um objeto cujo o nome de cada espécie é a chave e o total de animais (residentes) dessa espécie é o valor
  * Retorne a quantidade de animais residentes no zoológico da espécie passada por parâmetro. Por exemplo:
    * ao receber o argumento { specie: 'penguins' }, retorna apenas a quantidade (número) de pinguins que residem no zoológico;
    * ao passar o argumento { specie: 'giraffes', sex: 'female' }, retorna apenas a quantidade (número) de girafas fêmeas que residem no zoológico.

6 - Calcule o valor total da entrada dos visitantes do zoológico.

  * O valor das entradas do zoológico é calculado a partir da faixa etária, onde:
    * child: são pessoas menores de 18 anos;
    * adult: são pessoas com idade maior ou igual a 18 anos e menor que 50 anos;
    * senior: são pessoas com idade maior ou igual a 50 anos.
  * A função countEntrants será responsável por calcular a quantidade de visitantes por faixa etária:
    * Ela recebe um array e deve retornar um objeto. Para isso:
    * Realize a soma da quantidade de visitantes por faixa etária;
    * Retorne um objeto em um formato como esse: { child: 3, adult: 2, senior: 1 }.

  * A função calculateEntry será responsável por somar o valor da entrada das pessoas no zoológico:
    * Ela recebe um array e deve retornar a soma total dos valores do ingresso. Para isso:
      * Retorne 0 se nenhum parâmetro for passado ou seja um array vazio;
      * Utilize a função countEntrants para ter a quantidade total de pessoas por faixa etária;
      * Realize a soma dos valores dos ingressos por faixa etária. Seu retorno deve ser parecido com esse: 187.94.
        
7 - Implemente a função getSchedule que irá disponibilizar um cronograma com os horários de visita da semana disponíveis para cada espécie de animal.
  * As informações dos horários dos animais devem ser disponibilizadas em uma consulta para as pessoas que estão visitando o zoológico, que podem querer ter acesso ao cronograma da semana, de um dia ou de um animal específico.
  * Retorne um array com os dias da semana em que um animal está disponível para visitação caso o parâmetro da função seja um animal. Por exemplo: [ 'Tuesday', 'Thursday', 'Saturday', 'Sunday' ];
  * Retorne todos os horários disponíveis para cada dia da semana caso a função:
    * não receba parâmetro;
    * o parâmetro passado para a função não seja um animal ou um dia;
  * Para isso:
    * Crie um objeto e adicione todos os dias da semana como chave;
    * Os valores de cada dia da semana deve ser um objeto, possuindo as chaves officeHour e exhibition:
      * officeHour deve possuir o texto com o horário que o zoológico abre e fecha naquele dia da semana;
      * exhibition deve possuir um array com o nome de todos os animais disponíveis para visitação naquele dia da semana.

8 - Implemente a função getOldestFromFirstSpecies que deverá encontrar o animal mais velho da espécie gerenciado por uma pessoa colaboradora.

  * A função recebe um parâmetro ID referente à pessoa colaboradora e a partir desse ID:
    * A função deverá encontrar a pessoa colaboradora que possui o ID passado por parâmetro;
    * A função deverá encontrar a primeira espécie de animal que a pessoa colaboradora é responsável;
    * A função deverá encontrar o animal mais velho daquela espécie;
    * A função deverá retornar um array com as informações do animal mais velho daquela espécie.

9 - Implemente a função getEmployeesCoverage que deverá retornar as informações sobre a pessoa colaboradora e por quais espécies ela é responsável.

  * A função vai receber um objeto como parâmetro que vai determinar o seu comportamento, sendo:
    * name: o nome ou sobrenome da pessoa a ser buscada;
    * id: o id da pessoa a ser buscada.
  * Para isso:
    * Retorne as informações da pessoa correspondente ao receber um objeto com a propriedade name:
    * a propriedade name pode possuir como valor o primeiro ou último nome da pessoa colaboradora, portanto garanta que seu código funciona das duas maneiras.
    * Retorne as informações da pessoa correspondente ao receber um objeto com a propriedade id;
    * Retorne um array com as informações de todas as pessoas colaboradoras caso a função não receba parâmetro;
    * Lance um erro caso o id seja inválido.

  * Exemplos de uso da função getEmployeesCoverage:
    * Caso o parâmetro seja um objeto com nome e id, retorne as informações da pessoa colaboradora
    * Caso a função não receba parâmetros, retorne um array com a informação de todas as pessoas colaboradoras
    * Caso nenhuma pessoa seja encontrada com o nome, sobrenome ou id, lance um erro

10 - Faça o mapeamento geográfico dos animais de cada espécie e realize filtros de localização, nome em ordem alfabética e sexo.

  * A função getAnimalMap é responsável por categorizar os animais por localização, além de filtrá-los por região, nome e sexo a partir de um parâmetro. A estrutura do retorno da função é baseada na localização das espécies
  * Para isso:
    * Retorne a espécie de todos os animais categorizados por localização caso a função:
      * não receba parâmetro;
      * não receba o parâmetro {includeNames: true} e receba apenas o parâmetro {sex: female};
      * não receba o parâmetro {includeNames: true} e receba apenas o parâmetro {sex: female, sorted: true}.
    * Retorne a espécie e o nome dos animais caso a função receba apenas o parâmetro {includeNames: true};
    * Retorne a espécie e o nome dos animais em ordem alfabética caso a função receba o parâmetro {includeNames: true, sorted: true};
    * Retorne a espécie e o nome dos animais filtrado por sexo:
      * Retorne a espécie e o nome dos animais fêmeas, caso o parâmetro da função seja {includeNames: true, sex: female};
      * Retorne a espécie e o nome dos animais machos, caso o parâmetro da função seja {includeNames: true, sex: male};
    * Retorne a espécie e o nome dos animais filtrado por sexo e por ordem alfabética:
      * Retorne a espécie e o nome dos animais fêmeas em ordem alfabética, caso o parâmetro da função seja {includeNames: true, sex: female, sorted: true};
      * Retorne a espécie e o nome dos animais machos em ordem alfabética, caso o parâmetro da função seja {includeNames: true, sex: male, sorted: true};

11 - Obtenha 100% de cobertura de testes na função handlerElephants.

12- Obtenha ao menos 100% de cobertura de testes na função getOpeningHours.
