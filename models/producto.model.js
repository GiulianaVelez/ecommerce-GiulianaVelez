
module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define('productos', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        precio: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
       stock: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue : 0
        },
        descripcion_corta: {
            type: Sequelize.STRING,
        },
        descripcion_larga: {
            type: Sequelize.TEXT,
            
        },
    
    });

    return Producto;
};
