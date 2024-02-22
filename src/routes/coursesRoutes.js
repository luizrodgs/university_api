const { Router } = require('express');
const CourseController = require('../controllers/courseController.js');

const courseController = new CourseController();

const routes = Router();
routes.get('/courses', (req, res) => courseController.getAll(req, res));
routes.get('/courses/:id', (req, res) => courseController.getById(req, res));
routes.post('/courses', (req, res) => courseController.create(req, res));
routes.put('/courses/:id', (req, res) => courseController.updateById(req, res));
routes.delete('/courses/:id', (req, res) => courseController.deleteById(req, res));

module.exports = routes;