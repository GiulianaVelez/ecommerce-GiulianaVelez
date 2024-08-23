const  Rutas = require("express").Router()
const carritoController =  require("../controllers/carrito.controller")

Rutas.post("/carrito", carritoController.crearCarrito)
Rutas.get("/carrito/:id", carritoController.obtenerCarritoPorId)
Rutas.put("/carrito/:id", carritoController.actualizar)
Rutas.delete("/carrito/:id", carritoController.eliminar)


module.exports = Rutas