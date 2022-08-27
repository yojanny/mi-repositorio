'use strict'

 

function muestraArgumentos (entry, i){
    console.log(`Argumento ${i}: ${entry}`);
}

process.argv.forEach(muestraArgumentos);

