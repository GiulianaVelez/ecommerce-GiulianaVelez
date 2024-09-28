

module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('Usuario', {
        
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
        
    });

    return Usuario;
};
