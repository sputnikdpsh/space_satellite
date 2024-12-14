const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('EventTypes', {
        event_type_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        event_type_name: {
            type: Sequelize.STRING(100),
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'event_types'
    })
}