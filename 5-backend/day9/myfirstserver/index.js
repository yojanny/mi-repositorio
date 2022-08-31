'use strict';

const http = require('http');

/**
 * Socket = bind(hostname, port)
 */
const hostname = 'localhost';
const port = 8000;

function requestHandler(req, res) {
  /**
   * 1. Devuelve las cabeceras http al usuario, usualmente sería:
   *  - http status code (200 si todo va ok)
   *  - Content-type: el tipo de archivo que estamos devolviendo
   *    - text/plain para text plano (un string del tamaño que sea)
   *    - application/json para un json
   * 
   * 2. Devolver el body response
   */
  // paso 1
  res.writeHead(200, {
    // 'content-type': 'text/plain',
    'content-type': 'application/json',
  });

  // paso 2
  const body = {
    message: 'hola mundo',
  };

  /**
   * Por defecto, el protocolo http espera como respuesta una de dos:
   *  - o un string
   *  - o un archivo binario
   * 
   * Cuando queremos devolver JSON, lo enviamos como un string, entonces el objeto JSON / Arrays, tenemos
   * que "stringificarlo" con el método JSON.stringify y evidentemente poner el content type acorde
   */
  res.end(JSON.stringify(body));
}

const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
  console.log(`server listening at port ${port}`);
});
