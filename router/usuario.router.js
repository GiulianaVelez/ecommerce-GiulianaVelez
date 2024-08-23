const  Rutas = require("express").Router()
const usuarioController =  require("../controllers/usuario.controller")

Rutas.post("/usuario", usuarioController.crearUsuario)
Rutas.get("/usuario", usuarioController.obtenerTodos)
Rutas.get("/usuario/:id", usuarioController.obtenerUnoPorId)
Rutas.put("/usuario/:id", usuarioController.actualizar)
Rutas.delete("/usuario/:id", usuarioController.eliminar)


module.exports = Rutas