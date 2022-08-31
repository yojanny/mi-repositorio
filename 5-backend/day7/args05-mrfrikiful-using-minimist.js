'use strict';

const parseArgs = require('minimist');

/**
 * Haz un juego que diga frases frikis aleatorias
 * se deberá de indicar un número entre 1 y 3 como parámetro:
 * ./nodejs programa -t 3
 */
const frases = [
  'Tu estupidez es igual a π elevado a infinito.',
  'Por personas como tú, el champú lleva instrucciones.',
  'Si te pierdes tres veces en Ikea, te convalidan el camino de Santiago.',
  'Estar contigo se me hace más largo que un partido de Oliver y Benji.',
  '¿Y tú media naranja? – No tengo, soy un limón salvaje.',
  'Los ordenadores son buenos siguiendo instrucciones, no leyendo tu mente.',
  'Sin café no soy persona, soy un gremlin recién mojado.',
  'Es curiosa la amabilidad de la gente cuando estás muerto',
  'Si quieres un amigo, cómprate un perro',
  '¿Hablas conmigo?',
  'Dar cera, pulir cera',
  'Mantén cerca a tus amigos, pero aún más cerca a tus enemigos',
  '¡Quítame tus sucias manos de encima, mono asqueroso! ',
];

const args = parseArgs(process.argv);

if (args.t === undefined) {
  console.error(`${__filename} <-t NUMERO_DE_FRASES>`);
  process.exit(1);
}

let maxNumber = null;
try {
  maxNumber = parseInt(args.t, 10);
} catch (e) {
  console.error(`${__filename} <-t NUMERO_DE_FRASES>`);
  console.error(e);
  process.exit(1);
}

if (maxNumber === 0 || isNaN(maxNumber) || maxNumber > 3) {
  console.error(`Error: Debe introducir un número entre 1 y 3. Valor introducido: ${args.t}`);
  process.exit(1);
}

function generateRandomNumberBetween(min, max) {
  // const randomIndex = Math.floor(min + Math.random() * (max - min));
  const randomIndex = Math.round(Math.random() * max);

  return randomIndex;
}

for (let i = 0; i < maxNumber; i++) {
  const index = generateRandomNumberBetween(0, frases.length - 1);

  console.log(frases[index]);
}
