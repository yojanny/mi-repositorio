"use strict";

//Escribir una función que reciba un número
// Obtener la información de la casa que se corresponda con el número y a partir de ahí, sacar el NOMBRE de su lord.

//Puede haber errores:
///// Que lo introducido no sea un número
//// Que el número no se corresponda con ninguna casa
//// Que la casa no tenga lord actualmente


// Si ocurre un error, tenemos que gestionarlo



// Si el numero es 2 -> https://anapioficeandfire.com/api/houses/2

//Si el número es 233 -> https://anapioficeandfire.com/api/houses/233
async function getData(url){
    const res = await fetch(url)
    const data = await res.json()
  
    return data
  }

async function loor (number){

    const data = await getData(`https://anapioficeandfire.com/api/houses/${number}`)

    const current = await getData (data.currentLord)

    console.log(current.name)
    
   // const nombre = current.find(pers => pers.name)
     
    

    console.log(current)

    console.log(data)
}

loor(2)