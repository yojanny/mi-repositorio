'use strict';

const Joi = require('joi');
const mysqlPool = require('../../../database/mysql-pool');

async function validate(payload) {
  const schema = Joi.object({
    postId: Joi.number().integer().positive().required(),
    content: Joi.string().trim().required(),
  });

  Joi.assert(payload, schema);
}

async function createComment(req, res) {
  const postId = req.params.postId;
  const content = req.body.content;
  const userId = req.claims.userId;

  try {
    const commentData = {
      content,
      postId,
    };

    await validate(commentData);
  } catch (e) {
    console.error(e);
    return res.status(400).send(e);
  }

  let connection = null;
  try {
    connection = await mysqlPool.getConnection();
    const query = `INSERT INTO comments SET ?`;
    await connection.query(query, {
      content,
      user_id: userId,
      post_id: postId,
    });
    connection.release();

    // si tuviésemos un endpoint para poder ver UN SOLO COMENTARIO, lo enviaríamos en el header location
    // header('Location', 'url de endpoint para obtener los datos de un comentario dado');
    return res.status(201).send();
  } catch (e) {
    if (connection) {
      connection.release();
    }

    return res.status(500).send(e.message);
  }
}

module.exports = createComment;