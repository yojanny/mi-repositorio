"use strict";
//TEMPLATE STRINGS
// LLevan comillas francesas ``
//Permiten saltos de linea
//Permiten inyectar variables o codigo simple con ${}

let frase = `Esto es una template string
puedo poner saltos de linea`
console.log(frase)

const nombre = "Zoe"

let edad = 28

console.log("Me llamo " + nombre + " y tengo " + edad + " años.")


console.log(`Me llamo ${nombre} y tengo ${edad} años`)

let numA = 6;
let numB = 4;
let operador ="+"

console.log("El resultado de sumar " + numA + " " + operador + " " + numB + " es " + (numA+numB)) 

console.log(`El resultado de ${numA} ${operador} ${numB} es ${numA+numB}`)
