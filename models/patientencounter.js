'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PatientEncounter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PatientEncounter.belongsTo(models.PatientCatalog,{
        as:"patients",
        foreignKey:"patientId",
        onDelete:"NO ACTION"
      });
      PatientEncounter.belongsTo(models.EncounterCatalog,{
        as:"encountertypes",
        foreignKey:"encounterCatalogId",
        onDelete:"NO ACTION"
      });

    }
    
  }
  PatientEncounter.init({
    patientId:DataTypes.INTEGER,
    encounterCatalogId:DataTypes.INTEGER,
    primaryComplaint: DataTypes.STRING,
    secondaryComplaint: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PatientEncounter',
  });
  return PatientEncounter;
};