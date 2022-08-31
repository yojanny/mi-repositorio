'use strict';

/**
 * https://nodejs.org/dist/latest-v16.x/docs/api/path.html
 */
 const path = require('path');

 const environmentVariables = process.env.PATH;

console.log(environmentVariables.split(path.delimiter));


/**
 * path.dirname devuelve el nombre del directorio
 * /Users/jose.mato/Sites/hackabos/bootcamp-jsb12co/5-backend/day88/pathmodule
 */
 console.log(path.dirname('/Users/jose.mato/Sites/hackabos/bootcamp-jsb12co/5-backend/day8/pathmodule'));


 /**
 * Extension de archivo
 */
console.log(path.extname('index.html'));
console.log(path.extname('foto.jpeg'));
console.log(path.extname('video.mp4'));
console.log(path.extname('fichero.pdf'));

/**
 * Path absoluto / relativo
 */
 console.log(path.isAbsolute('/home/jose'));
 console.log(path.isAbsolute('./jose')); // es ruta relativa, no absoluta, por lo tanto false
 console.log(path.isAbsolute('C:/foo/..'));   // true en windows
 console.log(path.isAbsolute('C:\\foo\\..')); // true en windows)
 