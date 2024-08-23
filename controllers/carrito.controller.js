const db = require("../models/index")
const carritoXProducto = db.carritoXProducto


exports.crearCarrito = (req, res) => {
    const { total_precio } = req.body

   carrito.create({
        total_precio : total_precio
    })
    .then((carrito) => {
        res.status(201).json({
            ok: true,
            msg: "carrito creado",
            status: 201,
            data: carrito
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al crear carrito ",
            status: 500,
            data: error
        })
    })
}



exports.obtenerCarritoPorId = (req, res) => {
    const _id = req.params.id
    carrito.findOne({
        where: {id: _id}
    })
    .then((carrito) => {
        if(carrito){
            res.status(200).json({
                ok: true,
                msg: "carrito encontrado ",
                status: 200,
                data: carrito
            })
        }else{
            res.status(404).json({
                ok: false,
                msg: "carrito No encontrado",
                status: 404,
                data: null
            })
        }
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el carrito",
            status: 500,
            data: error
        })
    })
}


exports.actualizar = (req, res) => {
    const _id = req.params.id
    const { total_precio } = req.body;

    carrito.update({
        total_precio
    },
    {
        where: {id: _id}
    })
    .then((carrito) => {
        res.status(200).json({
            ok: true,
            msg: "carrito Actualizado ",
            status: 200,
            data: carrito
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al actualizar carrito ",
            status: 500,
            data: error
        })
    })
}



exports.eliminar = (req, res) => {
    const _id =  req.params.id
    carrito.destroy({
        where: {id: _id}
    })
    .then((carrito) => {
        res.status(200).json({
            ok: true,
            msg: "carrito Eliminado ",
            status: 200,
            data: carrito
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

