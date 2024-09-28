const db = require("../models/index")
const Categoria= db.categoria


exports.crearCategoria = (req, res) => {
    const { descripcion  } = req.body

   Categoria.create({
       descripcion
    })
    .then((categoria) => {
        res.status(201).json({
            ok: true,
            msg: "categoria creada",
            status: 201,
            data: categoria
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al crear categoria",
            status: 500,
            data: error
        })
    })
}


exports.obtenerTodos = (req,res) => {
   Categoria.findAll()
    .then((categoria) => {
        res.status(200).json({
            ok: true,
            msg: "Listado de categorias ",
            status: 200,
            data: categoria
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el listado de  categorias ",
            status: 500,
            data: error
        })
    })
}


exports.obtenerCategoriaPorId = (req, res) => {
    const _id = req.params.id
    Categoria.findOne({
        where: {id: _id}
    })
    .then((categoria) => {
        if(categoria){
            res.status(200).json({
                ok: true,
                msg: "categoria encontrada ",
                status: 200,
                data: categoria
            })
        }else{
            res.status(404).json({
                ok: false,
                msg: "categoria No encontrada",
                status: 404,
                data: null
            })
        }
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el categoria",
            status: 500,
            data: error
        })
    })
}


exports.actualizar = (req, res) => {
    const _id = req.params.id

    const { descripcion } = req.body;
    

    Categoria.update({
       descripcion
    },
    {
        where: {id: _id}
    })
    .then((categoria) => {
        res.status(200).json({
            ok: true,
            msg: "categoria Actualizada ",
            status: 200,
            data: categoria
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al actualizar categoria ",
            status: 500,
            data: error
        })
    })
}



exports.eliminar = (req, res) => {
    const _id =  req.params.id
    Categoria.destroy({
        where: {id: _id}
    })
    .then((categoria) => {
        res.status(200).json({
            ok: true,
            msg: "categoria Eliminado ",
            status: 200,
            data: categoria
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al eliminar categoria",
            status: 500,
            data: error
        })
    })
}

