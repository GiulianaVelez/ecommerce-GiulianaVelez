const  Rutas = require("express").Router()
const productoController =  require("../controllers/producto.controller")

Rutas.post("/producto", productoController.crearProducto)
Rutas.get("/producto", productoController.obtenerTodos)
Rutas.get("/producto/lista", productoController.lista)
Rutas.get("/producto/:id",productoController.obtenerProductoPorId)
Rutas.put("/producto/:id", productoController.actualizar)
Rutas.delete("/producto/:id", productoController.eliminar)


module.exports = Rutas
