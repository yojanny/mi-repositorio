'use strict';

const Joi = require('@hapi/joi');
const uuidV4 = require('uuid/v4');
const mysqlPool = require('../../../database/mysql-pool');

const httpServerDomain = process.env.HTTP_SERVER_DOMAIN;

/*
{
	"title": "My first note",
	"content": "This is my first note",
	"tags": []
}
*/
async function validate(payload) {
  const schema = Joi.object({
    title: Joi.string().trim().min(1).max(255).required(),
    content: Joi.string().trim().min(10).max(65536).required(),
    tags: Joi.array().required(),
  });

  Joi.assert(payload, schema);
}

async function createNote(req, res, next) {
  const noteData = { ...req.body };
  const { userId } = req.claims;

  try {
     await validate(noteData);
  } catch(e) {
    return res.status(400).send(e);
  }

  // tabla notas
  const now = new Date().toISOString().substring(0, 19).replace('T', ' ');
  const {
    title,
    content,
  } = noteData;

  const noteId = uuidV4();
  const note = {
    id: noteId,
    title,
    content,
    user_id: userId,
    created_at: now,
  };

  try {
    const connection = await mysqlPool.getConnection();
    try {
      const sqlCreateNote = 'INSERT INTO notes SET ?';
      await connection.query(sqlCreateNote, note);

      /**
       * At this point, note was created, so,
       * we can associate the tags
       *  - insertar relacíon entre tag y note en la tabla notes_tags
       *  - note_id, tag_id, created_at
       */
      noteData.tags.forEach(async (tagId) => {
        const sqlAddTag = 'INSERT INTO notes_tags SET ?';
        try {
          await connection.query(sqlAddTag, {
            note_id: noteId,
            tag_id: tagId,
            created_at: now,
          });
        } catch (e) {
          console.error(e);
        }
      });

      connection.release();

      res.header('Location', `${httpServerDomain}/api/notes/${noteId}`);
      return res.status(201).send();
    } catch (e) {
      connection.release();
      throw e;
    }
  } catch (e) {
    console.error(e);
    return res.status(500).send();
  }
}

module.exports = createNote;
