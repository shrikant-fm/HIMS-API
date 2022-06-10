'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PatientCatalog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PatientCatalog.hasMany(models.PrescriptionCatalog,{
        as:'prescription',
        foreignKey:'patientId',
      });
      PatientCatalog.hasMany(models.patientEncounter,{
        as:"encounters",
        foreignKey:'patientId',
      })
    }
  }
  PatientCatalog.init({
    patientName: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    phoneNo: DataTypes.BIGINT,
    gender: DataTypes.STRING,
    address: DataTypes.STRING,
    district: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    pincode: DataTypes.INTEGER,
    existingAilments: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'PatientCatalog',
  });
  return PatientCatalog;
};