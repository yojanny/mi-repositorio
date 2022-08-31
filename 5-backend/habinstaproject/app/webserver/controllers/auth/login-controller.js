'use strict';

const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken'); // generar tokens de sesión seguros
const mysqlPool = require('../../../database/mysql-pool');

const authJwtSecret = process.env.AUTH_JWT_SECRET;
const jwtExpiresIn = +process.env.JWT_EXPIRES_IN;

async function validate(payload) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(3).max(30).required(),
  });
  
  Joi.assert(payload, schema);
}

async function login(req, res, next) {
  console.log('login-controller', req.atributoInventado);
  /**
   * 1. Validar datos
   * 2. Hacer consulta a la bbdd
   *  2.1 Validar que la password sea correcta
   * 3. Enviar respuesta al usuario
   */

  const accountData = { ...req.body };

  try {
    await validate(accountData);
  } catch (e) {
    return res.status(400).send(e);
  }

  /**
   * 2. Query a la bbdd para ver si el usuario existe
   */
  const sqlQuery = `SELECT id, email, password, avatar
    FROM users
    WHERE email = '${accountData.email}'`;
  
  let connection = null;

  try {
    connection = await mysqlPool.getConnection();
    const [rows] = await connection.query(sqlQuery);
    connection.release();

    if (rows.length !== 1) {
      return res.status(401).send();
    }

    const user = rows[0];
    
    // 2.1 Miramos si la password es correcta
    const isPasswordOk = await bcrypt.compare(accountData.password, user.password);

    if (isPasswordOk === false) { // !isPasswordOk
      return res.status(401).send();
    }

    const payloadJwt = {
      userId: user.id,
      // role: 'admin', // user.role o user.isAdmin
      role: null,
    };

    const token = jwt.sign(payloadJwt, authJwtSecret, { expiresIn: jwtExpiresIn });

    const userSession = {
      accessToken: token,
      avatar: `${process.env.HTTP_SERVER_DOMAIN}/uploads/users/${user.id}/${user.avatar}`,
      expiresIn: 3600,
    };

    /**
     * Necesitamos enviar a frontend (al cliente: browser, postman, android, etc) como mínimo
     * algo que sea único para este usuario, que no se puede "hackear" y que nos sirva para futuras
     * peticiones a nuestro backend saber quién es ese usuario, saber que es ese y no otro
     */


    res.send(userSession);
  } catch (e) {
    if (connection !== null) {
      connection.release();
    }

    console.error(e);
    
    return res.status(500).send(e);
  }
}

module.exports = login;
