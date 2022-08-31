'use strict';

/**
 * 
 * @param {Array} arrayDeArgumentos ['-t', 5, '-x', 2]
 * @returns {Object} parseo { t: 5, x: 2 }
 */
 function parseaArgumentos(arrayDeArgumentos) {
  const parseo = {};

  const totalPairs = arrayDeArgumentos.length;
  for (let i = 0; i < totalPairs; i+=2) {
    const key = arrayDeArgumentos[i];
    const value = arrayDeArgumentos[i + 1];

    parseo[key] = value;
  }

  return parseo;
}

// node script.js -t 5 -x 2
// const hayX = process.argv[2]
// const posibleValorX = process.argv[3]

// si hayX y posibleValorX entonces -> ejecutar nuestro codigo lo que necesitemos
const test = ['-t', '5', '-x', 2, '-n', 'hola'];

const parseo = parseaArgumentos(test);

console.log(parseo);
