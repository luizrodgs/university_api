const express = require('express');
const persons = require('./personRoutes');

const routes = (app) => {
  app.route('/').get((req, res) => res.status(200).send('University API'));
  app.use(express.json(), persons);
};

module.exports = routes;