const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ 
    mensaje: '¡Hola! Este es el microservicio para la Evaluación 1 de DevOps',
    estado: 'activo y sin ningun error!!'
  });
});


app.get('/info', (req, res) => {
  res.json({ version: '1.0.0', autor: 'Equipo DevOps' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});


// Comentarioo: Esta es la nueva funcionalidad agregada por Daniel Leyton