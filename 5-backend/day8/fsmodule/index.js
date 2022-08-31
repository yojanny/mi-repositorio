'use strict';

const fs = require('fs'); // callback version
const fsPromises = require('fs/promises');

/**
 * copy file demo1.txt into demo1copy.txt using fsPromises
 * copy file demo1.txt into demo2copy.txt using fs
 */
fsPromises.copyFile('./demo1.txt', 'demo1copy.txt')
  .then(() => console.log('done copy demo1.txt into demo1copy.txt'))
  .catch((err) => console.error('error copy demo1.txt into demo1copy.txt'));

try {
  fs.copyFileSync('./demo1.txt', 'demo2copy.txt');

  console.log('done copy demo1.txt into demo2copy.txt');
} catch(e) {
  console.log('error copy demo1.txt into demo2copy.txt', err);
}


fsPromises.unlink('./demo1copy.txt')
  .then(() => console.log('demo1copy.txt deleted'))
  .catch((err) => console.error('error deleting demo1copy.txt'));

try {
  fs.unlinkSync('demo2copy.txt');

  console.log('demo2copy.txt deleted');
} catch (e) {
  console.error('error deleting demo2copy.txt');
}