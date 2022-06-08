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
            async fetchPatient(_, {id}){
                return await DB.PatientCatalog.findById(id);

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
       async createPatient(_,{patientName,dateOfBith,phoneNo,gender,address,district,city,state,pincode,existingAliments}){
           console.log("---here  in create Patient");
           var date = moment(dateOfBith,"YY-MM-DD").format("YY-MM-DD");
           console.log(date);
           console.log("--",patientName)
            const patient= await DB.PatientCatalog.create({patientName,date,phoneNo,gender,address,district,city,state,pincode,existingAliments});
            // console.log(patient);
        if(patient)
        return patient;
        else
        throw new Error("user not created");
        },
        // JSON: {
        //     __serialize(value) {
        //       return GraphQLJSON.parseValue(value);
        //     }
        // }
    }
}