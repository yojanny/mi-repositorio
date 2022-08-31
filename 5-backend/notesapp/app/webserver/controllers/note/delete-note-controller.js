'use strict';

const Joi = require('@hapi/joi');
const mysqlPool = require('../../../database/mysql-pool');

async function validate(payload) {
  const schema = Joi.object({
    noteId: Joi.string().guid({
      version: ['uuidv4'],
    }).required(),
  });

  Joi.assert(payload, schema);
}

async function deleteNote(req, res, next) {
  const { noteId } = req.params;
  const { userId } = req.claims;

  try {
    await validate({ noteId, });
  } catch (e) {
    return res.status(400).send(e);
  }

  let connection;
  try {
    connection = await mysqlPool.getConnection();
    const sqlQuery = `UPDATE notes
      SET deleted_at = ?
      WHERE id = ?
        AND user_id = ?
        AND deleted_at IS NULL`;
    
    const now = new Date().toISOString().substring(0, 19).replace('T', ' ');
    const [deletedStatus] = await connection.execute(sqlQuery, [ now, noteId, userId, ]);
    connection.release();

    if (deletedStatus.changedRows !== 1) {
      return res.status(404).send();
    }

    return res.status(204).send();
  } catch (e) {
    if (connection) {
      connection.release();
    }

    return res.status(500).send(e.message);
  }
}

module.exports = deleteNote;
