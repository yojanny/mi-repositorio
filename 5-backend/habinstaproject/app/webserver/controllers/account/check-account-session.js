'use strict';

const jwt = require('jsonwebtoken');

const authJwtSecret = process.env.AUTH_JWT_SECRET;

async function checkAccountSession(req, res, next) {
  /* req.headers = {
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI0LCJpYXQiOjE2NTg0Mjc2MTIsImV4cCI6MTY1ODQzMTIxMn0.pceK1t1lWOBr_9f-WRdkl0HcIn5KV-Ej2P7NTo26p-Y',
    'user-agent': 'PostmanRuntime/7.29.0',
    'postman-token': '95435333-1f4c-4b84-ac9c-469c26beb6e7',
    host: 'localhost:9000',
    'accept-encoding': 'gzip, deflate, br',
    connection: 'keep-alive',
    'content-type': 'multipart/form-data; boundary=--------------------------024894029230828592576279',
    'content-length': '449324'
  }
  */

  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(401).send();
  }

  const [prefix, token] = authorization.split(' ');
  if (prefix !== 'Bearer' || !token) { // token === '' || token === undefined
    return res.status(401).send();
  }
  
  /**
   * Aqui sabemos que "token" es un string y contiene caracteres PERO
   * necesitamos saber si es un token jwt VÁLIDO
   */
  try {
    const payload = jwt.verify(token, authJwtSecret);

    console.log(`userId: ${payload.userId}`);
    console.log(`user role: ${payload.role}`);

    req.claims = {
      userId: payload.userId,
      role: payload.role || null,
    };

    return next();
  } catch (e) {
    console.error(e);
    return res.status(401).send();
  }
}

module.exports = checkAccountSession;