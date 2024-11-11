
module.exports = (sequelize, Sequelize) => {
    const Categoria = sequelize.define('Categoria', {
       


        descripcion: {
            type: Sequelize.STRING,
            allowNull: false
        },
        descripcion_Header: {
            type: Sequelize.STRING,
            allowNull: false
        },
        imagen: {
            type: Sequelize.STRING,
            allowNull:true
            
        },
    });
   


    return Categoria;
};

