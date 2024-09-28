const  Rutas = require("express").Router()
const rolController = require("../controllers/rol.controller");


Rutas.post("/rol", rolController.crearRol)
Rutas.get("/rol",rolController.obtenerTodos)
Rutas.delete("/rol/:id", rolController.eliminar)


module.exports = Rutas