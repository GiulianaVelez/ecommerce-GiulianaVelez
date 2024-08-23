module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('Usuario', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        apellido: {
            type: Sequelize.STRING,
            allowNull: false
        },
       email: {
            type: Sequelize.STRING,
            unique:true,
            allowNull: false
        },
        telefono: {
            type: Sequelize.STRING,
        },
        contraseña: {
            type: Sequelize.STRING,
            allowNull: false
        },
        rol: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Usuario;
};
