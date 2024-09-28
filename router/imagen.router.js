const  Rutas = require("express").Router()
const imagenController =  require("../controllers/imagen.controller")

Rutas.post("/imagen", imagenController.crearImagen);
Rutas.get("/imagen/", imagenController.obtenerImagen)
Rutas.get("/imagen/:id", imagenController.obtenerImagenPorId)
Rutas.get("/imagen/producto/:id", imagenController.obtenerImagenPorProd)
Rutas.put("/imagen/:id", imagenController.actualizar)
Rutas.delete("/imagen/:id", imagenController.eliminar)


module.exports = Rutas
