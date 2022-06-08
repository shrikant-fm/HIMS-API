'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PrescriptionCatalog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PrescriptionCatalog.belongsTo(models.PatientCatalog,{
        as:"patient",
        foreignKey:"patientId",
        onDelete: 'CASCADE',
      });
      PrescriptionCatalog.belongsTo(models.Doctor,{
        as:"doctor",
        foreignKey:"doctorId",
        onDelete: 'CASCADE',
      });
    }
  }
  PrescriptionCatalog.init({
    prescriptionImagePath: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PrescriptionCatalog',
  },{ underscored: true});
  return PrescriptionCatalog;
};