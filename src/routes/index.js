const express = require('express');
const persons = require('./personRoutes');
const categories = require('./categoryRoutes');
const courses = require('./coursesRoutes');
const registrations = require('./registrationsRoutes');

const routes = (app) => {
  app.route('/').get((req, res) => res.status(200).send('University API'));
  app.use(express.json(), persons, categories, courses, registrations);
};

module.exports = routes;