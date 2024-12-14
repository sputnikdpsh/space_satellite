require('dotenv').config({ path: '../.env' });
const { Sequelize } = require('sequelize');

let sequelize;

if (process.env.NODE_ENV === 'development') {
    // development
    sequelize = new Sequelize(process.env.DB_DEV_NAME, process.env.DB_DEV_USER, process.env.DB_DEV_PASSWORD, {
        host: process.env.DB_DEV_HOST,
        dialect: 'postgres',
        port: process.env.DB_DEV_PORT,
        logging: false
    });
} else if (process.env.NODE_ENV === 'test') {
    // test
    sequelize = new Sequelize(process.env.DB_TEST_NAME, process.env.DB_TEST_USER, process.env.DB_TEST_PASSWORD, {
        host: process.env.DB_TEST_HOST,
        dialect: 'postgres',
        port: process.env.DB_TEST_PORT,
        logging: false
    });
} else {
    // production
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT,
        logging: false
    });
}

const models = require('./models')(sequelize);

module.exports = {
    sequelize,
    ...models,
};