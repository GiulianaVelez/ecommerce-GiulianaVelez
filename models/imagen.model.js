

module.exports = (sequelize, Sequelize) => {

    const { DataTypes } = Sequelize;
    const imagen = sequelize.define("imagen", {

        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
         
        ubicacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        nroOrden: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
              
    });

    return imagen;
}
