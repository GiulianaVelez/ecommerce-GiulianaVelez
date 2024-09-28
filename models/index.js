const Sequelize = require("sequelize")
const config = require("../config/index")



const sequelize = new Sequelize(
    config.db.schema,
    config.db.user,
    config.db.password,
    {
      host: config.db.host,
      dialect: config.db.dialect,
      port: config.db.port,
    }
)
  
const db = {};
  
db.Sequelize = Sequelize;
db.sequelize = sequelize;
  
// definiciones de modelos
db.usuario = require("./usuario.model")(sequelize, Sequelize);
db.producto= require("./producto.model")(sequelize, Sequelize);
db.carrito = require("./carrito.model")(sequelize, Sequelize);
db.carritoXProducto = require("./carritoXproducto.model")(sequelize, Sequelize);
db.categoria = require("./categoria.model")(sequelize,Sequelize);
db.imagen = require("./imagen.model")(sequelize,Sequelize);
db.rol = require("./rol.model")(sequelize,Sequelize);


// relaciones entre modelos

//usuario a carrito(1 a 1)
db.usuario.hasMany(db.carrito);
db.carrito.belongsTo(db.usuario);


//carrito x productos(muchos a muchos )

db.carrito.hasMany(db.carritoXProducto);
db.producto.hasMany(db.carritoXProducto);

db.carritoXProducto.belongsTo(db.carrito);
db.carritoXProducto.belongsTo(db.producto);

//categoria x producto(1 a muchos )
db.categoria.hasMany(db.producto);
db.producto.belongsTo(db.categoria);

//producto x imagen (1 a muchos )
db.producto.hasMany(db.imagen);
db.imagen.belongsTo(db.producto);


db.rol.hasMany(db.usuario);
db.usuario.belongsTo(db.rol);








module.exports = db; 