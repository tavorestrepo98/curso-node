'use strict'

let nombre = 'Deadpool';
let real = 'Wade Winstone';

console.log(nombre + " " + real);
console.log(`${nombre} ${real}`);

function getNombbre() {
  return `${nombre} ${real}`;
}

console.log(`El nombre es: ${getNombbre()}`);
