// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { registrarUsuario, iniciarSesion } = require('../controllers/authController');

// Ruta para registrar usuario
router.post('/register', registrarUsuario);

// Ruta para inicio de sesión
router.post('/login', iniciarSesion);

module.exports = router;