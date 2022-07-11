"use strict";

//Promesa de la edad. Devuelve un número del 0 al 100, tardando entre 0 y 1 segundos
const agePromise = new Promise((resolve, reject) => setTimeout(() => resolve(Math.round(Math.random() * 100)), Math.random() * 1000)) 


function numero(edad){

    return new Promise(function (resolve, reject) {
        if (edad < 18) {
         reject("es menor")   
        }
    })
}

numero(17).then(function(data) {
    console.log(data)
}).catch(function(error){
console.error(error)
})