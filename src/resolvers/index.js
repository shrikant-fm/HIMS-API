// const {GraphQLDateTime}= require ('graphql-iso-date')

const { GraphQLScalarType } = require('graphql');

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return value.toISOString();
  },
})

const customScalarResolver ={
    Date:dateScalar    
}

const patientResolver = require('./patient');
const prescriptionResolver =require('./prescription')
const encounterTypeResolver =require('./encouterType')
const DoctorResolver =require('./doctor')
const patientEncounterResolver = require('./patientEncounter')

module.exports = [customScalarResolver,patientResolver,prescriptionResolver,encounterTypeResolver,DoctorResolver,patientEncounterResolver]
