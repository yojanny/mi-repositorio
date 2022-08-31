'use strict';

const fs = require('fs');
const fsPromises = require('fs/promises');

/**
 * create a directory mydir2 using fsPromises
 * create a directory mydir1 using fs
 */
 fsPromises.mkdir('./mydir1')
 .then(() => console.log('directory mydir1 created'))
 .catch((err) => console.error(`Error creating mydir1: ${err.message}`));

try {
 fs.mkdirSync('./mydir2');
 console.log('directory mydir1 created');
} catch (err) {
 console.error(`Error creating mydir1: ${err.message}`);
}

/**
 * Save next students data into a json file named students.json using fs
 * and students2.json using fsPromises
 * We need to convert the array to a string (json stringify)
 * and us fs to store it
 */
const students = [{
  name: 'Alejandro',
  age: 21,
  subjects: ['js', 'css', 'db'],
}, {
  name: 'Maria',
  age: 24,
  subjects: ['os', 'js', 'alg'],
}];

try {
  fs.writeFileSync('./students.json', JSON.stringify(students));
  console.log('students.json created');
} catch (err) {
  console.error(`Error creating students.json file: ${err.message}`);
}

fsPromises.writeFile('./students2.json', JSON.stringify(students))
  .then(() => console.log('students.json created'))
  .catch((err) => console.error(`Error creating students.json file: ${err.message}`));

