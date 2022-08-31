'use strict';

const Joi = require('joi');
const mysqlPool = require('../../../database/mysql-pool');

async function validate(payload) {
  const schema = Joi.object({
    postId: Joi.number().integer().positive().required(),
  });

  Joi.assert(payload, schema);
}

async function dislikePost(req, res) {
  const { userId } = req.claims;
  const postId = req.params.postId;

  /**
   * 1. Validar datos
   */
  try {
    const datosAvalidar = {
      postId,
    };
    await validate(datosAvalidar);
  } catch (e) {
    return res.status(400).send(e);
  }

  /**
   * 2. Eliminar fila de la tabla likes
   * // DELETE FROM likes WHERE user_id = ? AND post_id = ?
   */
  let connection = null;
  try {
    const query = `DELETE FROM likes WHERE user_id = ? AND post_id = ?`;
    connection = await mysqlPool.getConnection();
    await connection.execute(query, [userId, postId]);
    connection.release();

    return res.status(201).send();
  } catch (e) {
    if (connection) {
      connection.release();
    }

    console.error(e);
    return res.status(500).send(e.message);
  }
}

module.exports = dislikePost;
