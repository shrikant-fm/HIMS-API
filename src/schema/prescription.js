const {gql} =require('apollo-server-express');
module.exports = gql`

type Prescription{
    id:Int!
    patientId:Int!
    doctorId:Int!
    prescriptionImagePath:String!
    createdAt: Date
}

extend type Query{
    allPrescription:[Prescription!]
    fetchPrescription(id:Int!):Prescription
}

extend type Mutation{
    createPrescription(id:Int!,
    patientId:Int!,
    doctorId:Int!,
    prescriptionImagePath:String!):String!
   
}
# extend type Subscription{
   
# }

`;