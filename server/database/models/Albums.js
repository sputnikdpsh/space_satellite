const Sequelize = require('sequelize');
const MediaLists = require('./MediaLists');
const Users = require('./Users');

module.exports = function (sequelize) {
    return sequelize.define('Albums', {
        album_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        album_name: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        album_description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        album_date_start: {
            type: Sequelize.DATE,
            allowNull: false
        },
        album_date_end: {
            type: Sequelize.DATE,
            allowNull: false
        },
        album_media_list_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: MediaLists(sequelize),
                key: 'media_list_id'
            }
        },
        album_creator: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Users(sequelize),
                key: 'user_id'
            }
        }
    }, {
        timestamps: false,
        tableName: 'albums'
    });
};