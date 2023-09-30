// Array normal
const array = [6, 7, 8 , 9, 10];

// Objetivo: elevar todos os elementos ao quadrado
// Usando map:
const squareArray = array.map(number => number * number);
console.log(`Array inicial: [${array}]\nArray após o map: [${squareArray}]`);

// Array normal
const names = ["guilherme", "joão", "karine", "pedro", "sabrina"];

// Objetivo: por em maiúsculo a primeira letra de cada string
// Usando map:
const newNames = names.map(name => name[0].toUpperCase() + name.substring(1));
console.log(newNames);


// Array normal
const pokemon = ["Charmander", "Bulbasaur", "Squirtle"];
const paragraph = pokemon.map(poke => `<p>${poke}</p>`);
console.log(paragraph);