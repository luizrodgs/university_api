class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getAll(req, res){
    try {
      const dataList = await this.serviceEntity.getAll();
      res.status(200).json(dataList);
    } catch (error) {
      console.log(error);
    }
  }

  async getById(req, res){
    const { id } = req.params;
    try {
      const dataFound = await this.serviceEntity.getById(Number(id));
      res.status(200).json(dataFound);
    } catch (error){
      console.log(error);
    }
  }

  async create(req, res){
    const dataToCreate = req.body;
    try {
      const isCreated = await this.serviceEntity.create(dataToCreate);
      if (!isCreated){
        return res.status(400).json({ message: 'Create data failed'});
      }
      res.status(200).json(isCreated);
    } catch(error){
      console.log(error);
    }
  }

  async updateById(req, res){
    const { id } = req.params;
    const dataToUpdate = req.body;
    try {
      const isUpdated = await this.serviceEntity.updateById(dataToUpdate, Number(id));
      if (!isUpdated) {
        return res.status(400).json({ message: 'Update data failed'});
      }
      return res.status(200).json({ message: 'Updated with success'});
    } catch (error){
      console.log(error);
    }
  }

  async deleteById(req, res){
    const { id } = req.params;
    try {
      const isDeleted = await this.serviceEntity.deleteById(Number(id));
      if (!isDeleted) {
        return res.status(400).json({ message: 'Delete data failed'});
      }
      return res.status(200).json({ message: 'Deleted with success'});
    } catch(error) {
      console.log(error);
    }
  }
}

module.exports = Controller;