const express = require("express");
const cors = require('cors'); 
const app = express();

app.use(cors());

const port = 3000;

// permitir que lleguen los json por las url
app.use(express.json());

// llamar a base de datos
const db = require("./models/index");
// conectar al motor de DB
db.sequelize
    .sync()
   //.sync( { alter: true } )  
  .then(() => {
    console.log("Base de datos conectada");
  })
  .catch((error) => {
    console.log("Error al conectar a la base de datos: ", error);
  });

// importar rutas
require("./router/index.router")(app);


app.listen(port, () => {
  console.log("SERVER iniciado");
});
