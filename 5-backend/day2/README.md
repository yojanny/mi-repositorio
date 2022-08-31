# Mysql Dia 2

## Base de datos habinstagram
Hoy hemos creado la base de datos *habinstagram*, a partir del diagrama Entidad Relación realizado en el día 1, usando Mysql Workbench y/o el cliente *mysql* desde la terminal de Ubuntu.

Estos son los comandos que hemos ejecutado:
```
-- Creamos la base de datos
CREATE DATABASE habinstagram;

-- La seleccionamos por defecto. A partir de este momento todos los comandos
-- que ejecutemos serán sobre la bbdd habinstagram
USE habinstagram;

-- Creamos la tabla users
CREATE TABLE users (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    password CHAR(60) NOT NULL,
    created_at DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE INDEX email_UNIQUE (email)
);

-- Creamos la tabla images, tiene 1 foreign key o clave foránea
-- hacia usuarios.id
CREATE TABLE images (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name CHAR(36) NULL,
  title VARCHAR(255) NULL,
  created_at DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  user_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  UNIQUE INDEX path_UNIQUE (name),
  FOREIGN KEY (user_id)
	REFERENCES users (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

-- Creamos la tabla comments. Tiene 2 claves foráneas hacia
-- users.id e images.id
CREATE TABLE comments (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  comment VARCHAR(255) NOT NULL,
  created_at DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  user_id INT UNSIGNED NOT NULL,
  image_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
	REFERENCES users (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  FOREIGN KEY (image_id)
	REFERENCES images (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

-- Creamos la tabla likes. Tiene una clave primaria formada por
-- user_id e image_id que a su vez son claves foráneas hacia
-- users.id e images.id
CREATE TABLE likes (
  user_id INT UNSIGNED NOT NULL,
  image_id INT UNSIGNED NOT NULL,
  created_at DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, image_id),
  FOREIGN KEY (user_id)
	REFERENCES users (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  FOREIGN KEY (image_id)
	REFERENCES images (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);
```

## Cómo exportar la bbdd
Una vez tenemos creada una bbdd y nos hemos olvidado de todos los comandos que ejecutamos para crearla, no pasaría nada.
Tenemos muchas maneras de exportar una bbdd, aquí veremos la que yo utilizo PERO por defecto, las herramientas que exporten la bbdd introducirán más información que la que hemos utilizado nosotros para crear la bbdd.

* Es un problema? NO, para nada

**Paso 1: Exportar la bbdd. Exportaremos habinstagram que está en nuestro equipo**
Ejecutar el siguiente comando en la terminal. Para ello el comando *mysqldump* debe funcionar y estar en el PATH del Sistema Operativo. (Se podría usar WorkBench pero las instrucciones serían otras)
```
 mysqldump -uMI_USUARIO -pMI_CONTRASENA habinstagram > habinstagram.sql
```
El comando *mysqldump* nos ayuda a exportar una base de datos. Aquí *habinstragram* es el nombre de la base de datos a exportar y *habinstagram.sql* son las sentencias sql necesarias para recrear la bbdd

**Paso 2: Restaurar la bbdd**
Para restaurar la bbdd, necesitamos previamente haber creado una base de datos vacía (con la sentencia CREATE DATABASE miNuevaBaseDeDatos por ejemplo) y a continuación podremos restaurarla usando el comando *mysql* desde la terminal (podríamos hacerlo con WorkBench pero las instrucciones serían otras)
```
mysql -uMI_USUARIO -pMI_CONTRASENA miNuevaBaseDeDatos < habinstagram.sql
```