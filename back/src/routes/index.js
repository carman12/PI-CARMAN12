const express = require('express');
const router = express.Router();

// Importar controladores
const getCharById = require('../controllers/getCharById');
const login = require('../controllers/login');
const handleFavorites = require('../controllers/handleFavorites');

// Rutas
router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', handleFavorites.postFav);
router.delete('/fav/:id', handleFavorites.deleteFav);

// Exportar el router
module.exports = router;
