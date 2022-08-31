'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;

/**
 * Vamos a hacer una API, con solo 3 endpoints (urls):
 * GET /pokemons Devuelve todos los pokemons
 * GET /pokemons/:pokemonName
 * DELETE /pokemons/:pokemonName
 */
 const pokemons = [{
  name: 'pikachu',
  type: 'electric',
  attacks: [
    'attack1',
    'attack2',
  ],
  deletedAt: null,
}, {
  name: 'bulbasaur',
  type: 'grass-poison',
  attacks: [
    'latigo cepa',
    'hoja afilada',
  ],
  deletedAt: null,
}];

function send404NotFound(res) {
  res.writeHead(404, {
    'Content-type': 'text/html',
  });

  return res.end('<h1>Pokemon not found</h1>');
}

/**
 * Método que procesa la request de usuario y realiza la acción teniendo en cuenta:
 * * Si el verbo http es:
 *  GET /pokemons Devuelve el listado de todos los pokemons
 *  GET /pokemons/:pokemonName Devuelve los datos del pokemon dado o devuelve Pokemon no encontrad
 *  DELETE /pokemons/:pokemonName Elimina un pokemon de la lista
 */
function handleRequest(req, res) {
  const method = req.method; // GET, POST, PUT, PATCH, DELETE, ...
  const url = req.url; // /pokemons
  console.log(method, url);

  if (method === 'GET' && url === '/pokemons') {
    res.writeHead(200, {
      'Content-type': 'application/json',
    });
    
    // necesitamos buscar todos los pokemons que no fuesen borrados
    const pokemonsNoBorrados = pokemons.filter((pokemon) => pokemon.deletedAt === null);

    return res.end(JSON.stringify(pokemonsNoBorrados));
  }

  if (method === 'GET' && url.startsWith('/pokemons/')) {
    // url tiene un valor como /pokemons/:pokemonName como /pokemons/pikachu
  
    const pokemonName = url.split('/').pop().toLowerCase();
    
    // buscar en el array de pokemons si existe el pokemon con este nombre
    
    const pokemonEncontrado = pokemons.find((pokemon) => pokemon.name === pokemonName);
  
    if (!pokemonEncontrado || pokemonEncontrado.deletedAt !== null) {
      return send404NotFound(res);
    }
  
    res.writeHead(200, {
      'content-type': 'application/json',
    });
  
    return res.end(JSON.stringify(pokemonEncontrado));
  }

  if (method === 'DELETE' && url.startsWith('/pokemons/')) {
    const pokemonName = url.split('/').pop().toLowerCase();

    const pokemonEncontrado = pokemons.find((pokemon) => pokemon.name === pokemonName);

    /*
    if (!pokemonEncontrado) {
      res.writeHead(404, {
        'Content-type': 'text/html',
      });
    
      return res.end('<h1>Pokemon not found</h1>');
    }
    */

    if (pokemonEncontrado) {
      pokemonEncontrado.deletedAt = new Date().toISOString();
    }

    res.writeHead(204);
    return res.end();
  }

  // cuando un usuario introduce una url que no existe
  return send404NotFound(res);
}

const server = http.createServer(handleRequest);

server.listen(port, hostname, () => {
  console.log(`listening on port ${port}`);
});
