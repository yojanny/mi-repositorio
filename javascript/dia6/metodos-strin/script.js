"use strict";

let String = "¡Metodos son strings!"



console.log(String.length)

//TO LOWER CASE: pone todo en minúscula

console.log(string.toLowerCase());

console.log(string)


// Muy útil cuando queremos comparar dos strings y nos da igual si está en mayúsculas o no
const nombre = "Zoe"

//const userInput = prompt("Introduce tu nombre")

const userInput = "ZOE"

console.log(nombre.toLowerCase() === userInput.toLowerCase())


// TO UPPER CASE: lo mismo, pero pasando a mayúsculas

console.log(string.toUpperCase())



// INDEX OF: devuelve la primera posición dentro del string de un caracter o conjunto de caracteres
//Si no lo encuentra, devuelve -1

console.log(string.indexOf("o"))
console.log(string.indexOf("on"))
console.log(string.indexOf("m"))
console.log(string.toLowerCase().indexOf("m"))


//LAST INDEX OF: lo mismo pero desde el final
console.log(string.lastIndexOf("o"))


// REPEAT: repite el string el número de veces indicado

console.log(string.repeat(2))
console.log("hola ".repeat(5))


//REPLACE: sustituye un trozo de string por otro, la primera vez que aparece

console.log(string.replace("con", "de"))

console.log(string.replace("o", "a"))


// REPLACE ALL: sustituye un trozo de string por otro todas las veces que aparece

console.log(string.replaceAll("o", "a"))


// SPLIT: divide el string y devuelve un array con los trozos
// Podemos añadir un parámetro para indicar el separador

console.log(string.split())
console.log(string.split(" "))
console.log(string.split(""))


// SLICE: Devuelve una parte del string
//Indicamos el indice donde empieza (incluido) y el indice donde acaba (no incluido)

console.log(string.slice(4, 8))
