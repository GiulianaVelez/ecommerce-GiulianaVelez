module.exports = (app) => {
    const rutasUsuario = require("./usuario.router")
    app.use("/api", rutasUsuario)
 
    const rutasProducto = require("./producto.router")
    app.use("/api", rutasProducto)

    const rutasCarrito = require("./carrito.router")
    app.use("/api", rutasCarrito) 

    const rutasCarritoXproducto= require("./carritoXproducto.router")
    app.use("/api", rutasCarritoXproducto) 

    const rutasimagen= require("./imagen.router")
    app.use("/api",rutasimagen) 

    const rutasCategoria= require("./categoria.router")
    app.use("/api", rutasCategoria) 


    const rutasRol= require("./rol.router")
    app.use("/api", rutasRol) 



}