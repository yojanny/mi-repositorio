'use strict';

const http = require('http');
const fs = require('fs');

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
  
  res.writeHead(200, {
    // 'content-type': 'text/plain',
    'content-type': 'text/html',
  });

  
  fs.readFile('./index.html', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404, {
        'content-type': 'text/plain',
      });

      return res.end(err.message);
    }

    res.writeHead(200, {
      'content-type': 'text/html',
    });

    res.end(data);
  });
}

const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
  console.log(`server listening at port ${port}`);
});
