const { Model } = require("sequelize")
const db = require("../models/index")
const Producto = db.producto



exports.crearProducto = (req, res) => {
    const { nombre, precio, stock, descripcion_corta, descripcion_larga,imagen,CategoriaId} = req.body

   Producto.create({
        nombre: nombre,
        precio: precio,
        stock: stock,
        descripcion_corta: descripcion_corta,
        descripcion_larga: descripcion_larga,
        imagen: imagen,
        CategoriumId: CategoriaId
    })
    .then((producto) => {
        res.status(201).json({
            ok: true,
            msg: "producto creado",
            status: 201,
            data: producto
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al crear producto ",
            status: 500,
            data: error
        })
    })
}


exports.obtenerTodos = (req,res) => {
    Producto.findAll(
        {include : 
          
            [{
                model : db.categoria
            }]

        }
    )
    .then((producto) => {
        res.status(200).json({
            ok: true,
            msg: "Listado de productos ",
            status: 200,
            data: producto
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el listado de  productos ",
            status: 500,
            data: error
        })
    })
}


exports.obtenerProductoPorId = (req, res) => {
    const _id = req.params.id
    Producto.findOne({
        where: {id: _id}
    })
    .then((producto) => {
        if(producto){
            res.status(200).json({
                ok: true,
                msg: "Producto encontrado ",
                status: 200,
                data: producto
            })
        }else{
            res.status(404).json({
                ok: false,
                msg: "producto No encontrado",
                status: 404,
                data: null
            })
        }
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el producto",
            status: 500,
            data: error
        })
    })
}


exports.actualizar = (req, res) => {
    const _id = req.params.id

    const { nombre, precio, stock, descripcion_corta, descripcion_larga, imagen ,CategoriaId } = req.body;
    

    Producto.update({

        nombre: nombre,
        precio: precio,
        stock: stock,
        descripcion_corta: descripcion_corta,
        descripcion_larga: descripcion_larga,
        imagen:imagen,
        CategoriumId:CategoriaId
    },
    {
        where: {id: _id}
    })
    .then((producto) => {
        res.status(200).json({
            ok: true,
            msg: "producto Actualizado ",
            status: 200,
            data: producto
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al actualizar producto ",
            status: 500,
            data: error
        })
    })
}



exports.eliminar = (req, res) => {
    const _id =  req.params.id
    Producto.destroy({
        where: {id: _id}
    })
    .then((producto) => {
        res.status(200).json({
            ok: true,
            msg: "prodcuto Eliminado ",
            status: 200,
            data: producto
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al eliminar producto",
            status: 500,
            data: error
        })
    })
}

