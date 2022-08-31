'use strict';

const path = require('path');
const cors = require('cors');
const express = require('express');
const accountRouter = require('./routes/account-router');
const authRouter = require('./routes/auth-router');
const userRouter = require('./routes/user-router');
const postRouter = require('./routes/post-router');

const app = express();
app.use(cors());

/**
 * Si queremos servir contenido estático (imágenes, html, css, js, etc) express nos da un middleware
 * que lo hace solo, lo único que hay que pasarle es el nombre de la carpeta donde tengamos los contenidos
 * estáticos
 */
app.use(express.static(path.join(process.cwd(), 'public')));


app.use(express.json());

app.use((req, res, next) => {
  console.log('1. entrando request', req.url);

  req.atributoInventado = '1234';

  next();
});

app.use((req, res, next) => {
  console.log('2. continuando request', req.url);

  next();
});


/**
 * Como estamos haciendo una api, queremos que TODOS los endpoints de la api
 * vayan precedidos de /api, sino simplemente quedaría app.use('/', routerEjemplo)
 */
app.use('/api', accountRouter);
app.use('/api', authRouter);
app.use('/api', userRouter);
app.use('/api', postRouter);

app.use((req, res, next) => {
  // aqui solo entraría si el usuario introduce un endpoint/url que no existe
  console.log('NUNCA');

  return res.status(404).send();
});
/**
 * Me gustaria  que este archivo que se encarga del servidor web, tenga 
 * 2 métodos, un método listen y un método close
 */
async function listen(port) {
  const server = await app.listen(port);

  return server;
}
 
module.exports = {
  listen, // listen: listen
};
