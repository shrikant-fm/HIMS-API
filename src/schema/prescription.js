const {gql} =require('apollo-server-express');
module.exports = gql`
  scalar Upload
type Prescription{
    id:Int!
    patientId:Int!
    doctorId:Int!
    prescriptionImagePath:String!
    createdAt: Date
}
type File {
      url: String!
    }
extend type Query{
    allPrescription:[Prescription!]
    fetchPrescription(id:Int!):Prescription
}

extend type Mutation{
    createPrescription(
    patientId:Int!,
    doctorId:Int,
    patinetEncounterId:Int
    prescriptionImagePath:String!):String!

   
      singleUpload(file: Upload): File!
    

}
# extend type Subscription{
   
# }

`;