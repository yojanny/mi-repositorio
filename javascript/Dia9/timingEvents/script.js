"use strict"

//SET INTERVAL
// Función que recibe dos argumentos: un callback y un numero (tiempo en milisegundos)

// Cada vez que pase el tiempo indicado se ejecutará el callback infinitamente (o hasta que lo paremos)

function sayHi(){
  console.log("hola")
}

//setInterval(() => console.log("hola"), 2000)

setInterval(sayHi, 1000)



// PARAR UN INTERVALO
// Para pararlo usamos clearInterval. Recibe un argumento: el nombre del intervalo
// El intervalo debe estar guardado en una variable

let tiempo = 5;

let intervaloTiempo = setInterval(() => {
  tiempo--
  console.log(tiempo)
  
if(tiempo <= 0){
  clearInterval(intervaloTiempo)
}

}, 1000)

