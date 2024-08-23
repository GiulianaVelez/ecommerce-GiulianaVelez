module.exports = (sequelize, Sequelize) => {
    const CarritoXProducto = sequelize.define('CarritoXProducto', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cantidad: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        precio_unitario: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
    });

    return CarritoXProducto;
};
