require ('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors= require('cors');
const {ApolloServer} = require('apollo-server-express')
var http = require('http')
const graphqlUploadExpress= require('graphql-upload/graphqlUploadExpress.js')

const typeDefs = require('./src/schema')
const resolvers = require('./src/resolvers')


//config port
const PORT = process.env.PORT || 8081;

const app = express();

//middleware
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static('public'));


//Apollo server Connection
const startApolloServer  = async()=>{
    app.use(graphqlUploadExpress());
    const server = new ApolloServer({
        introspection:true,        
        typeDefs,
        resolvers,
        csrfPrevention:false
        // context:async(req)=>{
        //     authUser:req.user
        // }
    })
    await server.start();
      
    server.applyMiddleware({app,path:'/graphql'})

        // const httpServer= http.createServer(app);
        // server.installSubscriptionHandlers(httpServer);
        
   
    console.log(`apollo server is running at http://localhost:${PORT}${server.graphqlPath}`)
}



//All routes here
app.get("/",(req,res)=>{res.send("connection Successful")});



//start Apollo Server
startApolloServer();
//start node server
app.listen(PORT,()=>console.log(`Server Running on ${PORT}`));

