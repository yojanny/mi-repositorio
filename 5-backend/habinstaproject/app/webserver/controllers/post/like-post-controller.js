'use strict';

const Joi = require('joi');
const mysqlPool = require('../../../database/mysql-pool');

async function validate(payload) {
  const schema = Joi.object({
    postId: Joi.number().integer().positive().required(),
  });

  Joi.assert(payload, schema);
}

async function likePost(req, res) {
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
   * 2. Insertar datos en table like
   * // INSERT INTO likes(user_id, post_id, created_at) VALUES ()
   */
  let connection = null;
  try {
    const now = new Date();
    const query = `INSERT INTO likes SET ?`;

    const likeData = {
      user_id: userId,
      post_id: postId,
      created_at: now,
    };

    connection = await mysqlPool.getConnection();
    await connection.query(query, likeData);
    connection.release();

    return res.status(201).send();
  } catch (e) {
    if (connection) {
      connection.release();
    }

    if (e.code === 'ER_DUP_ENTRY') {
      return res.status(201).send();
    }

    console.error(e);
    return res.status(500).send(e.message);
  }

  res.send('hola desde likePost controller');
}

module.exports = likePost;
