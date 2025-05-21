const db = require('../models/db');

// Obtener todos los usuarios
exports.getUsuarios = (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

// Crear un nuevo usuario
exports.createUsuario = (req, res) => {
  const { nombre, correo, rol } = req.body;
  db.query('INSERT INTO usuarios (nombre, correo, rol) VALUES (?, ?, ?)',
    [nombre, correo, rol],
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json({ id: results.insertId, nombre, correo, rol });
    });
};

// Eliminar un usuario por ID
exports.deleteUsuario = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM usuarios WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).send(err);
    res.json({ mensaje: 'Usuario eliminado correctamente' });
  });
};
