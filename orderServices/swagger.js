const {getMaxListeners} = require("../orderServices/app/model");
const dbConfig = require('../orderServices/app/config/db.config.js');

const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./endpoints.js']
const port = process.env.PORT || 5000;
const host = "localhost";
const doc = {
    info: {
        version: "1.0.0",
        title: "Order services",
        description : "Order services API documentation "
    },
    
    host: host + ":" + port,

    // host: dbConfig.url,


     basePath: "/",
     schemes: ['http', 'https'],
     consumes: ['application/json'],
     produces: ['application/json'],
     tags: [
         {
             "name": "order"
         }
     ],

     securityDefinitions: {
        bearerAuth: {
             type: "apiKey",
             name: "Authorization",
             bearerFormat:"JWT",
             in: "header"
         }
     },
     security: [{
         bearerAuth: []
     }]

};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() =>{
    require('./server.js')
})