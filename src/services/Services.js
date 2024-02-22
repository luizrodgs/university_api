const dataSource = require('../models');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAll() {
    return dataSource[this.model].findAll();
  }

  async getById(id) {
    return dataSource[this.model].findByPk(id);
  }

  async create(dataToCreate) {
    return dataSource[this.model].create(dataToCreate);
  }

  async updateById(dataToUpdate, id) {
    const dataUpdatedList = dataSource[this.model].update(dataToUpdate, {
      where: { id: id }
    });
    if (dataUpdatedList[0] === 0){
      return false;
    }
    return true;
  }

  async deleteById(id) {
    return dataSource[this.model].destroy({ where: { id: id }});
  }
}

module.exports = Services;