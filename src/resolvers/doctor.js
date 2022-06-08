//import DB
const DB = require('../../models')
require('dotenv').config();
const {GraphQLJSON} = require('graphql-type-json');
const moment = require('moment');

module.exports = resolver = {
    Query:{

            async allDoctor(){

                return await DB.Doctor.findAll({});
            },
            async fetchDoctor(_, {id}){
                return await DB.Doctor.findById(id);

            },
            
    },
    Mutation:{
      
       async createDoctor(_,{name,address}){
           console.log("---here  in create encounterType");
        
           console.log("--",encounterType)
            const dr= await DB.Doctor.create({name,address});
            // console.log(patient);
        if(dr)
        return dr;
        else
        throw new Error("dr not created");
        },
    
    }
}