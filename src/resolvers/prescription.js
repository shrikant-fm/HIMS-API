//import DB
const DB = require('../../models')
require('dotenv').config();
const {GraphQLJSON} = require('graphql-type-json');
//@ts-ignore
const  GraphQLUpload =require('graphql-upload/GraphQLUpload.js');
  const { finished } = require('stream/promises')
  const path = require('path');
  const fs = require('fs')


module.exports = resolver = {
    Upload: GraphQLUpload,
    // Query:{
            
    // },
    Mutation:{
       async createPrescription(_,
          {  patientId,
            doctorId,
            patinetEncounterId,
            prescriptionImagePath}){
                return await DB.Prescription.create({patientId,
                    doctorId,
                    patinetEncounterId,
                    prescriptionImagePath});
            },

            async singleUpload(_, { file }){
                const { createReadStream, filename, mimetype, encoding } = await file;
                const stream = createReadStream();
                const pathName = path.join(__dirname,`../../public/uploads/${filename}`)
                console.log(pathName);
                await stream.pipe(fs.createWriteStream(pathName));
                return{
                    url:`http://localhost:8081/uploads/${filename}`
                }

            },
        // JSON: {
        //     __serialize(value) {
        //       return GraphQLJSON.parseValue(value);
        //     }
        // }
    }
}