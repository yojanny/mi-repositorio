'use strict';

const express = require('express');
const multer = require('multer');
const checkAccountSession = require('../controllers/account/check-account-session');
const createComment = require('../controllers/comments/create-comment-controller');
const createPost = require('../controllers/post/create-post-controller');
const likePost = require('../controllers/post/like-post-controller');
const dislikePost = require('../controllers/post/dislike-post-controller');
const getPosts = require('../controllers/post/get-posts-controller');

const upload = multer();

const router = express.Router();

router.post('/posts', checkAccountSession, upload.single('image'), createPost);
router.get('/posts', checkAccountSession, getPosts);
router.post('/posts/:postId/likes', checkAccountSession, likePost);
router.delete('/posts/:postId/likes', checkAccountSession, dislikePost);
router.post('/posts/:postId/comments', checkAccountSession, createComment);

module.exports = router;
