const db = require("../models/index");
const imagen = db.imagen;



exports.crearImagen = (req, res) => {
    const { ubicacion,nroOrden,ProductoId } = req.body;

    imagen.create({ 
        
       ubicacion:ubicacion,
       nroOrden:nroOrden,
       productoId:ProductoId
    
       })
        .then((imagen) => {
            res.status(201).json({
                ok: true,
                msg: "Imagen creada",
                status: 201,
                data: imagen
            });
        })
        .catch((error) => {
            res.status(500).json({
                ok: false,
                msg: "Error al crear imagen",
                status: 500,
                data: error
            });
        });
};

exports.obtenerImagen = (req, res) => {
    imagen.findAll()
        .then((imagen) => {
            res.status(200).json({
                ok: true,
                msg: "Listado de imágenes",
                status: 200,
                data: imagen
            });
        })
        .catch((error) => {
            res.status(500).json({
                ok: false,
                msg: "Error al obtener el listado de imágenes",
                status: 500,
                data: error
            });
        });
};

exports.obtenerImagenPorId = (req, res) => {
    const _id = req.params.id;
    imagen.findOne({ where: { id: _id } })
        .then((imagen) => {
            if (imagen) {
                res.status(200).json({
                    ok: true,
                    msg: "Imagen encontrada",
                    status: 200,
                    data: imagen
                });
            } else {
                res.status(404).json({
                    ok: false,
                    msg: "Imagen no encontrada",
                    status: 404,
                    data: null
                });
            }
        })
        .catch((error) => {
            res.status(500).json({
                ok: false,
                msg: "Error al obtener la imagen",
                status: 500,
                data: error
            });
        });
};

exports.obtenerImagenPorProd = (req, res) => {
    
    const _id = req.params.id;
    imagen.findAll({
        where: { ProductoId: _id },
      })
      .then((imagen) => {
        if (imagen) {
          res.status(200).json({
            ok: true,
            msg: "Imagen encontrado",
            status: 200,
            data: imagen,
          });
        } else {
          res.status(404).json({
            ok: false,
            msg: "Imagen no encontrada",
            status: 404,
            data: null,
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          ok: false,
          msg: "Error al obtener la imagen",
          status: 500,
          data: error,
        });
      });
};

exports.actualizar = (req, res) => {
    const _id = req.params.id;
    const { ubicacion, nroOrden, ProductoId } = req.body;

    imagen.update({ ubicacion, nroOrden, ProductoId  }, { where: { id: _id } })
        .then((imagen) => {
            res.status(200).json({
                ok: true,
                msg: "Imagen actualizada",
                status: 200,
                data: imagen
            });
        })
        .catch((error) => {
            res.status(500).json({
                ok: false,
                msg: "Error al actualizar imagen",
                status: 500,
                data: error
            });
        });
};

exports.eliminar = (req, res) => {
    const _id = req.params.id;
    imagen.destroy({ where: { id: _id } })
        .then((Imagen) => {
            res.status(200).json({
                ok: true,
                msg: "Imagen eliminada",
                status: 200,
                data: Imagen
            });
        })
        .catch((error) => {
            res.status(500).json({
                ok: false,
                msg: "Error al eliminar imagen",
                status: 500,
                data: error
            });
        });
};
