
const { Model } = require("sequelize")
const db = require("../models/index")
const Rol = db.rol


exports.crearRol= (req, res) => {
    const { descripcion } = req.body

   Rol.create({
        descripcion:descripcion
    })
    .then((rol) => {
        res.status(201).json({
            ok: true,
            msg: "rol creado",
            status: 201,
            data: rol
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al crear rol ",
            status: 500,
            data: error
        })
    })
}



exports.obtenerTodos = (req,res) => {
    Rol.findAll()
    .then((rol) => {
        res.status(200).json({
            ok: true,
            msg: "Listado de roles",
            status: 200,
            data: rol
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el listado roles  ",
            status: 500,
            data: error
        })
    })
}


exports.eliminar = (req, res) => {
    const _id =  req.params.id
    Rol.destroy({
        where: {id: _id}
    })
    .then((rol) => {
        res.status(200).json({
            ok: true,
            msg: "rolEliminado ",
            status: 200,
            data: rol
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al eliminar rol",
            status: 500,
            data: error
        })
    })
}