const express = require('express');
const route = express.Router();

const Page = require('./src/controllers/Page/home');

route.get('/', Page.index);

module.exports = route;