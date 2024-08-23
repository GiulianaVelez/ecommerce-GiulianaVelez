module.exports = (sequelize, Sequelize) => {
    const Carrito = sequelize.define('Carrito', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        total_precio: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
    
    });

    return Carrito;
};
