//import DB
const DB = require('../../models')
require('dotenv').config();
const {GraphQLJSON} = require('graphql-type-json');

const resolver = {
    Query:{
            
    },
    Mutation:{
       async createPrescription(_,
          {  patientId,
            doctorId,
            prescriptionImagePath}){
                return await DB.PrescriptionCatalog.create({patientId,
                    doctorId,
                    prescriptionImagePath});

            },
     
        JSON: {
            __serialize(value) {
              return GraphQLJSON.parseValue(value);
            }
        }
    }
}