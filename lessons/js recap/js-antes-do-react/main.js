// Nullish Coalescing Operator
// Operador pra lidar com valores nulos

const idade = 0;

// Uso do operador ou
// O primerio valor é valido? Senão, uso o outro
// Se colocar a idade == 0, o "ou" usa o valor "não findormado"
document.body.innerText = `Sua idade é: ${idade || "Não informado"}`;

// Nulish coalescing operator
document.body.innerHTML = `<h1>Sua idade é ${idade ?? 'Não informado'}</h1>`


const user = {
  name: 'Joao',
  age: 20,
  address: {
    st: 'Rua das ruas',
    number: 23,
    zip : {
      code: 12345678910,
      city: 'Sambario do Sapucaí'
    },
    // showFullAddress() {
    //   return `${user.address.st} - ${user.address.zip.code}`
    // }
  },
  nickname: 'Jao'
}

// Operador in para verificar a existencia de um elemento em um objeto
document.body.innerText = ('name' in user);

// Uma forma nem tão boa pra verificar os atributos de um objeto
document.body.innerText = Object.values(user);

// Um jeito melhor de mostrar
document.body.innerText = JSON.stringify(Object.values(user));

// Desestruturacao de um objeto

// É o mesmo que const address = user.address
// Isto pq usamos os mesmos nomes entre as variaveis e atributos
// Coloquei um valor default em nickname
const { address, age, nickname: apelido = 'João Pedrinho' } = user // Mudei o nome de idade pra age
document.body.innerText = JSON.stringify({ address, age, apelido })

function mostraIdade({ idade }) {
  return idade;
}

document.body.innerText = mostraIdade(user);

// Rest operator
//const { name, ...rest } = user;

// Mostra todo o resto dos atributos, menos o nome
//document.body.innerText = JSON.stringify(rest);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];

const [ first, , third, ...rest ] = arr;
document.body.innerText = JSON.stringify({ first, third, rest });

// Short syntax
const nome = 'Joao';
const anos = 20;

// Não preciso usar os dois pontos se a propriedade e o valor tiverem os mesmos nomes
const usuario = {
  nome,
  anos
}

// Optional chaining

// Muito grande
// document.body.innerText = user.address
//   ? user.address.zip
//     ? user.address.zip.code
//     : 'Não informado'
//   : 'Não informado'

// Com optional chaining
// Coloco ponto de interrogacao nos atributos que talvez nao existam

document.body.innerText = user.address?.zip?.code ?? 'Não informado';

document.body.innerText = user.address?.showFullAddress?.() ?? 'Função não existe';

const key = 'name';
document.body.innerText = user?.[key] ?? 'Nome não existe';

// Métodos de array

// map, filter, every, some, find, findIndex, reduce

const array = [1, 2, 3, 4, 5];

// Um modo de percorrer
// for (const i of array) {
//   document.body.innerText += i;
// }

// array.forEach(item => {
//   document.body.innerText += item;
// })

// map

// map é ótimo para retornar valores (e atualizar elementos de um vetor)
// o novoArray sempre terá o mesmo número de elementos do array original

// const novoArray = array.map(item => {
//   if (item % 2 == 0) return item * 10;
//   return item;
// })

// filter

// Não altera a estrutura do array original, mas retorna uma parte dele
//const novoArray = array.filter(item => item % 2 != 0). map(item => item * 10);

// every

// Rertorna true se todos os elementos satisfazerem uma condição e, caso contrário, false

const todosSaoNumeros = array.every(item => typeof item === 'number');

// some

// Se pelo menos um satisfazer a condição, true, caso contrário, false
const peloMenosUmNaoENumero = array.some(item => typeof item !== 'number');

// find

// Retorna a primeira ocorrencia da condição
const par = array.find(item => item % 2 == 0);

// Retorna o indice desta primeira ocorrencia
const indexPar = array.findIndex(item => item % 2 == 0);

// reduce - retorna uma nova estrutura de dados a partir de um array

// Aceita uma função como primeiro parâmetro
// O segundo parametro é o valor inicial que a estrutura de dados vai apresentar
// Para soma, o valor inicial é 0, mas se fosse um objeto, seria {}

// o acc (accumulator) vai receber o valor inicial da função reduce
const soma = array.reduce((acc, item) => {
  return acc + item
}, 0)

document.body.innerText = JSON.stringify(soma);


// Template Literals
const nomes = 'Joãoão'
const message = `Bem vindo, ${nomes ?? 'visitante'}`

document.body.innerText = message;

// Promises

/* 
Quando chamo a função dois números, passando um parâmetro a e b,
eu retorno uma promessa de que dará certo ou não. Essa demora 2 segundos para se resolver e aí retorna os dois números.
*/

const somaDoisNumeros = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000)
  })
};

// Se ocorreu tudo certo: then
// Se teve algum problema: catch

somaDoisNumeros(7, 3)
  .then(soma => {document.body.innerText = soma})
  .catch(err => {console.log(err)});

// exemplo mais real de promise

// como eu retorno a promise do json, eu posso usar o .then() direto no .then anterior e aí fazer o console.log
fetch('https://api.github.com/users/diego3g')
  .then(response => {
    return response.json();
  })
  .then(body => {
    console.log(body);
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    // executa independentemente se deu certo ou errado
    console.log('deu');
  })

// Posso me utilizar de funções assincronas para fazer a mesma coisa que o código acima

// Toda função que usa um async vira uma promise

async function buscaDadosNoGithub() {
  try {
    const response = await fetch('https://api.github.com/users/diego3g');
    const body = await response.json();
    return body.name;

  } catch (err) {
    console.log(err);
  } finally {
    console.log('Fechou.')
  }
}

// Como se tornou uma promise também, para imprimir o nome, preciso usar o then e o catch

buscaDadosNoGithub().then(name => {
  console.log(name);
});