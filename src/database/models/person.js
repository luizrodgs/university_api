'use strict';
const isCpfValid = require('../../utils/validateCpfHelper.js');


const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Person.hasMany(models.Course, {
        foreignKey: 'teacher_id'
      });
    }
  }
  Person.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 30],
          msg: 'Name field should have more than 3 characteres and less than 30 characteres'
        }
      }
    },
    email: { 
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email format'
        }
      }
    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
        cpfIsValid: (cpf) => {
          if (!isCpfValid(cpf)) throw new Error('Invalid CPF number');
        }
      }
    },
    active: DataTypes.BOOLEAN,
    role: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Person',
    tableName: 'persons',
    defaultScope: {
      where: {
        active: true
      }
    },
    scopes: {
      unrestrictedData: {
        where: {}
      }
    },
  });
  return Person;
};