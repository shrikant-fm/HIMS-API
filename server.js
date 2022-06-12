require ('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors= require('cors');
const {ApolloServer} = require('apollo-server-express')
var http = require('http')

const typeDefs = require('./src/schema')
const resolvers = require('./src/resolvers')


//config port
const PORT = process.env.PORT || 8081;

const app = express();

//middleware
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));




//Apollo server Connection
const startApolloServer  = async() => {
    try {
        const server = new ApolloServer({
            introspection:true,        
            typeDefs,
            resolvers,
            // context:async(req)=>{
            //     authUser:req.user
            // }
        })
        await server.start();
        server.applyMiddleware({ app, path: '/graphql' })
    
            // const httpServer= http.createServer(app);
            // server.installSubscriptionHandlers(httpServer);
            
       
        console.log(`apollo server is running at http://localhost:${PORT}${server.graphqlPath}`)   
    } catch (error) {
        console.log(error.message)
    }
}



//All routes here
app.get("/",(req,res)=>{res.send("connection Successful")});



//start Apollo Server
startApolloServer();
//start node server
app.listen(PORT,()=>console.log(`Server Running on ${PORT}`));

