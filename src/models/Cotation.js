const {Model, DataTypes} = require('sequelize');
const sequelize = require("../database/database");

class Cotacao extends Model {
};

Cotacao.init({
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    valor_total: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    parcelas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valor_parcela: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    modelName: "Cotacao",
    tableName: 'Cotacoes',
    freezeTableName: false,
    timestamps: true
});

module.exports = Cotacao;
