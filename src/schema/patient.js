const {gql} =require('apollo-server-express');


module.exports= gql`
scalar JSON
scalar Date
type Patient {
    id:Int!
    patientName: String!
    dateOfBith: String!
    phoneNo: Int!
    gender: String!
    address: String!
    district: String!
    city: String!
    state: String!
    pincode: Int!
    existingAilments: JSON!
    createdAt:DateTime! 
    updatedAt:DateTime!
  }
   

extend type Query{
    allPatients:[Patient!]
    fetchPatient(id:Int!):Patient
    
}

extend type Mutation{
    
    patientLogin(phoneNo: Int!):String!
    
    
    createPatient( patientName: String!,
    dateOfBith: String,
    phoneNo: Int!,
    gender: String!,
    address: String!,
    district: String!,
    city: String!,
    state: String!,
    pincode: Int!,
    existingAilments: JSON):Patient   
}

`;
