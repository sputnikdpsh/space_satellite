const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('Media', {
        media_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        media_name: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        media_description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        media_date_upload: {
            type: Sequelize.DATE,
            allowNull: false
        },
        media_file_type: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        media_file_path: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: 'media'
    });
};