const prescriptionSchema = require('./prescription')
const patientSchema = require('./patient')
const encounterTypesSchema = require('./encounterType')
const doctorSchema = require('./doctor')
const { gql } = require("apollo-server-express")
const { DateTimeTypeDefinition } =  require("graphql-scalars")


const baseSchema = gql`

scalar Date
type Query{
    _:Boolean
}
type Mutation{
    _:Boolean
}
type Subscription{
    _:Boolean
}
`;
module.exports = [DateTimeTypeDefinition,baseSchema,patientSchema,prescriptionSchema,encounterTypesSchema,doctorSchema]