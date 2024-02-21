const database = require('../models');

class PersonController {
  static async getAllPersons (req, res) {
    try {
      const personsList = await database.Person.findAll();
      res.status(200).json(personsList);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = PersonController;