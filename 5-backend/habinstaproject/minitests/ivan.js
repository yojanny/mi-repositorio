'use strict';

const express = require('express');
const app = require('express'); // aqui express no nos hace falta todavia, pero seria app = express()
const mysql = require('mysql2/promise');

async function main() {
  const connection= await mysql.createConnection({
    host: "127.0.0.1",
    user: "habuser1",
    password: "1234",
    multipleStatements: true
    // database: "ejercicio12"
  });

  await connection.query(`
    DROP DATABASE IF EXISTS ejercicio12;
    CREATE DATABASE IF NOT EXISTS ejercicio12;
    USE ejercicio12;

    CREATE TABLE users (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT,
      email VARCHAR(255) NOT NULL,
      created_at DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
      name VARCHAR(255),
      active BOOLEAN DEFAULT TRUE,
      PRIMARY KEY (id),
      UNIQUE INDEX email_UNIQUE (email)
    )`
  );

  await connection.query(`
    CREATE TABLE photos (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT,
      user_id INT NOT NULL,
      photo_file_name VARCHAR(255),
      created_at DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      UNIQUE INDEX user_id_UNIQUE (user_id)
    );
      
    CREATE TABLE likes (
      id INT UNSIGNED NOT NULL AUTO_INCREMENT,
      user_id INT NOT NULL,
      photo_id INT NOT NULL,
      created_at DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      UNIQUE INDEX user_id_UNIQUE (user_id));`
  );

  console.log('database created!');
}

main();
