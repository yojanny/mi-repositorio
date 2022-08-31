'use strict';

const mysql = require('mysql2/promise');

async function main() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hab',
    database: 'habinstaproject',
  });

  const now = new Date();
  // .toISOString = 2022-07-18T18:41:27.750Z pero mysql la quiere SIN la 'T' y
  // hasta los segundos incluidos (sin microsegundos y sin timezone)
  // createdAt es 2022-07-18 18:41:27
  const createdAt = now.toISOString().replace('T', ' ').substring(0, 19);
  const user = {
    email: 'habclase02@yopmail.com',
    password: 1234,
    created_at: createdAt,
  };

  // connection.query devuelve un array con elementos, algo asi: result = connection.query
  // entonces tenemos result[0] y result[1]
  // NOSOTROS solo queremos el result[0], no nos interesa el result[1], entonces
  // podemos usar destructuring de arrays para quedarnos solo con el primer elemento
  // https://blog.devart.com/mysql-insert-statement-inserting-row-into-a-table.html
   const [resultadoQuery] = await connection.query('INSERT INTO users SET ?', user);

   console.log(resultadoQuery);
}

main();
