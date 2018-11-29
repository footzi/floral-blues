const express = require('express');
const path = require('path');
const config = require('./config');

const app = express();

// Обработка запросов
app.get('/', (req, res) => {
    const menu = [{
        id: '1',
        name: 'Главная'
    }, {
        id: '2',
        name: 'Каталог'
    }]
    res.send("API ROOT");
})

app.get('/menu', (req, res) => {
    const menu = [{
        id: '1',
        name: 'Главная'
    }, {
        id: '2',
        name: 'Каталог'
    }]
    res.send(menu, 200);
})

module.exports = {
    path: "/api",
    handler: app
}