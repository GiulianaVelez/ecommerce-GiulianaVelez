const  Rutas = require("express").Router()
const carritoXProductoController = require("../controllers/carritoXproducto.controller");


Rutas.post("/carritoXproducto", carritoXProductoController.agregarProductoAlCarrito);
Rutas.get("/carritoXproducto/:id", carritoXProductoController.obtenerCarritoXProductoPorId);
Rutas.put("/carritoXproducto/:id", carritoXProductoController.actualizarCarritoXProducto);
Rutas.delete("/carritoXproducto/:id", carritoXProductoController.eliminarCarritoXProducto);

module.exports = Rutas