const express = require('express');
const PersonController = require('../controllers/personController.js');

const routes = express.Router();

routes.get('/persons', PersonController.getAllPersons);

module.exports = routes;