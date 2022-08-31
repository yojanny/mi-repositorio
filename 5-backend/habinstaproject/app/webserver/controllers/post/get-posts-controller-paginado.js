'use strict';

const mysqlPool = require('../../../database/mysql-pool');

const MAX_POSTS_PER_PAGE = 3;

/**
 * Devolvemos los posts con el número de likes que tiene
 */
async function getPosts(req, res) {
  const { userId } = req.claims;
  const page = parseInt(req.query.page, 10) || 1;
  
  /**
   * 1. Hacer query para coger todos los posts de un usuario con el número de likes
   * 2. En MySQL las columnas con sneaky_case (post_id), los datos que devolvamos será
   * necesario utilizar pascalCase, por lo que tendremos que mapear algunas columnas
   */
  /**
   * SELECT p.*, COUNT(l.post_id)
   * FROM posts p LEFT JOIN likes l
   *  ON p.id = l.post_id
   * WHERE p.user_id = ?
   * GROUP BY p.id;
   * 
   * SELECT p.*, COUNT(l.post_id) FROM posts p LEFT JOIN likes l ON p.id = l.post_id GROUP BY p.id;
   */
  const queryCountTotal = `SELECT COUNT(*) AS totalRecords
    FROM posts
    WHERE user_id = ?`;
  const offset = (page - 1) * MAX_POSTS_PER_PAGE;
  const query = `SELECT p.*, COUNT(l.post_id) AS likes
    FROM posts p LEFT JOIN likes l
      ON p.id = l.post_id
    WHERE p.user_id = ?
    GROUP BY p.id
    ORDER BY p.created_at DESC
    LIMIT ${MAX_POSTS_PER_PAGE} OFFSET ${offset}`;

    let connection = null;
    try {
      connection = await mysqlPool.getConnection();
      const [result] = await connection.execute(queryCountTotal, [userId]);
      const [rows] = await connection.execute(query, [userId]);
      connection.release();

      const totalRecords = result[0].totalRecords;

      const posts = rows.map((post) => {
        return {
          ...post,
          createdAt: post.created_at,
          created_at: undefined,
          user_id: undefined,
        };
      });

      const responseBody = {
        totalRecords: totalRecords,
        lastPage: Math.ceil(totalRecords / MAX_POSTS_PER_PAGE),
        page,
        posts: posts,
      };

      return res.send(responseBody);
    } catch (e) {
      if (connection) {
        connection.release();
      }

      console.log(e);
      return res.status(500).send(e.message);
    }
}

module.exports = getPosts;
