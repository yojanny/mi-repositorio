"use strict";

const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

function lista(nombre){
    let copia = []
    for(let i= 0; i < nombre.length; i++){

        if (copia.indexOf(nombre[i]) === -1){
                
            copia.push(nombre[i])
            
        }
     
     
    }
   console.log(copia) 
}

lista(names)