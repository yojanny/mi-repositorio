'use strict';

const prompt = require('prompt-sync')();
/**
 * Haz un juego que diga frases frikis aleatorias
 * El progrmaa nos pedirá que introduzcamos el número de frases que queremos, 
 * y tendrá que ser entre 1 y 3
 * ./nodejs programa
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

let maxNumber = 0;

try {
  const value = prompt('Introduzca número máximo frases (entre 1 y 3): ');
  maxNumber = parseInt(value, 10);

  if (isNaN(maxNumber)) {
    throw new Error(`Debe introducir un número entre 1 y 3. Valor introducido: ${value}`);
  }
} catch (e) {
  console.error('Error', e.message);
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