 
const db = require("../models/index")
const Usuario = db.usuario


exports.crearUsuario = (req, res) => {
    const { nombre, apellido, email, telefono, contraseña, rol } = req.body

   Usuario.create({
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono,
        contraseña: contraseña,
        rol: rol
    })
    .then((usuario) => {
        res.status(201).json({
            ok: true,
            msg: "Usuario creado",
            status: 201,
            data: usuario
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al crear usuario ",
            status: 500,
            data: error
        })
    })
}


exports.obtenerTodos = (req,res) => {
    Usuario.findAll()
    .then((usuarios) => {
        res.status(200).json({
            ok: true,
            msg: "Listado de usuarios ",
            status: 200,
            data: usuarios
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el listado de usuarios  ",
            status: 500,
            data: error
        })
    })
}


exports.obtenerUnoPorId = (req, res) => {
    const _id = req.params.id
    Usuario.findOne({
        where: {id: _id}
    })
    .then((usuario) => {
        if(usuario){
            res.status(200).json({
                ok: true,
                msg: "usuario encontrado ",
                status: 200,
                data: usuario
            })
        }else{
            res.status(404).json({
                ok: false,
                msg: "usuario No encontrado",
                status: 404,
                data: null
            })
        }
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al obtener el usuario ",
            status: 500,
            data: error
        })
    })
}


exports.actualizar = (req, res) => {
    const _id = req.params.id
    const { nombre, apellido, email, telefono, contraseña, rol } = req.body

    Usuario.update({

        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono,
        contraseña: contraseña,
        rol: rol
    },
    {
        where: {id: _id}
    })
    .then((usuario) => {
        res.status(200).json({
            ok: true,
            msg: "Usuario Actualizado ",
            status: 200,
            data: usuario
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al actualizar Usuario",
            status: 500,
            data: error
        })
    })
}



exports.eliminar = (req, res) => {
    const _id =  req.params.id
    Usuario.destroy({
        where: {id: _id}
    })
    .then((usuario) => {
        res.status(200).json({
            ok: true,
            msg: "Usuario Eliminado ",
            status: 200,
            data: usuario
        })
    })
    .catch((error) => {
        res.status(500).json({
            ok: false,
            msg: "Error al eliminar Usuario",
            status: 500,
            data: error
        })
    })
}

