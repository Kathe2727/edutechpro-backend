// controllers/authController.js
const connection = require('../config/db');

// Registro de usuario
const registrarUsuario = (req, res) => {
  const { nombre, correo, contraseña } = req.body;

  // Validación básica
  if (!nombre || !correo || !contraseña) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
  }

  // Insertar usuario en la base de datos
  connection.query('INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)', 
  [nombre, correo, contraseña], (err, result) => {
    if (err) {
      console.error('❌ Error al registrar:', err);
      return res.status(500).json({ mensaje: 'Error al registrar usuario' });
    }
    res.status(201).json({ mensaje: '✅ Usuario registrado con éxito' });
  });
};

// Login
const iniciarSesion = (req, res) => {
  const { correo, contraseña } = req.body;

  if (!correo || !contraseña) {
    return res.status(400).json({ mensaje: 'Correo y contraseña son obligatorios' });
  }

  // Verificar credenciales
  connection.query('SELECT * FROM usuarios WHERE correo = ? AND contraseña = ?', 
  [correo, contraseña], (err, results) => {
    if (err) {
      console.error('❌ Error en inicio de sesión:', err);
      return res.status(500).json({ mensaje: 'Error al iniciar sesión' });
    }

    if (results.length > 0) {
      res.json({ mensaje: '✅ Autenticación satisfactoria' });
    } else {
      res.status(401).json({ mensaje: '❌ Credenciales incorrectas' });
    }
  });
};

module.exports = {
  registrarUsuario,
  iniciarSesion
};