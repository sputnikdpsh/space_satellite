require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./router/index');
const database = require('./database');
const errorMiddleware = require('./middlewares/error-middleware');


const PORT = process.env.NODE_ENV === 'development'
    ? process.env.DEV_PORT
    : process.env.NODE_ENV === 'test'
    ? process.env.TEST_PORT
    : process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
    database.sequelize.sync( { alter: true }).then(result=>{
        console.log("Database synchronized successfully.");
        app.listen(PORT, () => console.log(`Server is started on ${PORT} port`));
    })
    .catch(e => console.log(`Server is down. Reason: ${e}`));
}

start();