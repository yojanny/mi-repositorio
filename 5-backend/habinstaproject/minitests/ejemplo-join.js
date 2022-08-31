'use strict';

/**
 * tabla users (id, nombre) y tabla posts (id, title, user_id)
 * // SELECT u.*, p.*
 *  FROM users u LEFT JOIN posts p
 *    ON u.id = p.user_id
 */
const rows = [{
  userId: 1,
  name: 'antonio',
  postId: 2,
  title: 'noticia 1'
}, {
  userId: 1,
  name: 'antonio',
  postId: 3,
  title: 'noticia 3'
}, {
  userId: 2,
  name: 'luisa',
  postId: 10,
  title: 'noticia 5'
}];

const usersWithPosts = [{
  userId: 1,
  name: 'antonio',
  posts: [{
    postId: 2,
    title: 'noticia 1'
  }, {
    postId: 3,
    title: 'noticia 3'
  }],
}, {
  userId: 2,
  name: 'luisa',
  posts: [{
    postId: 10,
    title: 'noticia 5'
  }]
}];

function usersPostsHydrating(rows) {
  const usersWithPosts = [];

  for (const row of rows) {
    // la segunda vez, el usuario podría existe, entonces, necesitamos buscarlo primero
    const userFound = usersWithPosts.find((user) => user.userId === row.userId);
    if (userFound) {
      userFound.posts.push({
        postId: row.postId,
        title: row.title,
      });
    } else { // la primera vez es fácil porque el usuario no existe
      const user = {
        userId: row.userId,
        name: row.name,
        posts: [{
          postId: row.postId,
          title: row.title,
        }]
      };

      usersWithPosts.push(user);
    }
  }

  return usersWithPosts;
}

const result = usersPostsHydrating(rows);

console.log(JSON.stringify(result, 1));
