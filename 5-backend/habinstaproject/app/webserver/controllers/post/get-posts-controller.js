'use strict';

const mysqlPool = require('../../../database/mysql-pool');

async function getPosts(req, res) {
  const userId = req.claims.userId;

  /**
   * 1. Hacer query para coger todos los posts de un usuario con el número de likes
   * 2. En MySQL las columnas con sneaky_case (post_id), los datos que devolvamos será
   * necesario utilizar pascalCase, por lo que tendremos que mapear algunas columnas
   */
  /**
   * SELECT p.*, COUNT(l.post_id) AS likes
   * FROM posts p LEFT JOIN likes l
   *  ON p.id = l.post_id
   * WHERE p.user_id = 14
   * GROUP BY p.id
   */

  const query = `SELECT p.*, COUNT(l.post_id) AS likes
    FROM posts p LEFT JOIN likes l
      ON p.id = l.post_id
    WHERE p.user_id = ?
    GROUP BY p.id
    ORDER BY p.created_at DESC`;

  let connection = null;
  try {
    connection = await  mysqlPool.getConnection();
    /**
     * execute devuelve un array con la siguiente forma:
     *  [filas, datosQueNoNosInteresan]
     * Entonces, como solo nos interesa la posición 0 del array resultado,
     * podemos hacer:
     *  const rows = resultadoExecute[0]
     *  const [rows] = resultadoExecute
     */
    const [rows] = await connection.execute(query, [userId]);
    connection.release();

    const posts = rows.map((post) => {
      /*
      return {
        id: post.id,
        image: post.image,
        createdAt: post.created_at,
        likes: post.likes,
      };*/

      return {
        ...post,
        createdAt: post.created_at,
        created_at: undefined,
        user_id: undefined,
      };
    });

    const responseBody = {
      page: 1,
      total: posts.length,
      data: posts,
    };

    return res.send(responseBody);
  } catch(e) {
    if (connection) {
      connection.release();
    }

    console.error(e);
    return res.status(500).send(e.message);
  }
}

module.exports = getPosts;
