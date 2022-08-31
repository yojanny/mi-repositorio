-- Creamos la base de datos
CREATE DATABASE habinstaproject;

-- La seleccionamos por defecto. A partir de este momento todos los comandos
-- que ejecutemos serán sobre la bbdd habinstaproject
USE habinstaproject;

-- Creamos la tabla users
CREATE TABLE users (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL,
  password CHAR(60) NOT NULL,
  avatar VARCHAR(255) NULL,
  created_at DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  public_profile BOOLEAN DEFAULT TRUE,
  PRIMARY KEY (id),
  UNIQUE INDEX email_UNIQUE (email)
);

-- Creamos la tabla posts
CREATE TABLE posts (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  image CHAR(255) NOT NULL,
  caption CHAR(255) NULL,
  created_at DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  user_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  UNIQUE INDEX image_UNIQUE (image),
  FOREIGN KEY (user_id)
  REFERENCES users (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

-- Creamos la tabla comments. Tiene 2 claves foráneas hacia
-- users.id e posts.id
CREATE TABLE comments (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  content TEXT NOT NULL,
  created_at DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  user_id INT UNSIGNED NOT NULL,
  post_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
  REFERENCES users (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  FOREIGN KEY (post_id)
  REFERENCES posts (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

-- Creamos la tabla likes. Tiene una clave primaria formada por
-- user_id y post_id que a su vez son claves foráneas hacia
-- users.id y posts.id
CREATE TABLE likes (
  user_id INT UNSIGNED NOT NULL,
  post_id INT UNSIGNED NOT NULL,
  created_at DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, post_id),
  FOREIGN KEY (user_id)
  REFERENCES users (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  FOREIGN KEY (post_id)
  REFERENCES posts (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);
