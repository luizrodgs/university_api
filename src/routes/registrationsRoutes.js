const { Router } = require('express');
const RegistrationController = require('../controllers/registrationController.js');

const registrationController = new RegistrationController();

const routes = Router();
routes.get('/registrations', (req, res) => registrationController.getAll(req, res));
routes.get('/registrations/:id', (req, res) => registrationController.getById(req, res));
routes.post('/registrations', (req, res) => registrationController.create(req, res));
routes.put('/registrations/:id', (req, res) => registrationController.updateById(req, res));
routes.delete('/registrations/:id', (req, res) => registrationController.deleteById(req, res));

module.exports = routes;