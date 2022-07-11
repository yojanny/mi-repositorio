"use strict";


//crear una función que reciba una array de objetos (equipos y puntos conseguidos) y 
//muestre por consola el ** nombre ** del que más y del que menos puntos hayn conseguido, 
//con sus respectivos ** totales **.

// puntuaciones
const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];

function totalPuntos(lista){
    let caja = [];
    for(let i = 0; i < lista.length; i++){
        let puntos = lista[i].puntos;
        let resultado = puntos.reduce(function (a,b) {
            return a + b;{}
           
        })
        caja.push({nombre: lista[i].equipo, puntos: resultado})
  console.log(lista[i].equipo, resultado);
    }
    console.log(caja.sort())

}

console.log(totalPuntos(puntuaciones));

