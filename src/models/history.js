'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      History.belongsTo(models.User, { foreignKey: 'patientId', targetKey: 'id' })
      History.belongsTo(models.User, { foreignKey: 'doctorId', as: 'Doctor' })
      History.belongsTo(models.Allcode, { foreignKey: 'timeType', targetKey: 'keyMap' })
    }
  };
  History.init({ // viet nhung thuoc tinh cua History vao day
    patientId: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER,
    diagnosis: DataTypes.TEXT,
    date: DataTypes.STRING,
    timeType: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};