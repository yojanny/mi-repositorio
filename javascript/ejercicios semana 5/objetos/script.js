"use strict";

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};

// para recorrer un objeto se puede utilizar for in.

function nombre(persona){
    for (const key in persona) {
        const element = persona[key];
        if(element >= 18){
            console.log(key + " Es mayor de edad")
        } else{
            console.log(key + " Es menor de edad")
        }
            
            //console.log(element)
        
    
   

   }
    // console.log(people)
}



console.log(nombre(people))