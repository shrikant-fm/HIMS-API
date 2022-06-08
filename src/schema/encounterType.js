const {gql} =require('apollo-server-express');
module.exports = gql`

type EncounterType{
    id:Int!
    encouterType:String!
    createdAt:DateTime! 
    updatedAt:DateTime!
}

extend type Query{
    allEncounterType:[EncounterType!]
    fetchEncounterType(id:Int!):EncounterType
}

extend type Mutation{
    createEncouterType(encounterType:String! ):EncounterType
   
}
`;