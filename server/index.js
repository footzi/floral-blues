const express = require('express');
import connectionDB from './database';
import clientRoute from './routes/client';

const app = express();

// Обработка запросов
app.use('/client', clientRoute);
//app.use("/dashboard", dashBoardRoute);

// Синхронизация с БД
connectionDB.sync({
    logging: console.log
});

// Подключение к БД
connectionDB
    .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });

module.exports = {
    path   : '/api',
    handler: app
}