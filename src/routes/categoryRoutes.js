const { Router } = require('express');
const CategoryController = require('../controllers/categoryController.js');

const categoryController = new CategoryController();

const routes = Router();
routes.get('/categories', (req, res) => categoryController.getAll(req, res));
routes.get('/categories/:id', (req, res) => categoryController.getById(req, res));
routes.post('/categories', (req, res) => categoryController.create(req, res));
routes.put('/categories/:id', (req, res) => categoryController.updateById(req, res));
routes.delete('/categories/:id', (req, res) => categoryController.deleteById(req, res));

module.exports = routes;