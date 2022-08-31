'use strict';

const mysqlPool = require('../../../database/mysql-pool');

async function getTags(req, res, next) {
  const {
    userId,
  } = req.claims;

  // 2. Select all tags
  try {
    const connection = await mysqlPool.getConnection();
    const sqlQuery = `SELECT *
      FROM tags
      WHERE user_id = ?`;
    const [rows] = await connection.execute(sqlQuery, [userId]);
    connection.release();
  
    // preparar respuesta
    const tags = rows.map(tag => {
      return {
        ...tag,
        createdAt: tag.created_at,
        updatedAt: tag.updated_at,
        user_id: undefined,
        created_at: undefined,
        updated_at: undefined,
      };
    });

    return res.status(200).send(tags);
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
}

module.exports = getTags;
