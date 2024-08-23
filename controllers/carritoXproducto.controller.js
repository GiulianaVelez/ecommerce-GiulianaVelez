const db = require("../models/index")
const CarritoXProducto = db.carritoXProducto


exports.agregarProductoAlCarrito = (req, res) => {
    const { cantidad, precio_unitario } = req.body

   CarritoXProducto.create({
     cantidad : cantidad, 
     precio_unitario: precio_unitario,
        
    })
    .then((CarritoXProducto) => {
        res.status(201).json({
            ok: true,
            msg: "PRODUCTO AGREGADO AL CARRITO",
            status: 201,
            data: CarritoXProducto
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error agregar prodcuto al carrito ",
            status: 500,
            data: error
        })
    })
}



exports.obtenerCarritoXProductoPorId = (req, res) => {
    const _id = req.params.id
    CarritoXProducto.findOne({
        where: {id: _id}
    })
    .then((carritoXProducto) => {
        if(carritoXProducto){
            res.status(200).json({
                ok: true,
                msg: "producto en carrito encontrado ",
                status: 200,
                data: carritoXProducto
            })
        }else{
            res.status(404).json({
                ok: false,
                msg: "PRODCUTO EN CARRITO NO ENCONTRADO ",
                status: 404,
                data: null
            })
        }
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el  producto en el  carrito",
            status: 500,
            data: error
        })
    })
}


exports.actualizarCarritoXProducto = (req, res) => {
    const _id = req.params.id
    const { cantidad, precio_unitario } = req.body; 

    CarritoXProducto.update(
        {
        cantidad : cantidad,
        precio_unitario: precio_unitario
       
    },
    {
        where: {id: _id}
    })
    .then((carritoXProducto) => {
        res.status(200).json({
            ok: true,
            msg: "producto en carrito Actualizado ",
            status: 200,
            data: carritoXProducto
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al actualizar prodcuto en el  carrito ",
            status: 500,
            data: error
        })
    })
}



exports.eliminarCarritoXProducto = (req, res) => {
    const _id =  req.params.id
    CarritoXProducto.destroy({
        where: {id: _id}
    })
    .then((carritoXProducto) => {
        res.status(200).json({
            ok: true,
            msg: "carrito Eliminado ",
            status: 200,
            data: carritoXProducto
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al eliminar carrito",
            status: 500,
            data: error
        })
    })
}

