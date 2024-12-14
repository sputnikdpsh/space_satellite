const Sequelize = require('sequelize');
const clients = require('./Clients');

module.exports = function (sequelize) {
    return sequelize.define('ClientLists', {
        client_list_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        client_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: clients(sequelize),
                key: 'client_id'
            },
            onDelete: 'CASCADE'
        }
    }, {
        timestamps: false,
        tableName: 'client_lists'
    });
};