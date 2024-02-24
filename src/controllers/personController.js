const Controller = require('./Controller.js');
const PersonServices = require('../services/PersonServices.js');
const RegistrationServices = require('../services/RegistrationServices.js');

const personServices = new PersonServices();
const registrationServices = new RegistrationServices();

class PersonController extends Controller {
  constructor() {
    super(personServices);
  }

  async getRegistrations(req, res) {
    const { studentId } = req.params;
    try {
      // const student = await super.getById(Number(studentId));
      const registrationList = await registrationServices.getByUserId(studentId);
      return res.status(200).json(registrationList);
    } catch(error){
      console.log(error);
    }
  }
}

module.exports = PersonController;