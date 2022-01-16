const express = require('express');
const cors = require('cors');
const { dbConection } = require('./src/database/config');
const router = require('./src/routes/routes');
require('dotenv').config();

// configurando servidor
const app = express();

// conectandose a la base de datos
dbConection();

// configurando cors para las peticiones de los distintos dominios que se realicen
app.use(cors());

// configurando que las peticiones se realicen en formato json
app.use(express.json());

// creando la ruta raiz de la api
app.use('/api', router);

// configurando el puerto del servidor
app.listen(process.env.PORT, () => {
    console.log(`servidor corriendo en el puerto ${process.env.PORT}`);
});