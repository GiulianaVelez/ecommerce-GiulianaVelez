
module.exports = (sequelize, Sequelize) => {
    const Categoria = sequelize.define('Categoria', {
       


        descripcion: {
            type: Sequelize.STRING,
            allowNull: false
        },
    
    });
   


    return Categoria;
};

