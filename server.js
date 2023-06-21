const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const productRoutes = require('./src/routes/product');
const pool = require('./src/models/db');
require("dotenv").config()
const app = express();
const port = 3000;
const conectMongo = require("./src/models/dbMongo")
// MIDDLEWARE
app.use(cors())
app.use(morgan("combined"))

conectMongo()
app.use(express.json());
app.use(require("./src/routes/product"))
app.use('/productos', productRoutes);


// async function asyncFunction() {
// }

// asyncFunction();

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
