'use strict';

console.log(`parametros pasados: ${process.argv}`);
console.log(`total parametros: ${process.argv.length}`);

function muestraArgumento(entry, i) {
  console.log(`Argumento ${i}: ${entry}`);
}

process.argv.forEach(muestraArgumento);
