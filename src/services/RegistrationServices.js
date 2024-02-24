const Services = require('./Services.js');
const models = require( '../database/models/index.js');

class RegistrationServices extends Services {
  constructor() {
    super('Registration');
  }

  async getByUserId(studentId) {
    return models.Registration.findAll({
      where: {
        student_id: studentId
      }
    });
  }
}

module.exports = RegistrationServices;