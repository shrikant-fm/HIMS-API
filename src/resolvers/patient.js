//import DB
const DB = require('../../models')
require('dotenv').config();
const {GraphQLJSON} = require('graphql-type-json');
const moment = require('moment');

module.exports = resolver = {
    Query:{

            async allPatients(){

                return await DB.PatientCatalog.findAll({});
            },
            async fetchPatientByPhoneNo(_, {phoneNo}){
                return await DB.PatientCatalog.findOne({where:{phoneNo: parseInt(phoneNo)}});
            },
            async fetchPatientById(_, {id}){
                return await DB.PatientCatalog.findByPk(id);

            },
            // JSON: {
            //     __serialize(value) {
            //       return GraphQLJSON.parseValue(value);
            //     }
            // }
            
    },
    Mutation:{
        async patientLogin(_,{phoneNo}){
            const patient=await DB.PatientCatalog.findOne({where:{phoneNo}});
            if(!patient)
            {
                throw new Error("No User Found with this Phone Number");
            }
            return patient;
        },
       async createPatient(_,{patientName,dateOfBirth,phoneNo,gender,address,district,city,state,pincode,EncounterType,existingAilments}){
        try {
            const patient = await DB.PatientCatalog.create({patientName,dateOfBirth,phoneNo: parseInt(phoneNo),gender,address,district,city,state,pincode,existingAilments});
            const patientEncounter = await DB.patientEncounter.create({patientId:patient.id,encounterCatalogId:EncounterType});
        
            if(patient)
            return patient;
            else
            throw new Error("user not created");
        } catch (error) {
            console.log(error.message)
        }
    }
        
        // JSON: {
        //     __serialize(value) {
        //       return GraphQLJSON.parseValue(value);
        //     }
        // }
    }
}