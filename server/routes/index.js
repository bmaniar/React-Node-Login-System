const express = require('express');
const routes = express.Router();

const doLogin = require('../controllers/doLogin');

routes.get('/', (req, res) => {
    res.send('hi');
})
routes.post('/login', doLogin);

module.exports = routes;