'use strict';

/**
 * Dotenv es una libreria, que nos va a facilitar trabajar con configuraciones que cambian entre entornos
 * ejemplo: datos acceso a una bbdd, puertos de escucha
 * 
 * Cuando estamos desarrollando, estamos en nuestro ordenador local, donde seguramente tengamos una MySQL
 * donde el host sea localhost, el puerto sea 3306, el user sea "root" o "demo" y la password algo como "1234".
 * Esto en producción (que es otro entorno) no pasará porque:
 *  - Tendrá una clave más fuerte
 *  - El host no será localhost, puede ser algo como (me lo invento): hackaboss.mysql.azure.websites.net 
 *  - El puerto seguramente sea el 3306, PERO podría no serlo
 *  - Y el nombre de la bbdd puede ser "habinstaproject" O el proveedor de MySQL igual nos genera una con un nombre
 *  aleatorio
 * 
 * Entonces, vemos que estos datos cambian según el entorno. NO PODEMOS en nuestro código HARDCODEAR estos parámetros/variables/datos
 * porque sino cuándo movamos el código a otro entorno, no funcionará
 * 
 * Para ayudarnos a desarrollar, en local tendremos un archivo .env, donde en cada línea pondremos una variable
 * de entorno con el format NOMBRE_VARIABLE=valor
 * y la librería dotenv se encargará de coger el contenido de este fichero, leerlo línea a línea y ponernos cada NOMBRE_VARIABLE
 * con su valor disponible como variable d entorno, para que podemos acceder a ella a través de process.env.NOMBRE_VARIABLE
 * 
 * Se usan variables de entorno para gestionar los datos que cambian entre entornos (está extendida esta práctica)
 */
require('dotenv').config();

/**
 * Este es el archivo principal
 * Este archivo estará encargado de inicializar la aplicación, es decir:
 * 1. Conectarse a mysql
 * 2. Inicializar el servidor web
 */

 const mysqlPool = require('./app/database/mysql-pool');
const webServer = require('./app/webserver');

const port = process.env.PORT;

if (!port) {
  console.error('PORT must be defined as environment variable');
  process.exit(1);
}

process.on('unhandledRejection', (err) => {
  console.error(err);
});

async function initApp() {
  try {
    await mysqlPool.connect();
    await webServer.listen(port);

    console.log(`webserver listening at port ${port}`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

initApp();
