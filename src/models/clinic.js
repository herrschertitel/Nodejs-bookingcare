'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Clinic.hasMany(models.Doctor_Infor, { foreignKey: 'clinicId' })
    }
  };
  Clinic.init({ // viet nhung thuoc tinh cua Clinic vao day
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    image: DataTypes.STRING,
    descriptionHTML: DataTypes.TEXT,
    descriptionMarkdown: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Clinic',
  });
  return Clinic;
};