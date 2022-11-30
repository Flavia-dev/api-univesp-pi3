const express = require('express');
const router = express.Router();
const anunciosController = require('../controllers/anuncios-controllers');

router.get( '/', anunciosController.listAnuncios);
router.post('/', anunciosController.createAnuncios);

module.exports = router;