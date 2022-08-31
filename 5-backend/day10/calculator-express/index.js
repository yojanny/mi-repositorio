'use strict';

const express = require('express');
const rutasOperaciones = require('./operaciones-router/operaciones');

const app = express();
const port = 8000;

app.use(express.json());

/**
 * En Node.js un cliente (curl, browser, postman, etc) puede enviar datos al servidor usando 3 "sitios" del protocolo HTTP:
 *  - query parameters... ?n1=5&n2=1000&variableN-valueN
 *  - path parameters... /n1/5/n2/1000
 *  - request headers (no lo estamos usando todavía, ya veremos en qué casos se usa)
 *  - request body
 */


// http://localhost:8000/
app.get('/', (req, res) => {
  const body = {
    message: 'Hello World',
  };

  res.send(body);
});

app.get('/calculadora/sum', (req, res) =>  {
  console.log(req.query);

  const n1 = Number(req.query.n1);
  const n2 = Number(req.query.n2);

  const body = {
    resultado: n1 + n2,
  };

  return res.send(body);
});

// si quisiese que tanto sum2 como sub2 fuesen precedidas de: http://localhost:8000/api/calculadora/sum2
app.use('/api', rutasOperaciones);


// http://localhost:8000/calculadora/sub/1/5
// ejemplo desde el pokemon: http://localhost:8000/pokemons/pikachu
  // http://localhost:8000/pokemons/:pokemonName

/**
 * Si vemos el app.get, le estamos dando una ruta a express de forma que cuando el usuario acceda a esa ruta,
 * se ejecuta la función manejadora (callback) que tenemos asociada
 * Cómo sabe express cuál es la ruta del usuario? Si miramos el código de pokemon, vemos que hay UNA SOLA función manejadora
 * haciendo "ifs" para saber qué hay que hacer
 */

app.get('/calculadora/sub/:n1/:n2', (req, res) =>  {
  console.log(req.params);

  const n1 = Number(req.params.n1);
  const n2 = Number(req.params.n2);

  const body = {
    resultado: n1 - n2,
  };

  return res.send(body);
});

app.post('/calculadora/mul', (req, res) =>  {
  console.log(req.body);

  const body = {
    resultado: req.body.n1 * req.body.n2,
  };

  return res.send(body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});