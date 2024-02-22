const { Router } = require('express');
const PersonController = require('../controllers/personController.js');

const personController = new PersonController();

const routes = Router();

routes.get('/persons', (req, res) => personController.getAll(req, res));
routes.get('/persons/:id', (req, res) => personController.getById(req, res));
routes.post('/persons', (req, res) => personController.create(req, res));
routes.put('/persons/:id', (req, res) => personController.updateById(req, res));
routes.delete('/persons/:id', (req, res) => personController.deleteById(req, res));

module.exports = routes;