const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');


const loginUser = (req, res, next) => {
    req.session = {
        user: 'huandrey',
        token: 'hu34&eFE&F!#@3eruhdu2e%%@#&&#$#$%^'
    }


    next()
}
// Rotas da home
route.get('/', homeController.paginaInicial);

route.post('/', homeController.trataPost);

// Rotas de contato
route.get('/contato', contatoController.paginaInicial);


module.exports = route;
