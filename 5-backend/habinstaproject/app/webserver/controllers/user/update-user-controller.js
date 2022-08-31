'use strict';

const Joi = require('joi');
const mysqlPool = require('../../../database/mysql-pool');

async function validate(payload) {
  const schema = Joi.object({
    publicProfile: Joi.boolean().required(),
  });

  Joi.assert(payload, schema);
}

async function updateUser(req, res) {
  const { userId } = req.claims;
  const publicProfile = req.body.public_profile;

  /**
   * 1. Validar datos
   */
  try {
    const payload = {
      publicProfile,
    };

    await validate(payload);
  } catch (e) {
    return res.status(400).send(e);
  }

  /**
   * 2. Actualizar datos usuario
   */
  let connection = null;
  const query = `UPDATE users
    SET public_profile = ?
    WHERE id = ?`;

  try {
    connection = await mysqlPool.getConnection();
    await connection.query(query, [publicProfile, userId]);
    connection.release();

    return res.status(204).send();
  } catch (e) {
    if (connection) {
      connection.release();
    }

    console.log(e);
    return res.status(500).send(e.message);
  }
}

module.exports = updateUser;
