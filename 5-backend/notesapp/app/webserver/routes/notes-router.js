'use strict';

const express = require('express');
const addTagToNote = require('../controllers/note/add-tag-note-controller');
const checkAccountSession = require('../controllers/account/check-account-session');
const createNote = require('../controllers/note/create-note-controller');
const deleteNote = require('../controllers/note/delete-note-controller');
const getNote = require('../controllers/note/get-note-controller');
const getNotes = require('../controllers/note/get-notes-controller');
const deleteTagFromNote = require('../controllers/note/delete-tag-note-controller');
const updateNote = require('../controllers/note/update-note-controller');

const router = express.Router();

/**
 * Exercise: These router has multiple endpoints starting by '/notes',
 * can you do something to avoid repeating this string?
 */
router.get('/notes', checkAccountSession, getNotes);
router.post('/notes', checkAccountSession, createNote);
router.get('/notes/:noteId', checkAccountSession, getNote);
router.put('/notes/:noteId', checkAccountSession, updateNote);
router.delete('/notes/:noteId', checkAccountSession, deleteNote);
router.post('/notes/:noteId/tags', checkAccountSession, addTagToNote);
router.delete('/notes/:noteId/tags/:tagId', checkAccountSession, deleteTagFromNote);

module.exports = router;
