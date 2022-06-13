const {gql} =require('apollo-server-express');


module.exports= gql`
scalar JSON
scalar Date
type Patient{
    id:Int!
    patientName: String!
    dateOfBirth: DateTime
    phoneNo: Float!
    gender: String
    addressLine1: String
    addressLine2: String
    district: String
    city: String
    state: String
    pincode: Int
    createdAt:DateTime!
    updatedAt:DateTime!
  }
   

extend type Query{
    allPatients:[Patient!]
    fetchPatientByPhoneNo(phoneNo:Float!):Patient
    fetchPatientByEncounterId(encounterId:Float!):Patient
    fetchPatientGeneral(patientName: String, phoneNo: Float, gender: String, dateOfBirth: DateTime, city: String, pincode: Int):[Patient!]
    fetchPatientById(id:Int!):Patient
}

extend type Mutation{
    
    patientLogin(phoneNo: String!):String!
    
    
    createPatient( patientName: String!,
    dateOfBirth: DateTime!,
    phoneNo: Float!,
    gender: String!,
    addressLine1: String!,
    addressLine2: String!,
    district: String!,
    city: String!,
    state: String!,
    pincode: Int!,
    EncounterType: Int!):Patient   
}

`;
