const express = require('express');
const cors = require('cors'); // ✅ Esto es nuevo
const app = express();
const usuariosRoutes = require('./routes/usuariosRoutes');
require('dotenv').config();

app.use(cors()); // ✅ Esto permite solicitudes externas
app.use(express.json());
app.use('/api/usuarios', usuariosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});