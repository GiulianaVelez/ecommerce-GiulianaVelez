module.exports = (sequelize, Sequelize) => {
    const Rol = sequelize.define('rol', {

        descripcion: {
            type: Sequelize.STRING,
            allowNull: false
        },
    
    });
   


    return Rol;
};

