const {gql} =require('apollo-server-express');


module.exports= gql`
scalar JSON
scalar Date
type Patient{
    id:Int!
    patientName: String!
    dateOfBirth: DateTime
    phoneNo: String!
    gender: String
    address: String
    district: String
    city: String!
    state: String!
    pincode: Int!
    existingAilments: JSON
    createdAt:DateTime!
    updatedAt:DateTime!
  }
   

extend type Query{
    allPatients:[Patient!]
    fetchPatientByPhoneNo(phoneNo:String!):Patient
    fetchPatientById(id:Int!):Patient
    
}

extend type Mutation{
    
    patientLogin(phoneNo: String!):String!
    
    
    createPatient( patientName: String!,
    dateOfBirth: DateTime!,
    phoneNo: String!,
    gender: String!,
    address: String!,
    district: String!,
    city: String!,
    state: String!,
    pincode: Int!,
    EncounterType: Int!
    existingAilments: JSON):Patient   
}

`;
