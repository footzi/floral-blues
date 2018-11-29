'use strict'

// All middlewares are used here.
import express from 'express'
import routes from './routes'

export default (app) => {
  app.get('/api/menu', (req, res) => {
    const menu = [{
        id: '1',
        name: 'Главная'
    }, {
        id: '2',
        name: 'Каталог'
    }]
    res.send(menu, 200);
})
}