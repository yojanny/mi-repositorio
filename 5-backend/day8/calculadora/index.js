'use strict';

const parseArgs = require('minimist');
/*
const suma = require('./operaciones/sum');
const sub = require('./operaciones/sub');
const mul = require('./operaciones/mul');
const div = require('./operaciones/div');
*/
// por defecto si no especicamos el nombre del fichero, se cargaría el index.js
// en este caso ./operaciones/index o lo que es lo mismo ./operaciones/index.js
const operaciones = require('./operaciones');

/**
 * node index.js <--op operacion> <--n1 number1> <--n2 number2>
 * Donde operacion es:
 *  - sum
 *  - sub
 *  - mul
 *  - div
 * Y n1 y n2 son dos números
 * Ejemplo:
 *  node index.js --n1 15 --n2 3 --op div
 *    output: 5
 * Si se intenta dividir un número entre 0, hay que finalizar el programa diciendo que no se puede
 * dividir por cero
 */

const args = parseArgs(process.argv);

/*
process.argv[2] // --n1
process.argv[3] // 1000
process.argv[4] // --n2
process.argv[5] // 500
process.argv[6] // --op
process.argv[7] // div

Minimist coge el string entero de argumentos "--n1 1000 --n2 2 --op div"
Y lo convierte a un objeto fácil y sencillo de entender tal que así:
{
  n1: 1000,
  n2: 2,
  op: "div"
}
*/

/**
 * Object destructuring
 * https://dmitripavlutin.com/javascript-object-destructuring/
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

const {
  op,
  n1,
  n2,
} = args;
// console.log(args);
// const op = args.op; const n1 = args.n1; const n2 = args.n2;

// const validOperationns = ['sum', 'sub', 'mul', 'div']
if (!operaciones.operacionesValidas.includes(op)) {
  console.error('Error, you must enter a valid operation: sum, sub, mul or div');
  process.exit(1);
}

if (!Number.isFinite(n1) || !Number.isFinite(n2)) {
  console.error(`Error, n1 and n2 must be Numbers. Current values: ${n1}, ${n2}`);
  process.exit(1);
}

if (op === 'div' && n2 === 0) {
  console.error('Error, for operation division, n2 cannot be zero');
  process.exit(1);
}
/*
function sub(n1, n2) {
  return n1 - n2;
}
*/
/**
 * Multiply 2 numbers
 * @param {Number} n1 Number 1
 * @param {Number} n2 Number 2
 * @returns Number result
 */
/*
function mul(n1, n2) {
  return n1 * n2;
}

function div (n1, n2) {
  return n1 / n2;
}
*/
// op?
let result = 0;
switch(op) {
  case 'sum':
    result = operaciones.sum(n1, n2);
    break;
  case 'sub':
    result = operaciones.sub(n1, n2);
    break;
  case 'mul':
    result = operaciones.mul(n1, n2);
    break;
  case 'div':
    result = operaciones.div(n1, n2);
    break;
}

console.log(`Resultado de ${op}: ${result}`);
