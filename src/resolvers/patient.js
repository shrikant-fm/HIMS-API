//import DB
const DB = require('../../models')
require('dotenv').config();
const {GraphQLJSON} = require('graphql-type-json');
const moment = require('moment');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

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
            async fetchPatientGeneral(_, { patientName, phoneNo, gender, dateOfBirth, city, pincode }){
                try {
                    const args = []
                    if (phoneNo) {
                        args.push({ phoneNo: parseInt(phoneNo) })
                    }
                    if (patientName) {
                        args.push({ patientName: { [Op.like]: `%${patientName}%` } })
                    }
                    if (gender) {
                        args.push({ gender: gender })
                    }
                    if (dateOfBirth) {
                        args.push({ dateOfBirth: dateOfBirth })
                    }
                    if (city) {
                        args.push({ city: { [Op.like]: `%${city}%` } })
                    }
                    if (pincode) {
                        args.push({ pincode: pincode })
                    }
                    return await DB.PatientCatalog.findAll(
                        { where: { [Op.and]: args } });
                } catch (error) {
                    console.log(error.message)
                }
                
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
       async createPatient(_, { patientName, dateOfBirth, phoneNo, gender, addressLine1, addressLine2 , district, city, state, pincode}){
        try {
            const patient = await DB.PatientCatalog.create({ patientName, dateOfBirth, phoneNo: parseInt(phoneNo), gender, addressLine1, addressLine2, district, city, state, pincode});
            // const patientEncounter = await DB.patientEncounter.create({patientId:patient.id,encounterCatalogId:EncounterType});
        
            if( patient )
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