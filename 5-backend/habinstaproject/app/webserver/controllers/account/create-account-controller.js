'use strict';

const bcrypt = require('bcrypt'); // passwords seguras
const Joi = require('joi'); // validacion datos
const mailgun = require('mailgun-js');
const mysqlPool = require('../../../database/mysql-pool');

async function sendEmail(userEmail) {
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  });
  
  const data = {
    from: 'welcome@habinstaproject.com',
    to: userEmail,
    subject: 'Bienvenido',
    text: 'Ya te has registrado, loguéate en nuestra app!'
  };
  
  mg.messages().send(data, function (error, body) {
    if (error) {
      console.error('error', error);
    }
    console.log(body);
  });
}

async function validate(accountData) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(3).max(30).required(),
  });
  
  Joi.assert(accountData, schema);
}

async function createAccount(req, res) {
  /**
   * 1. Validar los datos que nos llega. En este caso, el email y la password
   * 2. Insertar datos (o hacer queries a la bbdd)
   * 3. Enviar respuesta al usuario
   * 
   */
  const accountData = { ...req.body }; // hacemos siempre una copia del req.body para evitar efectos colaterales
  console.log(req.body);

  try {
    await validate(accountData);
  } catch(e) {
    return res.status(400).send(e);
  }
  
  /**
   * Preparamos los datos para insertar en mysql
   */
  const now = new Date();
  const createdAt = now.toISOString().replace('T', ' ').substring(0, 19);

  let connection = null;
  try {
    connection = await mysqlPool.getConnection();

    /**
     * el segundo parámetro son los saltos o rondas... es un número que afectará al rendimiento (velocidad de cálculo)
     * del algoritmo bcrypt, a número más alto (16 por ejemplo) más timepo que tardará. 10 saltos es correcto, buen
     * balance entre seguridad/velocidad de cálculo
     */
    const securePassword = await bcrypt.hash(accountData.password, 10);
    const user = {
      email: accountData.email,
      password: securePassword,
      created_at: createdAt,
    };

    // const [resultadoQuery] = await connection.query('INSERT INTO users SET ?', user);
    await connection.query('INSERT INTO users SET ?', user);
    connection.release();

    res.status(201).send();

    return sendEmail(accountData.email);
  } catch (e) {
    if (connection !== null) {
      connection.release();
    }
    
    /**
     * e es una instancia de Error, en este caso, podría darse 2 situaciones:
     *  - "e" es un error de mysql, por lo que tendremos el e.code, e.errno, e.message. e.sql, e.sqlState, etc
     *  - "e" sea un error de javascript (new Error) con lo cuál siempre tendríamos el e.message
     */
    console.error(e);

    if (e.code === 'ER_DUP_ENTRY') {
      return res.status(409).send();
    }

    return res.status(500).send(e);
  }
}

module.exports = createAccount;
