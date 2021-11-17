const express = require('express');
const cors = require('cors');
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routers
app.use(require(('./routes/index')))

app.listen(3000);
console.log('Servidor escucha en el puerto 3000')