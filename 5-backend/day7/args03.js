'use strict';

/**
 * Send your name by terminal as parameter, ejemplo:
 * node args03.js Jose
 *  Output: Hola Jose
 */

const totalArguments = process.argv.length;

if (totalArguments < 3) {
  console.error(`Error: You must indicate your name as parameter`);
  process.exit(1);
}

const name = process.argv[2];

console.log(`Hi ${name}`);
