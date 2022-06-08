const {gql} =require('apollo-server-express');
module.exports = gql`

type Doctor{
    id:Int!
    drName:String!
    address:String!
    createdAt:DateTime! 
    updatedAt:DateTime!
}

extend type Query{
    allDoctor:[Doctor!]
    fetchDoctor(id:Int!):Doctor
}

extend type Mutation{
    createDoctor( drName:String!,
    address:String!):Doctor
   
}
`;