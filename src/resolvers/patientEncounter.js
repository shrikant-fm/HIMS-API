//import DB
const DB = require('../../models')
require('dotenv').config();
// const {GraphQLJSON} = require('graphql-type-json');
const moment = require('moment');

module.exports = resolver = {
    Query:{

            async allPatientEncounter(){

                return await DB.PatientEncounter.findAll({});
            },
            async fetchPatientEncounter(_, {id}){
                return await DB.PatientEncounter.findByPk(id);

            },
            
    },
    Mutation:{
      
       async createPatientEncounter(_,{patientId,
        encounterCatalogId,
        encounterTypeText,
        primaryComplaint,
        secondaryComplaint} ){
           console.log("---here  in create patientEncounter");
           const patientEncounter= await DB.PatientEncounter.create({patientId,
            encounterCatalogId,
            encounterTypeText,
            primaryComplaint,
            secondaryComplaint});
         console.log(patientEncounter);
        if(patientEncounter)
        return patientEncounter;
        else
        throw new Error("patientEncounter not created");
        },
    
    }
}