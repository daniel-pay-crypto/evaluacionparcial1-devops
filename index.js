const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ 
    mensaje: '¡Hola! Este es el microservicio para la Evaluación 1 de DevOps',
    estado: 'Operativo'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});