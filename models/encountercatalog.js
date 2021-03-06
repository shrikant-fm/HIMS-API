'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EncounterCatalog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EncounterCatalog.hasMany(models.PatientEncounter,{
      as:"patients",
      foreignKey:"encounterCatalogId"})
       
    }
    
  }
  EncounterCatalog.init({
    encounterType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EncounterCatalog',
  });
  return EncounterCatalog;
};