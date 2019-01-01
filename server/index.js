import connectionDB from './database';
// import clientRoute from './routes/client';
import pagesRoute from './routes/pages';
// import dashBoardRoute from './routes/dashboard';

const express = require('express');
const app = express();

// Обработка запросов
app.use('/pages', pagesRoute);
// app.use('/client', clientRoute);
// app.use('/dashboard', dashBoardRoute);

// Синхронизация с БД
connectionDB.sync({logging: console.log});

// Подключение к БД
connectionDB
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = {
    path   : '/api',
    handler: app
};
