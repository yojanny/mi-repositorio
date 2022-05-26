"use strict"


// podemos saber que typi de dato es algo usando typeof

/* String: cadenas de texto */
/* se escriben entre comillas
comillas('simples' o "dobles" ) */
/* no pueden tener saltos de linea (ms adelante veremos otras modernas que si) */

const mifrase = "Estoy 'escribiendo' \n una fase"

const otraFrase = 'Esta es "otra" frase'

console.log(mifrase)

console.log(typeof mifrase)

/*  Number: numeros */
/* JavaScript no distingue entre valores enteros y de punto flotantes (con decimales) */


const minumero = 4;
const midecimal = 4.4;

console.log(minumero, midecimal)

console.log(typeof minumero, typeof midecimal)

/* BOOLEAN: ocupan 1bit  posibles (0/1, si / no, verdadero/falso*/
/* van sin comillas, son palabras reservadas */

const miVerdadero = true;
const mifalso = false;

console.log(miVerdadero, mifalso)
console.log(typeof miVerdadero, typeof mifalso)

/*  UNDEFINED: sin valor.
este tipo de dato NUNCA lo creamos, se genera solo cuando
algo no tiene un valor asignado. */

let miUndefined;
console.log(miUndefined)

/* NULL:sin valor a proposito.
Asignamos null cuando queremos que algo no tenga valor 
va sin comillas*/

const variableVacia = null;
console.log(variableVacia)
console.log(typeof variableVacia, miVerdadero)
















const nombre = "yojanny"

let edad = 31

console.log(nombre)

console.log(edad)