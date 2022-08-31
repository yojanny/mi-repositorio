'use strict';

const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');
const mysqlPool = require('../../../database/mysql-pool');

/**
 * El usuario va a subir su foto de avatar Y la vamos a almacenar en el disco duro
 * concretamente en la ruta public/uploads/users/$userId/avatar.[jpeg|png]
 */
 const PROJECT_MAIN_FOLDER_PATH = process.cwd();
 const AVATAR_FOLDER_PATH = path.join(PROJECT_MAIN_FOLDER_PATH, 'public', 'uploads', 'users');
 const AVATAR_VALID_FORMATS = ['jpeg', 'png'];

async function uploadAvatar(req, res) {
  console.log('uploadAvatar req.headers', req.headers);
  console.log('req.claims', req.claims);
  console.log('req.file', req.file);

  const file = req.file;
  const userId = req.claims.userId;

  /**
   * 1. Validar datos
   * 2. Almacenar la imagen en disco duro
   * 3. Actualizar usuario para indicar el avatar que tiene ahora
   */

  // 1. validar datos
  if (!file || !file.buffer) {
    return res.status(400).send({
      message: 'invalid image',
    });
  }

  // 2.1 crear el directorio si no existe: public/uploads/users/$userId
  const imageUploadPath = path.join(AVATAR_FOLDER_PATH, userId.toString());

  try {
    // recursive true creará todas las carpetas de la ruta si no existen y no dará error
    await fs.mkdir(imageUploadPath, { recursive: true });
  } catch (e) {
    return res.status(500).send(`Error creating folder to store the avatar: ${e.message}`);
  }

  /**
   * 2.2 Pasamos la imagen a sharp para que la analice y comprobaremos
   * si tenemos que redimensionarla o no
   * Y antes de nada generamos un nombre aleatorio para la imagen que usaremos más adelante
   */
  let imageFileName = null;
  try {
    const image = sharp(file.buffer);
    const metadata = await image.metadata();

     /**
     * Metadata es un objeto asi:
     * metadata {
      format: 'jpeg',
      size: 449110,
      width: 1947,
      height: 2627,
      space: 'srgb',
      channels: 3,
      depth: 'uchar',
      density: 72,
      chromaSubsampling: '4:2:0',
      isProgressive: false,
      hasProfile: true,
      hasAlpha: false,
      orientation: 1,
      exif: <Buffer 45 78 69 66 00 00 4d 4d 00 2a 00 00 00 08 00 04 01 06 00 03 00 00 00 01 00 02 00 00 01 12 00 03 00 00 00 01 00 01 00 00 01 28 00 03 00 00 00 01 00 02 ... 48 more bytes>,
      icc: <Buffer 00 00 02 00 61 70 70 6c 02 10 00 00 6d 6e 74 72 52 47 42 20 58 59 5a 20 07 e5 00 09 00 06 00 0c 00 0d 00 0d 61 63 73 70 41 50 50 4c 00 00 00 00 41 50 ... 462 more bytes>,
      iptc: <Buffer 50 68 6f 74 6f 73 68 6f 70 20 33 2e 30 00 38 42 49 4d 04 04 00 00 00 00 00 00 38 42 49 4d 04 25 00 00 00 00 00 10 d4 1d 8c d9 8f 00 b2 04 e9 80 09 98 ... 4 more bytes>,
      xmp: <Buffer 3c 3f 78 70 61 63 6b 65 74 20 62 65 67 69 6e 3d 22 ef bb bf 22 20 69 64 3d 22 57 35 4d 30 4d 70 43 65 68 69 48 7a 72 65 53 7a 4e 54 63 7a 6b 63 39 64 ... 2256 more bytes>
    }
     */
    if (!AVATAR_VALID_FORMATS.includes(metadata.format)) {
      return res.status(400).send(`Error, image format must be one of: ${AVATAR_VALID_FORMATS}`);
    }

    if (metadata.width > 200) {
      image.resize(200);
    }

    imageFileName = `avatar.${metadata.format}`;
    await image.toFile(path.join(imageUploadPath, imageFileName));
  } catch (e) {
    return res.status(500).send(`Error analyzing image: ${e.message}`);
  }

  // 3. Actualizar usuario para decirle que tiene avatar
  // UPDATE users SET avatar = '${imageFileName} WHERE id = ${userId}';
  let connection;
  try {
    const sqlQuery = `UPDATE users
      SET avatar = ?
      WHERE id = ?`;
    connection = await mysqlPool.getConnection();
    await connection.execute(sqlQuery, [imageFileName, userId]);
    connection.release();

    // const imageUrl = `${process.env.HTTP_SERVER_DOMAIN}/uploads/users/${userId}/${imageFileName}`;
    res.header('Location', `${process.env.HTTP_SERVER_DOMAIN}/uploads/users/${userId}/${imageFileName}`);
    return res.status(201).send(); // 201 Created -> recurso creado
  } catch (e) {
    if (connection) {
      connection.release();
    }

    console.error(e);
    return res.status(500).send(e.message);
  }
}

module.exports = uploadAvatar;
