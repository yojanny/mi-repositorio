'use strict';


console.log(`parametros pasados: ${process.argv}`);
console.log(`total parametros : ${process.argv.length}`);
process.argv.forEach((entry, index)=>{
    console.log(`Argumento: ${entry}`);
});