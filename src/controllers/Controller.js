class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getAll(req, res){
    try {
      const dataList = await this.serviceEntity.getAll();
      res.status(200).json(dataList);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res){
    const { id } = req.params;
    try {
      const dataFound = await this.serviceEntity.getById(Number(id));
      if (dataFound == null){
        throw new Error('Not Found');
      }
      res.status(200).json(dataFound);
    } catch (error){
      if (error.message == 'Not Found') {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
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
      res.status(500).json({ error: error.message });
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
      res.status(500).json({ error: error.message });
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
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = Controller;