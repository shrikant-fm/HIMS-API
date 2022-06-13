'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prescription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Prescription.belongsTo(models.PatientCatalog,{
        as:"patient",
        foreignKey:"patientId",
      });
      Prescription.belongsTo(models.PatientEncounter,{
        as:"encounter",
        foreignKey:"patientEncounterId",
      });
      Prescription.belongsTo(models.Doctor,{
        as:"doctor",
        foreignKey:"doctorId",
      });
    }
  }
  Prescription.init({
    prescriptionImagePath: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Prescription',
  },{ underscored: true});
  return Prescription;
};