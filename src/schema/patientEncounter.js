const {gql} =require('apollo-server-express');
module.exports = gql`

type patientEncounter{
    id:Int!
    patientId:Int!
    encounterCatalogId:Int!
    encounterTypeText: String
    primaryComplaint: String
    secondaryComplaint: String
    createdAt: DateTime 
    updatedAt: DateTime
}

extend type Query{
    allPatientEncounter:[patientEncounter!]
    fetchPatientEncounter(id:Int!):patientEncounter!
}

extend type Mutation{
    createPatientEncounter( patientId:Int!,
    encounterCatalogId:Int!,
    encounterTypeText: String,
    primaryComplaint: String,
    secondaryComplaint: String):patientEncounter
   
}
`;