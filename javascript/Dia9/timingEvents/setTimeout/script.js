"use strict";

//SET TIMEOUT
// Recibe dos argumentos: un callback y un numero (tiempo en milisegundos)

// Cuando pasa el tiempo indicado, ejecuta el callback una vez

function sayHi(){
  console.log("hola")
}


setTimeout(sayHi, 2000)



/////

let intervalo = setInterval(() => console.log("adiós"), 1000)

setTimeout(() => clearInterval(intervalo), 3000)
