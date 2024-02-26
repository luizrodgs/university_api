const Services = require('./Services.js');

class PersonServices extends Services {
  constructor() {
    super('Person');
  }

  async getPersonsByScopeUnrestricted() {
    const personsList = await super.getByScope('unrestrictedData');
    return personsList;
  }
}

module.exports = PersonServices;