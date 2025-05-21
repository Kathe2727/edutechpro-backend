const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/', (req, res) => {
  const { nombre, correo, telefono, fecha_nacimiento } = req.body;
  const sql = 'INSERT INTO usuarios (nombre, correo, telefono, fecha_nacimiento) VALUES (?, ?, ?, ?)';
  db.query(sql, [nombre, correo, telefono, fecha_nacimiento], (err, result) => {
    if (err) {
      console.error('Error al insertar usuario:', err);
      return res.status(500).json({ error: 'Error al registrar usuario' });
    }
    res.status(201).json({ message: 'Usuario registrado correctamente' });
  });
});

router.get('/', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      console.error('Error al obtener usuarios:', err);
      return res.status(500).json({ error: 'Error al obtener usuarios' });
    }
    res.json(results);
  });
});

module.exports = router;