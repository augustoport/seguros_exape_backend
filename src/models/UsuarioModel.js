const {Model, DataTypes} = require('sequelize');
const sequelize = require("../database/database");

class Usuario extends Model {
}

Usuario.init({
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: "Usuario",
    tableName: "Usuarios",
    freezeTableName: false,
    timestamps: true
});

module.exports = Usuario;
