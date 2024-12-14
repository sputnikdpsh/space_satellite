const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('Users', {
        user_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user_login: {
            type: Sequelize.STRING(50),
            allowNull: false,
            unique: true
        },
        user_pass: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        user_fullname: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        user_email: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        user_activated: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        user_activation_link: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        user_role: {
            type: Sequelize.STRING(50),
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'users'
    });
};