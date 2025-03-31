const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users.controller');

// [GET] /users

router.get('/', UserController.index);

// [GET] /users

router.get('/create', UserController.createForm);

// [POST] /users

router.post('/', express.urlencoded({ extended: false }), UserController.create);

// [GET] /users/:id

router.get('/:id', UserController.view);

// [GET] /users/:id/edit

router.get('/:id/edit', UserController.editForm);

// [PUT] /users/:id

router.post('/:id', express.urlencoded({ extended: false }), UserController.update);

// [DELETE] /users/:id

router.delete('/:id', UserController.delete);

module.exports = router;

