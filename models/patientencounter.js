'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patientEncounter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      patientEncounter.belongsTo(models.PatientCatalog,{
        as:"patients",
        foreignKey:"patientId",
      });
      patientEncounter.belongsTo(models.EncounterCatalog,{
        as:"encountertypes",
        foreignKey:"encounterCatalogId",
      });

    }
    
  }
  patientEncounter.init({
    patientId:DataTypes.INTEGER,
    encounterCatalogId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'patientEncounter',
  });
  return patientEncounter;
};