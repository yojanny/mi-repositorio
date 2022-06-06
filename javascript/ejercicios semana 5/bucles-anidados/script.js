"use strict";


const catalogo = [
    "margarita",
    "cuatro quesos",
    "prosciutto",
    "carbonara",
    "barbacoa",
    "tropical",
  ];

  function pizza(ingredientes){
      
    for(let i = 0; i < ingredientes.length; i++){

    let temporal= i+1;

    if(temporal < ingredientes.length){
      
        console.log(` ${ingredientes[i]} y ${ingredientes[temporal]}`)
    }
    
  }
  
  
    
  }
  pizza(catalogo)