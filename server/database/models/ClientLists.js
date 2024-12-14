const Sequelize = require('sequelize');
const clients = require('./Clients');
const events = require("./Events");

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
        },
        client_list_event_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: events(sequelize),
                key: 'event_id'
            },
            onDelete: 'CASCADE'
        }
    }, {
        timestamps: false,
        tableName: 'client_lists'
    });
};