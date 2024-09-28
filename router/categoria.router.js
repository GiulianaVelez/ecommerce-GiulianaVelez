const  Rutas = require("express").Router()
const categoriaController =  require("../controllers/categoria.controller")

Rutas.post("/categoria", categoriaController.crearCategoria)
Rutas.get("/categoria", categoriaController.obtenerTodos)
Rutas.get("/categoria/:id", categoriaController.obtenerCategoriaPorId)
Rutas.put("/categoria/:id", categoriaController.actualizar)
Rutas.delete("/categoria/:id", categoriaController.eliminar)


module.exports = Rutas