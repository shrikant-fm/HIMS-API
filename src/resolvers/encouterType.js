//import DB
const DB = require('../../models')
require('dotenv').config();
const {GraphQLJSON} = require('graphql-type-json');
const moment = require('moment');

module.exports = resolver = {
    Query:{

            async allEncounterType(){

                return await DB.EncounterCatalog.findAll({});
            },
            async fetchEncounterType(_, {id}){
                return await DB.EncounterCatalog.findById(id);

            },
            
    },
    Mutation:{
      
       async createEncouterType(_,{encounterType}, ){
           console.log("---here  in create encounterType");
        
           console.log("--",encounterType);
            const encounter= await DB.EncounterCatalog.create({encounterType});
         console.log(encounter);
        if(encounter)
        return encounter;
        else
        throw new Error("encountertype not created");
        },
    
    }
}